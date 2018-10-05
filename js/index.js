import '../css/style.scss';
import { Elm } from '../src/Main.elm';


const app = Elm.Main.init({
    node: document.getElementById('root'),
    flags: {session: localStorage.session || null},
  });
  
