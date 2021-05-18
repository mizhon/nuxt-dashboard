/**
 * app settings related vuex codes here
 */
import Cookies from 'js-cookie'

export const state = () => ({
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
  // 面包屑的初始值为空，在@pulgin/app-init中赋值
  breadcrumb: {
    name: '',
    level: [],
  },
})

export const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    // 切换sidebar状态时将sidebar状态值存入cookie中
    state.sidebar.opened
      ? Cookies.set('sidebarStatus', 1)
      : Cookies.set('sidebarStatus', 0)
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_BREADCRUMB: (state, breadcrumb) => {
    state.breadcrumb = breadcrumb
  },
}

export const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
}
