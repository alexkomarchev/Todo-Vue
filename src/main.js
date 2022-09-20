import { createApp } from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faPenToSquare,faCheck,faXmark,faLightbulb,faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


library.add(faPenToSquare,faCheck,faXmark,faTrashCan,faLightbulb,faScrewdriverWrench)


createApp(App).use(BootstrapVue3).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
