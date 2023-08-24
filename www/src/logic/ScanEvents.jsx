

const handleScanEvent = (event)=>{
    event.preventDefault();
    let inpList = event.target.querySelectorAll('input:not([type=submit])');




    console.log(`Submitted: ${event.timeStamp}`, inpList);
    
};


export default handleScanEvent;