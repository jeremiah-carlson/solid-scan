import Clock from '../components/Clock';
import QR from '../components/QR';
import QRArray from '../components/QRArray';
import MainInput from '../components/MainInput';
import CategorySet from '../components/CategorySet';
import ScanResult from '../components/ScanResult';

import handleScanEvent from '../logic/ScanEvents'
import SettingDialogSet from '../components/SettingDialogSet';

export default function Abstract(props) {// <-- Change function name
  return (
    <form action="POST" onsubmit={(e)=>handleScanEvent(e, props.conf)} >
    
    <div class="bg-slate-800 w-screen h-screen flex flex-col justify-evenly align-middle">


      <div>
        <div class="absolute top-0 left-0 w-20 h-20"><QR label="" rounded="rounded-sm" qrString={['', '0', '0'].join(props.conf.delims.settings)}></QR></div>
        <div class="absolute top-2 right-4"><Clock></Clock></div>
      </div>

      
      <CategorySet conf={props.conf}/>

      <div class='w-full flex flex-row justify-center'>
        <MainInput></MainInput>
      </div>
      
      <div class='w-full flex flex-row justify-center'>
        <ScanResult></ScanResult>
      </div>
      

    </div>
    <SettingDialogSet conf={props.conf}/>
    </form>
  );
};

