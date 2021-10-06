import router from '~/routes'

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        updateLoggedIn(state, payload) {
            state.isLoggedIn = payload
        }
    },
    actions: {
        initialize({ commit }) {
            console.log(localStorage.getItem('isLoggedIn'))
            if (localStorage.getItem('isLoggedIn')) {
                commit('updateLoggedIn', true)
            }
        },
        logIn({ commit }, payload) {
            const { id, pw } = payload
            if (id && pw) {
                localStorage.setItem('isLoggedIn', true) //로컬스토리지는 반응형이 아님(새로고침해도 유지됨)
                commit('updateLoggedIn', true) //store의 데이터는 반응형으로 활용
                const { redirect } = router.currentRoute.value.query
                if (redirect) {
                    router.push(redirect)
                } else {
                    router.push('/')
                }
            }
        },
        logOut({ commit }) {
            localStorage.removeItem('isLoggedIn', false)
            commit('updateLoggedIn', false)
            const { requiresAuth } = router.currentRoute.value.meta
            if (requiresAuth) {
                router.push('/')
            }
        }
    }
}
