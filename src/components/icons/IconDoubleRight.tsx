import { FC } from 'react';
import { IIcon } from './IIcon';

const IconDoubleRight: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.46,8.29A1,1,0,1,0,7,9.71L9.34,12,7,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,0-1.42Zm8.5,3-3-3a1,1,0,0,0-1.42,1.42L14.84,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,17,11.29Z"/></svg>)
}

export default IconDoubleRight;