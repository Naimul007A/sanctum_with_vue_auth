import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
createApp(App).mount('#app')
