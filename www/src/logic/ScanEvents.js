import conf from "../configs/default";

const postURL = new URL(conf.output.path, conf.output.origin);

const handleScanEvent = (event)=>{
    event.preventDefault();

    let entry = event.target.querySelector('#MainInput').value;

    console.log(entry);

    if (entry.startsWith(conf.delims.settings)) {// Setting
        console.log('Is Setting');

    } else if (entry.split(conf.delims.mainInput).length == conf.input.labels.length) {// Valid Entry
        console.log('Is Input');
    } else {// Invalid
        console.log('Invalid input');
    };

    
    let inpList = event.target.querySelectorAll('input:not([type=submit])');




    //console.log(`Submitted: ${event.timeStamp}`, inpList);
    
};


export default handleScanEvent;