import QR from './QR'

//import conf from '../configs/default';

const QRArray = (props)=>{


    return (
        <div class="w-full grid grid-cols-6 px-6 gap-4">
            <For each={props.qrList}>{
                (qr, i)=><QR label={qr.label} qrString={qr.value}></QR>
            }</For>
        </div>

    );
};

export default QRArray;