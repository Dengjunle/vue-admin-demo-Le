import request from '@/utils/request';
import {BASE} from "./config";

// 登录获取用户信息
export function login(data){
    return request({
        url:`${BASE}/auth/login`,
        method:'post',
        data
    })
}