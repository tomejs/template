import Tome from 'tomejs';
import './style.css';
import App from './App.tome';
import { pages, components, store } from '~tome-meta';

const app = new Tome({
  routes: pages,
  components,
  store,
  root: document.getElementById('app'),
  component: App,
});
