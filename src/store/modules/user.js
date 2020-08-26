// import { login, logout, getInfo } from '@/api/user'
import { login } from '@/api/login'
import { getToken, setToken, removeToken,getRoles, setRoles, removeRoles,getUserinfo, setUserinfo, removeUserinfo } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { Message } from 'element-ui'
import store from '@/store'
import i18n from '@/lang'

const state = {
  token: getToken(),
  roles: [],
  userinfo: getUserinfo()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERINFO: (state,userinfo)=>{
    state.userInfo = userinfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(async (response) => {
        // 获取用户信息
        Message({
          message: i18n.t("login.loginSuccess"),
          type: 'success'
        })
        const token = response.token;
        const role = response.entity.role;
        const userinfo = response.entity;
        // 保存token
        commit('SET_TOKEN', token)
        // 保存roles
        commit('SET_ROLES', [role])
        // 保存用户信息
        commit('SET_USERINFO', userinfo)
        // 添加路由权限
        // // generate accessible routes map based on roles
        const accessRoutes = await store.dispatch('permission/generateRoutes', [role])
        // // dynamically add accessible routes
        router.addRoutes(accessRoutes)
        setRoles(role)
        setToken(token)
        setUserinfo(userinfo)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      try {
        const data = getRoles();
        commit('SET_ROLES', [data])
        resolve([data])
      } catch (error){
        reject(error)
      }
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_USERINFO', {})
        removeToken()
        resetRouter()
        removeRoles()
        removeUserinfo()
        resolve()
      }).catch(error => {
        reject(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
