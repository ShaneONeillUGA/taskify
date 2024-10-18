'use client';
import React, { useContext, useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddUser.css';
import UserContext from '@/app/context/UserContext';

const AddUser = ( {onAddUser } ) => {

  const [taskname, settaskname] = useState('');
  const [project, setproject] = useState({id: '', pro_name: ''});
  const [uszer, setUszer] = useState({ id: '', in_charge_name: '' });
  const [date, setdate] = useState('');

  const { userData } = useContext(UserContext);

  const projectHandleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedProject = userData.projects.find(project => project._id === selectedId);
    if (selectedProject) {
      setproject({
        id: selectedId,
        pro_name: selectedProject.pro_name
      });
    } else {
      setproject({ id: '', pro_name: '' });  // Reset if no project is selected
    }
  };


  const userInChargeHandleSelectChange = (e) => {
    const selectedId = e.target.value;
    const selectedMember = userData.members.find(member => member.user._id === selectedId);
    if (selectedMember) {
      setUszer({
        id: selectedId,
        in_charge_name: `${selectedMember.user.first_name} ${selectedMember.user.last_name}`
      });
    } else {
      setUszer({ id: '', in_charge_name: '' });  // Reset if no member is selected
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskname == '') {
      return;
    }

    const newTask = {
      taskname: taskname,
      project: project,
      uszer: uszer,
      date: date
    };

    onAddUser(newTask);
    console.log(newTask);
    settaskname('');
    setproject('');
    setUszer('');
    setdate('');

  }

  return (
    <Card className="input">
      
      <form onSubmit={handleSubmit}>
        <label>Task Name: </label>
        <input
          id="taskname"
          type="text"
          value={taskname}
          onChange={(e) => settaskname(e.target.value)}
        />
        <label>Project: </label>
        <select
          id="project"
          value={project.id}
          onChange={projectHandleSelectChange}
        >
          <option value="">Select a Project</option>
          {userData.projects.map((project) => (
            <option key={project._id} value={project._id}>
              {project.pro_name}
            </option>
          ))}
          </select>
        <label htmlFor="uszer">User In Charge:</label>
      <select
        id="uszer"
        value={uszer.id}
        onChange={userInChargeHandleSelectChange}
      >
        <option value="">Select a User</option>
        {userData.members.map((member) => (
          <option key={member.user._id} value={member.user._id}>
            {member.user.first_name} {member.user.last_name}
          </option>
        ))}
      </select>
        <label>date</label>
         <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />
        <div className="adding">
          <Button  type="submit" >Add Task</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
