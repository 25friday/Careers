import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBg9Mzv-KX50nBnt7X77Sx3OWUMXky2qjI",
  authDomain: "friday-careers.firebaseapp.com",
  databaseURL: "https://friday-careers.firebaseio.com",
  projectId: "friday-careers",
  storageBucket: "friday-careers.appspot.com",
  messagingSenderId: "301320673116",
  appId: "1:301320673116:web:938410d0613d9516"
};

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
