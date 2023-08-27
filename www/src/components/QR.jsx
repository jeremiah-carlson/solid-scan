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
    <div class="">
    <h1 class='text-slate-200 text-center font-bold'>{props.label}</h1>
    <div class="rounded-xl overflow-clip" innerHTML={qrUrl}></div>
    </div>
        
      
  );
};

export default QR;