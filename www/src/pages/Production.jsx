import Abstract from './Abstract';

import * as Configs from "../configs/config"

export const Pages = Object.entries(Configs).map((cfg)=>{
    return {
        name: cfg[1].name ?? cfg[0],
        func: ()=>{return (<Abstract conf={cfg[1]}/>);},
        routePrefix: cfg[1].routePrefix ?? "",
    }
});