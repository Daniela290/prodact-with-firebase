import firebase from "firebase";
/*eslint-disable*/
export default {
    actions: {
        async GET_CURRENT_USER({dispatch, commit}) {
            const userId = await dispatch('GET_USER_ID')
            if(userId) {
                const info = await firebase.database().ref(`/users/${userId}/info/`)
                    .once('value')
                    .then((data) => data.val())
                const user = {
                    id: userId,
                    name: info.name,
                    email: info.email
                }
                commit('SET_CURRENT_USER_DATA', user)
            }
        },
    },
}