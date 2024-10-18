import React, { useContext } from 'react';
import './hdr.css';
import { useRouter } from 'next/navigation';
import UserContext from '@/app/context/UserContext';


  



const Hdr = () => {
    const router = useRouter();

    const { userData, setUserData } = useContext(UserContext);

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined }); // Clear user data
        localStorage.removeItem('auth-token'); // Clear the token from local storage
        router.push('../../login'); // Redirect to the login page
    };

    return (
        <nav className='hrdban'>
            <div className='banhaf'>
                <div className='b1'>
                    <img src="../../taskify.png" atl="Logo"></img>
                </div>
                <div className='b2'>
                    <button type="button" onClick={() => router.push('../home2')} > Homepage </button>
                </div>
                <div className='b2'>
                    <button type='button' onClick={() => router.push('../dash')}> Dashboard</button>
                </div>
            
                <div className='b2'>
                    <button type='button' onClick={() => router.push('../tasks')}> Task List </button>
                </div>
                
                
                
            </div>
            <div className='banhaf'>
                <div className='b22'>
                    
                    <button type='button' onClick={handleLogout}> Signout </button>
                </div>
                
            </div>
            

        </nav>
    )
}
  
  export default Hdr;