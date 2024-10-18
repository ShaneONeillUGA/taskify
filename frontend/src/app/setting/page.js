'use client';

import React, { useEffect, useState, useRef } from 'react';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Naviga from '../adapt/components/naviga';
import Hdr from '../adapt/components/hdr'


function Settings() {
  const router = useRouter();

  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  
  function selectFiles() {
    fileInputRef.current.click();

  }

  function onFileSelect(event) {
    const files = event.target.files;
    if(files.length === 0) return;
    for(let i = 0; i < files.length; i++) {
      if(files[i].type.split('/')[0] !== 'image') continue;
      if(!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => 
      prevImages.filter((_, i) => i !== index)
    );
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave (event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop (event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.file;
  }

  function uploadImage () {
    console.log('Images: ', images);
  }

  

    return (
      
      <div className='stuffSetting'>
        <Hdr />
        <div className='leadSetting'>
          
          
          <Naviga className='hrdSetting'/>
          
          <div className="middleSetting">
            <div className='middle1Setting'>
              <h1 className='settingText'>Settings</h1>
            </div>
          
            <div className='middle2Setting'>
              <div className='middle2SettingSpace'>

                <div >
                  <h2 className='profileSetting'>Profile</h2>
                </div>
                <div className='imgSetting'>
                  <div className='topSetting'>
                    <p>Drag & Drop image uploading</p>
                  </div>
                  <div className='drag-area' onDragOver = {onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    {isDragging ? (
                      <span className='select'>
                        Drop images here
                      </span>
                    ) : (
                      <>
                        <p className='dragSetting'> Drag & Drop image here or (" ")</p>
                      <span className='select' role='button' onClick={selectFiles}>
                      <p className='dragSetting2'> Browse </p>
                      </span>
                      </>
                    )}
                    
                    
                    <input  name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFileSelect} ></input>
                  </div>
                  <div className='containerSetting'>
                    {
                      images.map((images,index) => (
                        <div className='imageSetting' key={index}>
                          <span className='delete' onClick={() => deleteImage(index)}>&times;</span> 
                          <img className='imgSettingUp' src={images.url} alt={images.name}/>
                        </div>
                        
                      ))
                    }
                    
                  </div>
                  <button type='button' onClick={uploadImage}>
                    Upload
                  </button>
                </div>
            
                <hr/>
                <div  className='middle3Setting'>
                  <label htmlFor="firstName">First Name</label>
                  <input className='InputBarSetting' type="firstname" id="firstName" required />

                  <label htmlFor="lastName">Last Name</label>
                  <input className='InputBarSetting' type="lastName" id="lastName" required />     

                  <label htmlFor="email">Email Address</label>
                  <input className='InputBarSetting' type="email" id="email" required /> 

                  <label htmlFor="cell">Cell #</label>
                  <input className='InputBarSetting' type="cell" id="cell" required />    
                  
                  <div >
                    
                    <button className='buttonSettingSubmit' >Submit</button>
                    
                  </div>                 
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
    
  }
  export default Settings;