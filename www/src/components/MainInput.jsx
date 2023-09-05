import { createSignal, onMount } from "solid-js";

export const [mainInputVal, setMainInputVal] = createSignal('');


const MainInput = ()=>{
    onMount(()=>{
        document.querySelector('#MainInput').focus()
    });


    return (
        <div class="w-1/2 h-0 overflow-hidden">
            <input id="MainInput" onBlur="this.focus()" autocomplete="off" class="w-full h-16 rounded-md p-4 text-2xl" value={mainInputVal()}></input>
            <input type='submit' hidden></input>
        </div>
        
    );

};

export default MainInput;