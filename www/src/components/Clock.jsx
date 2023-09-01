import { createSignal, onCleanup } from "solid-js";

import { getCurrentStrfTime } from "../logic/Helpers";


const Clock = ()=>{
    const [clockTime, setClockTimes] = createSignal(
        getCurrentStrfTime()
    );

    const timer = setInterval(()=>{
        setClockTimes(getCurrentStrfTime());
    }, 1000);

    onCleanup(()=>clearInterval(timer));

    return (
        <>
        <h1 class="text-slate-100 font-semibold text-center text-2xl">{clockTime()}</h1>
        </>
    );
};

export default Clock;