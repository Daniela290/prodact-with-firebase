import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import './assets/styles/variables.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/database';

Vue.use(Element)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

firebase.initializeApp({
    apiKey: "AIzaSyBSDS92kXuAJclL8G8NFjkUo6fYEyiQiE0",
    authDomain: "prodact-pr-866c1.firebaseapp.com",
    databaseURL: "https://prodact-pr-866c1-default-rtdb.firebaseio.com",
    projectId: "prodact-pr-866c1",
    storageBucket: "prodact-pr-866c1.appspot.com",
    messagingSenderId: "785419498425",
    appId: "1:785419498425:web:761171621977ef65ab3c68"
})

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            render: h => h(App),
            router,
            store
        }).$mount('#app')
    }
})
