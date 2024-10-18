import React from 'react';
import './hdr2.css';
import { useRouter } from 'next/navigation';



const Hdr = () => {
    const router = useRouter();
    return (
        <nav className='hrdbanz'>
            <div className='banhafz'>
                <div className='b1z'>
                    <h1> [Logo] </h1>
                </div>
                <div className='b2z'>
                    <button type="button" onClick={() => router.push('../')} > Homepage </button>
                </div>
               
                <div className='b2z'>
                    <button type='button' onClick={() => router.push('../demo')}> Demo </button>
                </div>
               
                
                
                
            </div>
            <div className='banhafz'>
                <div className='b2z'>
                    
                    <button type='button' onClick={() => router.push('../login')}> Login </button>
                    
                </div>
                <div className='b2z'>
                    
                   
                    <button type='button' onClick={() => router.push('../signup')}> Sign Up </button>
                </div>
                
            </div>
            

        </nav>
    )
}
  
  export default Hdr;