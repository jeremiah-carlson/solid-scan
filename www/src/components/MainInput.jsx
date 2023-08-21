import { onMount } from "solid-js";


const MainInput = ()=>{
    onMount(()=>{
        document.querySelector('#MainInput').focus()
    });


    return (
        <div class="w-1/2">
            <input id="MainInput" onBlur="this.focus()" class="w-full h-16 rounded-md p-4 text-2xl"></input>
            <input type='submit' hidden></input>
        </div>
        
    );

};

export default MainInput;