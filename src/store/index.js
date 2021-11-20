import Vue from 'vue'
import Vuex from 'vuex'
import signIn from "./signIn";
import user from "./user";

Vue.use(Vuex)
/*eslint-disable*/
const store = new Vuex.Store({
    state: {
        currentUser: {}
    },
    mutations: {
        SET_CURRENT_USER_DATA(state, user) {
            state.currentUser = JSON.parse(JSON.stringify(user))
        },
        DELETE_CURRENT_USER(state) {
            state.currentUser = {}
        }
    },
    modules: {signIn, user}
})

export default store