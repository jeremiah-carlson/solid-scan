import Abstract from './Abstract';

import defaultCfg from '../configs/default';// <-- Change config file
import concertCfg from '../configs/concert';

export function Default() {// <-- Change function name
    return (<Abstract conf={defaultCfg}/>);// <-- Match config import
};

export function Concert() {
return (<Abstract conf={concertCfg}/>);
};