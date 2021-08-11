import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import user from './modules/user'

export interface State {
  count: number,
  self:number
}

export interface QState {
  count: number,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
      self: 1,
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