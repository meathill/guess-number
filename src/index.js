import './styl/base.css';
import './styl/screen.styl';
import {createApp} from 'vue';
import App from '@/view/app';
import store from '@/store';
import router from '@/router';

const app = createApp({
  ...App,
});
app.use(store);
app.use(router);
app.mount('#app');
