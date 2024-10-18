'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hdr from './component/hdr'

// create and export home
const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Hdr />
      <main >
        <div className='HomePageText'>
          <h1>Manage Your Tasks.</h1>
          <h3>Struggling to keep track of deadlines and assign responsibilities effectively?</h3>
        </div> 
        <div className='HomePageMainButtons'>
          
            <button type="button" onClick={() => router.push('./signup')} >Get Started</button>
        
          
            <button type="button" onClick={() => router.push('/demo')}>Try Demo</button>
          
        </div>
      </main>
    </div>
  );
}
export default Home;
