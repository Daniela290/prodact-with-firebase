import firebase from "firebase";
/*eslint-disable*/
export default {
    actions: {
        async LOG_IN_USER({commit, dispatch}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                await dispatch('GET_CURRENT_USER')
            } catch (e) {
                console.log(e)
            }
        },
        async REGISTER_USER({commit, dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const user = await dispatch('GET_USER_ID')
                await firebase.database().ref(`/users/${user}/info`).set({name, email})
                await dispatch('GET_CURRENT_USER')
            } catch (e) {
                console.log(e)
            }
        },
        GET_USER_ID() {
            return firebase.auth().currentUser ? firebase.auth().currentUser.uid : null
        },
        async LOG_OUT_USER({commit}) {
            await firebase.auth().signOut()
            commit('DELETE_CURRENT_USER')
        }
    }
}