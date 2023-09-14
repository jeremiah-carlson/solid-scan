import Abstract from './Abstract';

import * as Configs from "../configs/modules/production"

export const Pages = Object.entries(Configs).map((cfg)=>{
    return {
        name: cfg[0],
        func: ()=>{return (<Abstract conf={cfg[1]}/>);}
    }
});