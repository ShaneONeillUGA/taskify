'use client';
import './page.css';
import Model from 'react-modal';
import React, { useContext, useEffect, useState, useRef } from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { useRouter, useSearchParams } from 'next/navigation';
import Hdr from '../adapt/components/hdr';
import Calendar from '../adapt/components/calendar';
import Naviga from '../adapt/components/naviga';
import UserContext from '../context/UserContext';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Home = () => {

  const [visible, setvisable] = useState(false);

  const router = useRouter();
  const projectCount = useRef(0);
  const [users, setUsers] = useState([]);

  const { userData, refreshUserData } = useContext(UserContext);

  useEffect(() => {
    refreshUserData();
  }, []);

  const handleAddTask = async (task) => {
    try {
        console.log(task);
        const response = await axios.put(`http://localhost:8082/api/users/newTask/user/${userData.user.id}/`, {
        taskName: task.taskname,
        projectId: task.project.id,
        pro_name: task.project.pro_name,
        memberId: task.uszer.id,
        in_charge_name: task.uszer.in_charge_name,
        date: task.date,
     });
     refreshUserData();
    } catch (err) {
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The request was made but no response was received
            
            console.log('request error', err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message);
        }
    }
    setvisable(false);
    
    
  };
 
  const handleDelete = async (taskId) => {
    try {
        const userId = userData.user.id;
        const response = await axios.delete(`http://localhost:8082/api/users/user/${userId}/tasks/${taskId}`);
    } catch (err) {
        console.log(err.message);
        if (err.request) {
            console.log('request error', err.request);
        }
    }
    refreshUserData();
  };

  const handleNewProject = () => {
    if (projectCount.current < 8) {
        setvisable(true);
        
    } else {
        window.alert("You have hit the max number of tasks in your TaskList! (8/8)");
    }
  }


  const [selectedProject, setSelectedProject] = useState('');

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  // Filter tasks based on selectedProject
  const getFilteredTasks = () => {
    if (!userData.user || !userData.user.tasks) return [];
    
    // If 'All Projects' is selected or no project is selected, return all tasks
    if (selectedProject === '') {
      return userData.user.tasks;
    }

    // Otherwise, filter tasks where projectId matches selectedProject
    return userData.user.tasks.filter(task => task.project === selectedProject);
  };

  const projectFilter = useSearchParams();
  useEffect(() => {
    const projectId = projectFilter.get('project');
    console.log(`Clicked Project ID: ${projectId}`);
    if (projectId) {
      setSelectedProject(projectId);
    }
    
  }, []); // Add router.query as a dependency

  return (
    
    <div className='stuffDash'>
       
            <Hdr />
        
    <div className='pagerDash'>

      <Naviga />

      <div className='middlezDash'> 
        

        <div className='middle11Dash'>
          <div className='bordssDash'>
          <h1 className='bords11Dash'>
      Project:
      <select 
        value={selectedProject}
        onChange={handleProjectChange}
        className="project-select"
      >
        <option value=''>All Projects</option>
        {userData.projects.map((project) => (
          <option key={project._id} value={project._id}>
            {project.pro_name}
          </option>
        ))}
      </select>
    </h1>
            <button className='bords22Dash' onClick={handleNewProject}> <h1> New Task </h1> </button>
          </div>
          
          <Model className='formzDash' isOpen={visible} onRequestClose={() => setvisable(false)} style={{

            overlay: {
              blackground: "black"
            }, 
            content: {
              width: "500px",
              height: "500px"
            }

          }}>
            
            <div className='lexzDash'>
              <button className='lex2zDash' onClick={() => setvisable(false)}  > X </button>
            </div>
            <AddUser onAddUser={handleAddTask}/>
            

          </Model>

        </div>

        <div className='middle22Dash'>

          <h3> All </h3>
          <button className='sortDash'> # </button>
          <h3> To-Do </h3>
          <button className='sortDash'> # </button>
          <h3> In Progress </h3>
          <button className='sortDash'> # </button>
          <h3> Completed </h3>
          <button className='sortDash'> # </button>


        </div>

        <div className='middle33Dash'>
          
          <UsersList className='realDash' tasks={getFilteredTasks()} onDelete={handleDelete} />
        </div>

      </div>

      <div className='lastDashDash'> 
          <Calendar />
          
      </div>

    </div>
    </div>
  );
}

export default Home;