import QR from './QR'

//import conf from '../configs/default';

const QRArray = (props)=>{


    return (
        <div class="w-full h-full grid grid-flow-col grid-rows-2 gap-4 gap-y-8">
            <For each={props.qrList}>{
                (qr, i)=><QR rounded="rounded-none" label={qr.label} qrString={qr.value}></QR>
            }</For>
        </div>

    );
};

export default QRArray;