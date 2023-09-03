import QRCode from 'qrcode';

const QR = (props)=>{
  let qrUrl = '';

  QRCode.toString(props.qrString, { errorCorrectionLevel: 'H' }, (err, url)=>{
    if (err == null){
      //console.log(url);
      qrUrl = url;
    } else {
      console.log(err);
      qrUrl = err;
    };
  });

  return (
    <div class="flex flex-col justify-center align-middle">
    <h1 class="text-slate-200 text-center font-bold">{props.label}</h1>
    <div class={`${props.rounded} overflow-clip flex flex-col justify-center align-middle`} innerHTML={qrUrl}></div>
    </div>
  );
};

export default QR;