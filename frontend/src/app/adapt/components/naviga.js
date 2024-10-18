'use client';
import './naviga.css';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useRouter } from 'next/navigation';


const naviga = () => {
    const router = useRouter();
    
    const { userData } = useContext(UserContext);      

    if (!userData.user) {
        return <div>Loading...</div>;
    }


    return (
        <div className='beg'> 
    
                <img className='ppi' src={userData.user.profile_picture} alt='Profile Picture' width={50}/>
                <h3 className='titleFirstName'> {userData.user.first_name} {userData.user.last_name}</h3>
                <h3 className='titleFirstName'> {userData.user.email} </h3>
                <hr/>
                <div>
                    <button className='dir' type="button" onClick={() => router.push('../dash')}> Dashboard </button>
                </div>

                <div>
                    <button className='dir' type="button" onClick={() => router.push('../tasks')}> Task List </button>
                </div>

                <div>
                    <button className='dir' type='button' onClick={() => router.push('../inv')}> Members </button>
                </div>

                <div>
                    <button className='dir' type="button" onClick={() => router.push('../setting')}> Settings </button>
                </div>
            
            
        </div>
    )

}
export default naviga;

