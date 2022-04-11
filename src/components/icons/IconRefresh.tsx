import { FC } from 'react';
import { IIcon } from './IIcon';

const IconRefresh: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 16l-8 8h6c0 6.63-5.37 12-12 12-2.03 0-3.93-.51-5.61-1.39l-2.92 2.92c2.48 1.55 5.39 2.47 8.53 2.47 8.84 0 16-7.16 16-16h6l-8-8zm-26 8c0-6.63 5.37-12 12-12 2.03 0 3.93.51 5.61 1.39l2.92-2.92c-2.48-1.55-5.39-2.47-8.53-2.47-8.84 0-16 7.16-16 16h-6l8 8 8-8h-6z"/><path fill="none" d="M0 0h48v48h-48z"/></svg>)
}

export default IconRefresh;