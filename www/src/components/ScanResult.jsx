import { createSignal } from "solid-js";


export const [lastScan, setLastScan] = createSignal('No Scan Records');


 const ScanResult = ()=>{

    return (
            <h1 id="ScanResult" class="w-3/4 m-auto py-3 bg-slate-500 text-center text-3xl rounded-lg">{lastScan()}</h1>
    );
};

export default ScanResult;