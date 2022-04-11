import { FC } from 'react';
import { IIcon } from './IIcon';

const IconEye: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path fill="none" d="M0 0h48v48h-48z"/><path d="M24 9c-10 0-18.54 6.22-22 15 3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
    </svg>)
}

export default IconEye;