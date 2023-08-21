import { createSignal, onCleanup } from "solid-js";

function getCurrentStrfTime() {
    let date = new Date();
    let out = `${date.getHours()}:${('0' + date.getUTCMinutes()).slice(-2)}:${('0' + date.getUTCSeconds()).slice(-2)}`;
    return out;
};


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