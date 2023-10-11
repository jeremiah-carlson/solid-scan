import QR from './QR'

//import conf from '../configs/default';
const gridCalc = {
    cols: (arrLen) => {
        let additionalCols = Math.ceil((arrLen-6) / 3); 
        let xs = 2 + additionalCols;
        let small = 3 + additionalCols;
        let medium = 3 + additionalCols;
        let large = 3 + additionalCols;
        let xl = 4 + additionalCols;
        if (arrLen < 5) {
            xs = small = medium = large = xl = arrLen;
        }
        return `grid-cols-${xs} sm:grid-cols-${small} md:grid-cols-${medium} lg:grid-cols-${large} xl:grid-cols-${xl}`;
    }
};


//${gridCalc.cols(props.qrList.length)}
const QRArray = (props) => {
    return (
        <div className={`w-full mx-auto h-full grid ${gridCalc.cols(props.qrList.length)} justify-center gap-5 md:gap-10`}>
            <For each={props.qrList}>{
                (qr, i) => <QR rounded="rounded-none" label={qr.label} qrString={qr.value}></QR>
            }</For>
        </div>
    );
};

export default QRArray;