import ReactDOM from 'react-dom/client';
import { InitialScreen } from './features/InitialScreen/InitialScreen';
import './styles/global.css';

if(!localStorage["lang"]) {
  localStorage["lang"] = "ptBR";
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div id="app">
      <InitialScreen />
  </div>
)