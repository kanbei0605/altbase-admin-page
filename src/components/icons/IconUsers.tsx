import { FC } from 'react';
import { IIcon } from './IIcon';

const IconUsers: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (
        <svg
            onClick={clickHandler}
            className={`h-5 w-5 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 64 64"
            viewBox="0 0 64 64"
        >
            <path fill={dark ? "#000000" : "#FFFFFF"} d="M32.01 35.15c3.74 0 7.42-6.08 7.42-12.27 0-6.46-4.04-7.82-7.42-7.82-3.4 0-7.42 1.36-7.42 7.82C24.59 29.07 28.26 35.15 32.01 35.15zM44.45 39.76c-1.56-.48-3.39-1.26-5.41-2.32-.96-.52-1.98-1.09-3.01-1.71-1.2.93-2.56 1.48-4.02 1.48-1.46 0-2.82-.55-4.03-1.48-.8.49-1.84 1.1-3.02 1.71-.55.29-1.08.55-1.58.79-1.41.67-2.68 1.18-3.82 1.53-4.14 1.29-5.19 6.83-5.44 9.17h35.77C49.63 46.6 48.6 41.06 44.45 39.76zM50.91 34.22c.76 0 1.5-.35 2.18-.95.03-.02.05-.05.08-.07 1.71-1.57 3.02-4.71 3.02-7.9 0-4.62-2.88-5.59-5.29-5.59-2.42 0-5.3.97-5.3 5.59 0 3.2 1.33 6.36 3.05 7.92C49.37 33.84 50.14 34.22 50.91 34.22zM60.16 38.18c-1.16-.35-2.49-.92-4.1-1.75-.82-.43-1.55-.86-2.12-1.2-.91.66-1.94 1.06-3.02 1.06-1.1 0-2.12-.39-3.03-1.06-.71.43-1.42.84-2.12 1.2-.68.36-1.33.67-1.93.93.43.17.84.3 1.23.42 3.36 1.05 5.1 4.01 6 6.75H64C63.77 42.7 62.95 39.06 60.16 38.18zM10.91 33.26c.68.6 1.43.95 2.18.95.77 0 1.53-.36 2.23-.98.02-.02.03-.03.04-.04 1.72-1.57 3.03-4.71 3.03-7.9 0-4.62-2.88-5.59-5.3-5.59-2.41 0-5.29.97-5.29 5.59 0 3.18 1.3 6.32 3.01 7.89C10.85 33.21 10.88 33.23 10.91 33.26zM18.95 37.79c.39-.11.81-.26 1.23-.42-.6-.27-1.24-.58-1.94-.93-.82-.42-1.54-.85-2.12-1.2-.91.66-1.93 1.06-3.02 1.06s-2.11-.39-3.02-1.06c-.54.33-1.27.76-2.13 1.2-1.58.83-2.93 1.4-4.08 1.75C1.06 39.06.24 42.7 0 44.54h12.94C13.84 41.79 15.58 38.83 18.95 37.79z"/>
        </svg>)
}

export default IconUsers;