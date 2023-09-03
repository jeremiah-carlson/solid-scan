import { createSignal } from "solid-js";

import QRArray from "./QRArray";

export const [dialogVis, setDialogVis] = createSignal(Array.from({length: 20}, ()=>false));

const SettingDialog = (props)=>{
    return (
        <dialog open={dialogVis()[Number(props.index)]} id={'dialog-'+props.setting} class="z-[999] bg-slate-900 absolute top-0 left-0 w-full h-full p-10">
            <QRArray qrList={props.qrList}/>
        </dialog>
    )
};

const SettingDialogSet = (props)=>{
    setDialogVis(props.conf.categories.map(() => false));
    return (
    <>
        <For each={props.conf.categories}>{
            (category, i)=>{
            return <SettingDialog index={i()} setting={category.name} qrList={category.options.map((x, ind)=>{return {label:x, value:['', i()+1, ind].join(props.conf.delims.settings)}})}/>
        }
        }</For>
    </>
    )
}

export default SettingDialogSet;