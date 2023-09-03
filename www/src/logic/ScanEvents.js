import { setLastScan, setScanValidation } from "../components/ScanResult";
import { setMainInputVal } from "../components/MainInput";
import { setDialogVis } from "../components/SettingDialogSet";
import { setState } from "../components/CategorySet";
import { PostMain } from "./PostMain";
import { AssembleBodyData, FormatDisplayedInput } from "./Helpers";

const scanQueue = [];
PostMain(scanQueue);


const handleScanEvent = (event, conf)=>{
    event.preventDefault();

    let postURL = new URL(conf.output.path, conf.output.origin);
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
        
        if ((tmpSetting.index > 0)  && (tmpSetting.index <= conf.categories.length)) {// Set Category Option
            setState(tmpSetting.index-1, 'currentId', Number(tmpSetting.option));
            localStorage.setItem(`defaultCategory${conf.categories[tmpSetting.index-1].name}`, tmpSetting.option);
        };
        
        (conf.debug == true) ? console.log('Is Setting') : undefined;

    } else if (entry.split(conf.delims.mainInput).length == conf.input.labels.length) {// Valid Entry
        setScanValidation(true);
        let entryArr = entry.split(conf.delims.mainInput);
        let inputParsed = Object.fromEntries(conf.input.labels.map((l, i)=>[l, entryArr[i]]))
        let bdyData = AssembleBodyData(Object.assign({}, inputParsed, conf.input.constants));

        setLastScan(FormatDisplayedInput(inputParsed));
        scanQueue.push({destination: postURL, data: bdyData});
        
        (conf.debug == true) ? console.log(scanQueue) : undefined;
        (conf.debug == true) ? console.log('Is Input') : undefined;
        setTimeout(()=>{setScanValidation(false)}, 500);
    } else {// Invalid
        setLastScan(`Invalid Input: ${entry}`);
        (conf.debug == true) ? console.log(`Invalid Input: ${entry}`) : undefined;
    };

    document.querySelector("#MainInput").value = '';
    let inpList = event.target.querySelectorAll('input:not([type=submit])');
};


export default handleScanEvent;