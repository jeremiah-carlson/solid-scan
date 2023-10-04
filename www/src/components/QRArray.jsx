import QR from './QR'

//import conf from '../configs/default';

const gridCalc = {

    cols: (arrLen)=>{
        return `grid-cols-${Math.ceil((arrLen+1) / 2)}`
    },

    rows: (arrLen)=>{
        return `grid-rows-${Math.ceil((arrLen+1) / 4)}`
    }

};



const QRArray = (props)=>{


    return (
        <div class={`w-full h-full grid grid-flow-col ${gridCalc.cols(props.qrList.length)} ${gridCalc.rows(props.qrList.length)} gap-20`}>
            <For each={props.qrList}>{
                (qr, i)=><QR rounded="rounded-none" label={qr.label} qrString={qr.value}></QR>
            }</For>
        </div>

    );
};

export default QRArray;