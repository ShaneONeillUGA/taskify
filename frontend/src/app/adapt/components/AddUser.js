'use client';
import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ( {onAddUser } ) => {

  const [pname, setpname] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pname == '') {
      return;
    }

    onAddUser(pname);
    console.log(pname);
    setpname('');
    

  }

  return (
    <Card className="input">
      
      <form onSubmit={handleSubmit}>
        <label>Project Name: </label>
        <input
          id="pname"
          type="text"
          value={pname}
          onChange={(e) => setpname(e.target.value)}
        />
        
        <div className="adding">
          <Button  type="submit" >Add Project</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
