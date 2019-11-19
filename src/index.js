import './js/common';
import './css/style.css';
import './scss/main.scss';

// import 'vue';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // если excluded у минификатора то .min
// import Vue from 'vue';
window.Vue = require('vue');
import store from './store';

Vue.component('example-component', require('./components/Example.vue').default);

new Vue({
	el: '#app',
	store, // :store подключили store из Vuex к Vue
	data(){
		return {
			showComponent: false,
		}
	}
});