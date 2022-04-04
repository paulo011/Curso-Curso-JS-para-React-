import './src/components/settings/styles/colors.css'
import  './src/components/generic/reset.css'
import './src/components/elements/base.css'
import Boardgame from './src/objets/BoardGame';


const $htmlBoardgame = Boardgame(6);


const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', $htmlBoardgame);


