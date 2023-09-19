import QRCode from 'qrcode';

const qrClick = (data, event)=>{
  let inp = document.querySelector("#MainInput");
  inp.innerHTML=data;
  inp.value = data;
  document.querySelector("#MainSubmit").click();
}

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
    <a href="#"  onDblClick={[qrClick, props.qrString]} class='z-200'>
    <div class={`${props.rounded} overflow-clip flex flex-col justify-center align-middle`} innerHTML={qrUrl}></div>
    </a>
    </div>
  );
};

export default QR;