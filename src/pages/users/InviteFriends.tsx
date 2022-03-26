import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import { prefix } from "constants/menuInfo";

const InviteFriends = () => {
    const navigate = useNavigate();

    const onBack = () => {
        navigate(`${ prefix }/users/manage`);
    }
    
    return (
        <div className="p-4 bg-white">
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button2 className='w-32' text='Back' onClick={() => onBack()}/>
            </div>
        </div>
    )
}

export default InviteFriends;