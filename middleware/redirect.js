export default function ({ store, redirect }) {
  const pathName = window.location.pathname

  // if user is not authenticated
  if (store.state.isLogin) {
    return redirect('/login')
  }

  // 当输入页面为根目录时，根据用户状态跳转至指定页面
  if (pathName === '/') {
    // eslint-disable-next-line no-console
    redirect('/enterprise/dashboard')
  }
}
