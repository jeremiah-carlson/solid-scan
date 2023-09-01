import QR from './QR'

//import conf from '../configs/default';

const QRArray = (props)=>{


    return (
        <div class="w-4/5 grid grid-cols-3 gap-4">
            <For each={props.qrList}>{
                (qr, i)=><QR label={qr.label} qrString={qr.value}></QR>
            }</For>
        </div>

    );
};

export default QRArray;