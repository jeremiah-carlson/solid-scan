import conf from "../configs/default";

import { setLastScan } from "../components/ScanResult";
import { setMainInputVal } from "../components/MainInput";
import { setDialogVis } from "../components/SettingDialogSet";
import { setCategoryOptionIndex } from "../components/CategorySet";


const postURL = new URL(conf.output.path, conf.output.origin);
let currentCategoryOptions = conf.categories.map(()=>0);

const handleScanEvent = (event)=>{
    event.preventDefault();

    let entry = event.target.querySelector('#MainInput').value;

    if (entry.startsWith(conf.delims.settings)) {// Setting

        let settingList = entry.split(conf.delims.settings)
        let tmpSetting = {
            index: Number(settingList[1]),
            option: Number(settingList[2]),
        }

        setDialogVis(conf.categories.map((x, i)=>{
            return i == tmpSetting.index
         }));
        
        if ((tmpSetting.index > 0)  && (tmpSetting.index <= currentCategoryOptions.length)) {
            currentCategoryOptions[tmpSetting.index-1] = Number(tmpSetting.option);
            setCategoryOptionIndex(currentCategoryOptions);
            console.log(tmpSetting, currentCategoryOptions);
        };
        

        

        //document.querySelectorAll('dialog').forEach((x)=>{x.close();});
        //document.querySelector(`#dialog-${'Category1'}`).show();
        console.log('Is Setting');

    } else if (entry.split(conf.delims.mainInput).length == conf.input.labels.length) {// Valid Entry
        setLastScan(entry);
        console.log('Is Input');
    } else {// Invalid
        console.log('Invalid input');
    };

    document.querySelector("#MainInput").value = '';
    let inpList = event.target.querySelectorAll('input:not([type=submit])');
    //console.log(`Submitted: ${event.timeStamp}`, inpList);
};


export default handleScanEvent;