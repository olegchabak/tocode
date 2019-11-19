import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import example from './example';


// передаем в стор
export default new Vuex.Store({
	// нехорошо передавать сразу все мутации, гетттеры, стейт и пр. Хорошо делить на модули
	// state: {
	// 	count: 0
	// },
	// mutations: {
	// 	increment (state) {
	// 		state.count++
	// 	}
	// }
	modules: {
		example,//: example

	}
});