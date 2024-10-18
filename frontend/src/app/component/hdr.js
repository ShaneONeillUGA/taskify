import React from 'react';
import './hdr.css';
import { useRouter } from 'next/navigation';



const Hdr = () => {
    const router = useRouter();
    return (
        <nav className='hrdbanHome'>
            <div className='banhafHome'>
                <div className='b1Home'>
                    <img src="../taskify.png" atl="Logo"></img>
                </div>

                <div className='b2Home'>
                    <button type="button" onClick={() => router.push('../')} > Homepage </button>
                </div>
                <div className='b2Home'>
                    <button type='button' onClick={() => router.push('../demo')}> Demo </button>
                </div>
            
               
                
                
                
            </div>
            <div className='banhafHome'>
                <div className='b2Home2'>
                    
                    <button type='button' onClick={() => router.push('../login')}> Login </button>
                    <button type='button' onClick={() => router.push('../signup')}> Sign Up </button>
                </div>
                
            </div>
            

        </nav>
    )
}
  
  export default Hdr;