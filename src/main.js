import { createApp } from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPenToSquare,faCheck} from "@fortawesome/free-solid-svg-icons";



library.add(faPenToSquare,faCheck)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
