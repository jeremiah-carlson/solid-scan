import { createSignal } from "solid-js";


export const [lastScan, setLastScan] = createSignal('No Scan Records');
export const [scanValidation, setScanValidation] = createSignal(false);


 const ScanResult = ()=>{

    return (
            <h1 id="ScanResult" class="w-3/4 m-auto py-3 bg-slate-500 text-center text-3xl rounded-lg transition-all ease-linear duration-150 data-[flash=true]:bg-orange-400" data-flash={scanValidation()}>{lastScan()}</h1>
    );
};

export default ScanResult;