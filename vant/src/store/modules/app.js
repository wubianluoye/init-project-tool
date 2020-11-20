import { getStorage, setStorage } from '@/utils'

const state = {
  mToken: getStorage('mToken')
}
const mutations = {
  SET_TOKEN(state, val) {
    state.mToken = val
    setStorage('mToken', val)
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
