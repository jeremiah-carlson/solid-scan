import QRArray from "./QRArray";

const SettingDialog = (props)=>{
    return (
        <dialog id={'dialog-'+props.setting} class="z-[999] bg-slate-900 absolute top-0 left-0 w-screen h-screen">
            <QRArray qrList={props.qrList}/>
        </dialog>
    )
};

const SettingDialogSet = (props)=>{
    let categoryList = props.categories;
    
    return (
    <>
        <For each={categoryList}>{
            (category, i)=><SettingDialog setting={category.name} qrList={category.options}/>
        }</For>
    </>
    )
}

export default SettingDialogSet;