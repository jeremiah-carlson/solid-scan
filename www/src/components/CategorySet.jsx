import { For, createSignal } from 'solid-js';
import conf from '../configs/default'

export const [categoryOptionIndex, setCategoryOptionIndex] = createSignal(conf.categories.map(()=>0));

const Category = (props)=>{
    let cat = props.category;
    let index = Number(props.index);
    let selectedOption = cat.options[categoryOptionIndex()[index]]
    return (
        <div class="flex flex-col justify-center align-middle">
                    <h1 class="text-slate-100 text-center text-3xl p-2">{cat.name}</h1>
                    <h1 name={cat.name} class="text-xl text-center bg-slate-400" data-category={cat.name} data-option={cat.options[categoryOptionIndex()[index]]}>{cat.options[categoryOptionIndex()[index]]}</h1>
        </div>
    )
}


const CategorySet = ()=>{
    return (
        <div class="grid grid-cols-2 gap-y-2 gap-x-32 align-middle px-20 py-8">
            <For each={conf.categories}>{
                (cat, i)=><Category index={i()} category={cat}/>
            }</For>
        </div>
        
    )
};

export default CategorySet;