import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export default new Vuex.Store({
    state: {
       
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') || '',
        
    },
    mutations: {
        setlogin(state, payload) {
            var user = {
                orgid: payload.orgId,
                userid: payload.user,
                status: 'active',
            };
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', payload.token);
        },
       
    },
    actions: {
        // login
        setlogin({ commit }, payload) {
            commit('setlogin', payload)
        },

       

    },
    getters: {
        // dptr: state => departmentRoute
    },

})