import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.NODE_ENV.VUE_APP_BASE_URL,
  timeout: 50000,
  changeOrigin: true
})

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    // if(response.data.code === 200) {
    //   return response.data;
    // }
    return response.data

    // return Promise.reject(response)
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error)
  }
)

export default instance
