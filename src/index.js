import './js/common';
import './assets/css/style.css';
import './assets/scss/main.scss';
import Icon from './assets/img/icon-4.jpg';

// import 'vue';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // если excluded у минификатора то .min
// import Vue from 'vue';
window.Vue = require('vue');
import store from './store';

const child = document.createElement('img');
child.src = Icon;
document.getElementById('app').appendChild(child);

Vue.component('example-component', require('./components/Example.vue').default);
Vue.component(
	'async-component',
	// The `import` function returns a Promise.
	() => import('./components/Async.vue')
);

new Vue({
	el: '#app',
	store, // :store подключили store из Vuex к Vue
	data(){
		return {
			showComponent: false,
		}
	}
});