/**
 * public user info related vuex codes here
 */

export const state = () => ({
  userName: '', // 名称
  email: '', // 邮箱
  avatar: '', // 头像URL信息
  role: '', // 角色信息
  position: '', // 职位信息
  accountType: '', // 账号类型
  isLogin: false, // 默认未登录
  space: {
    name: '', // 空间名称
    type: undefined, // 用户所处空间 [当前空间类型: personal | enterprise]
  },
  permissionRoutes: [],
})

export const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userName = userInfo.userName
    state.email = userInfo.email
    state.avatar = userInfo.logo
    state.role = userInfo.role
    state.position = userInfo.position
    state.accountType = userInfo.accountType
  },
  SET_LOGIN_STATE(state, userInfo) {
    state.isLogin = !!userInfo.sid
  },
  SET_USER_SPACE(state, userInfo) {
    // todo
    state.space = {
      name: 'Test',
      type: 'personal',
    }
  },
  // 根据用户信息判断用户能访问的router列表
  SET_USER_ROUTERS(state, type) {
    // todo
    // state.space
  },
}

export const actions = {
  login({ commit }, userInfo) {
    // todo 登錄相關操作
  },
  logout({ commit, state }) {
    // todo 登出相關操作
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      // todo 清除token操作
      commit('RESET_USER_STATE')
      resolve()
    })
  },
}
