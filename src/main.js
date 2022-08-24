import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import router from "./route/routes";
import { createPinia } from 'pinia';

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const app = createApp(App);
app.config.globalProperties.$log = console.log
app.use(Quasar, {
		plugins: {}, // import Quasar plugins and add here
	})
  .use(router)
  .use(createPinia())
  .use(hljsVuePlugin)
	.mount("#app");