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
      qrUrl = url;
    } else {
      console.log(err);
      qrUrl = err;
    };
  });

  return (
    <div class="flex items-center flex-col justify-center relative w-full h-full">
    <h1 class="text-slate-200 text-center w-full font-semibold text-xs lg:text-base xl:text-xl z-[900] overflow-hidden  left-0 top-0">{props.label}</h1>
    <a href="#" onDblClick={[qrClick, props.qrString]} class="z-200 w-full text-center" innerHTML={qrUrl}/>
</div>

  );
};

export default QR;