import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { UserInfo } from '../types'
import user from './modules/user'

export interface State {
  count: number
  //modules
  user?: { userInfo: UserInfo }
}

export interface QState {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  modules: {
    user,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
