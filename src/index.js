import './styl/base.css';
import {createApp} from 'vue';
import App from './view/app';

const app = createApp({
  ...App,
});
app.mount('#app');

