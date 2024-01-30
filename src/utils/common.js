export function toLogin() {
  const href = window.location.href
  const newHref = href.includes('https') ? href : href.replace('http', 'https')
  console.log('newHref', newHref)
  window.location.href = process.env.VUE_APP_ISSO_LOGOUT_URL + encodeURIComponent(newHref)
}
