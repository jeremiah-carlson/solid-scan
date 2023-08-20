import QR from './QR'

const QRArray = (props)=>{


    return (
        <div class="w-4/5 grid grid-cols-3 gap-4">
            <For each={props.qrList}>{
                (qr, i)=><QR qrString={qr}></QR>
            }</For>
        </div>

    );
};

export default QRArray;