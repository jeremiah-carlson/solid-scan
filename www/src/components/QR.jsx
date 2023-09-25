import QRCode from 'qrcode';

const qrClick = (data, event)=>{
  let inp = document.querySelector("#MainInput");
  inp.innerHTML=data;
  inp.value = data;
  document.querySelector("#MainSubmit").click();
}

const QR = (props)=>{
  let qrUrl = '';

  QRCode.toString(props.qrString, { type: "svg", errorCorrectionLevel: 'H' }, (err, url)=>{
    if (err == null){
      //console.log(url);
      qrUrl = url;
    } else {
      console.log(err);
      qrUrl = err;
    };
  });

  return (
    <div class="flex flex-col justify-center align-middle relative w-full h-full">
    <h1 class="text-slate-700 text-center w-full font-semibold text-lg z-[900] absolute left-0 top-0">{props.label}</h1>
    <a href="#"  onDblClick={[qrClick, props.qrString]} class='z-200 absolute left-0 top-0 w-full text-align-center' innerHTML={qrUrl}/>
    </div>
  );
};

export default QR;