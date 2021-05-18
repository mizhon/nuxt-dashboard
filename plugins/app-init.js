export default function ({ store }) {
  // get from cookies
  const userInfo = {}

  const workspace = {
    name: 'Hello World',
    type: 'personal',
  }

  // TODO 根据userInfo信息获取breadcrumb的基本信息
  const breadcrumb = {
    name: 'Dashboard',
    level: ['Dashboard'],
  }
  store.commit('user/SET_USER_INFO', userInfo)
  store.commit('user/SET_LOGIN_STATE', userInfo)
  store.commit('user/SET_USER_SPACE', workspace)
  store.commit('app/SET_BREADCRUMB', breadcrumb)
}
