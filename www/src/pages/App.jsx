import Clock from '../components/Clock';
import QRArray from '../components/QRArray';

import styles from './App.module.css';

function App() {
  return (
    <div class="bg-slate-800 w-screen h-screen">
      <Clock></Clock>
      <QRArray qrList={["Test1","Test2", "Test1","Test2", "Test1","Test2"]}></QRArray>
    </div>
  );
}

export default App;
