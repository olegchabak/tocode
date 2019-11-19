import './js/common';
import './css/style.css';
import './scss/main.scss';

// import 'vue';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // если excluded у минификатора то .min
// import Vue from 'vue';
window.Vue = require('vue/dist/vue');

Vue.component('example-component', require('./components/Example.vue').default);

new Vue({
	el: '#app'
});