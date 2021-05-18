/* eslint-disable no-console */
export default function (store, route) {
  console.log('[middleware permission.js]: route info --->', route)
  const routeName = route.name
  console.log(routeName)
}
