import { For } from 'solid-js';
import conf from '../configs/default'


const Category = ()=>{
    return (
        <div class="grid grid-cols-2 gap-y-2 gap-x-32 align-middle px-20 py-8">
            <For each={conf.categories}>{
                (cat, i)=><div class="flex flex-col justify-center align-middle">
                    <h1 class="text-slate-100 text-center text-3xl p-2">{cat.name}</h1>
                    <input name={cat.name} class="text-xl text-center bg-slate-400" value={cat.options[0]}>{cat.options[0]}</input>
                </div>
            }</For>
        </div>
        
    )
};

export default Category;