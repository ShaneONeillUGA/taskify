'use client';
import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ( {onAddUser } ) => {

  const { userData } = useContext(UserContext);

  const [mname, setmname] = useState('');
  const [memail, setmemail] = useState('');
  const [mphone, setmphone] = useState('');
  const [mpic, setmpic] = useState('');
  const [mrole, setmrole] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const memberDetails = {
      memail: memail,
      mrole: mrole,
      user: userData.user,
    };

    onAddUser(memberDetails);
    console.log(memberDetails);
    setmname('');
    setmemail('');
    setmphone('');
    setmpic('');
    setmrole('');
    

  }

  return (
    <Card className="input">
      
      <form onSubmit={handleSubmit}>

        <label>Email: </label>
        <input
          id="memail"
          type="string"
          value={memail}
          onChange={(e) => setmemail(e.target.value)}
        />

        <label>Role: </label>
        <input
          id="mrole"
          type="string"
          value={mrole}
          onChange={(e) => setmrole(e.target.value)}
        />

        
        <div className="adding">
          <Button  type="submit" >Add Member</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
