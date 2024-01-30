import Request from '../Axios'
const request = Request()
request.defaults.baseURL = process.env.VUE_APP_BASE_URL + '/commoditycenter'

export function getUserInfo(params) {
  return request.post('/lmuser/getUser', params)
}
