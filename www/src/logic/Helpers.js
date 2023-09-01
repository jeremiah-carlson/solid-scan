export function getCurrentStrfTime() {
    let date = new Date();
    let out = `${date.getHours()}:${('0' + date.getUTCMinutes()).slice(-2)}:${('0' + date.getUTCSeconds()).slice(-2)}`;
    return out;
};

export const AssembleBodyData = (entries)=>{
    let out = {};

    document.querySelectorAll(".cust-category").forEach((node)=>{// Get Categories
        out[node.dataset.category] = node.dataset.option;
    });

    Object.entries(entries).forEach((e)=>{
        out[e[0]] = e[1];
    });

    out["timeStamp"] = Math.floor(Date.now() / 1000);

    return out
};

export const FormatDisplayedInput = (inputObj)=>{

    return `${Object.entries(inputObj).map((x)=>{return `${x[0]}: ${x[1]}`}).join(' / ')}  --  ${getCurrentStrfTime()}`
};