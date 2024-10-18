'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hdr from '../adapt/components/hdr';


const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Hdr />
      <main >
        <div className='HomePage2Text'>
          <h1>Manage Your Tasks.</h1>
          <h3>Struggling to keep track of deadlines and assign responsibilities effectively?</h3>
        </div> 
        <div className='HomePage2MainButtons'>
          
          <button type="button" onClick={() => router.push('../dash')} >Dashboard</button>
        
          
        </div>
      </main>
    </div>
  );
}
export default Home;
