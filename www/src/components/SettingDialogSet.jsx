import { createSignal } from "solid-js";

import conf from "../configs/default";
import QRArray from "./QRArray";



export const [dialogVis, setDialogVis] = createSignal(conf.categories.map(() => false));

const SettingDialog = (props)=>{
    return (
        <dialog open={dialogVis()[Number(props.index)]} id={'dialog-'+props.setting} class="z-[999] bg-slate-900 absolute top-0 left-0 w-screen h-screen">
            <QRArray qrList={props.qrList}/>
        </dialog>
    )
};

const SettingDialogSet = (props)=>{
    let categoryList = props.categories;
    
    return (
    <>
        <For each={categoryList}>{
            (category, i)=>{
            return <SettingDialog index={i()} setting={category.name} qrList={category.options.map((x, ind)=>{return {label:x, value:['', i(), ind].join(conf.delims.settings)}})}/>
        }
        }</For>
    </>
    )
}

export default SettingDialogSet;