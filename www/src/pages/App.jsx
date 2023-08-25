import Clock from '../components/Clock';
import QR from '../components/QR';
import QRArray from '../components/QRArray';
import MainInput from '../components/MainInput';
import Category from '../components/Category';
import ScanResult from '../components/ScanResult';

import handleScanEvent from '../logic/ScanEvents'
import SettingDialogSet from '../components/SettingDialogSet';

import conf from '../configs/default';

function App() {
  return (
    <form action="POST" onsubmit={(e)=>handleScanEvent(e)} >
    
    <div class="bg-slate-800 w-screen h-screen flex flex-col justify-evenly align-middle">


      <div>
        <div class="absolute top-0 left-0 w-20 h-20"><QR qrString="@@setting@@"></QR></div>
        <div class="absolute top-2 right-4"><Clock></Clock></div>
      </div>

      
      <Category></Category>

      <div class='w-full flex flex-row justify-center'>
        <MainInput></MainInput>
      </div>
      
      <div class='w-full flex flex-row justify-center'>
        <ScanResult></ScanResult>
      </div>
      

    </div>
    <SettingDialogSet categories={conf.categories}/>
    </form>
  );
}

export default App;
