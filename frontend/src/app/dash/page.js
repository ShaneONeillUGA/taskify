'use client';
import '../adapt/page.css';
import Model from 'react-modal';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState, useRef } from 'react';
import UsersList from '../adapt/components/UsersList';
import AddUser from '../adapt/components/AddUser';
import Hdr from '../adapt/components/hdr';
import Calendar from '../adapt/components/calendar';
import Naviga from '../adapt/components/naviga';
import UserContext from '../context/UserContext';
import axios from 'axios';

const Home = () => {

   
    const [visible, setvisable] = useState(false);
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const projectCount = useRef(0);

    const { userData, refreshUserData } = useContext(UserContext);
    
    useEffect(() => {
        refreshUserData();
    }, []);

    if (!userData.user) {
        return <div>Loading...</div>;
    }

   
      const handleAddProject = async (pname) => {
        try {
            console.log(pname);
            const response = await axios.put(`http://localhost:8082/api/users/newProject/user/${userData.user.id}/`, {
            projectName: pname,
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
     
      const handleDelete = async (projectId) => {
        try {
            const userId = userData.user.id;
            const response = await axios.delete(`http://localhost:8082/api/users/user/${userId}/projects/${projectId}`);
        } catch (err) {
            console.log(err.message);
            if (err.request) {
                console.log('request error', err.request);
            }
        }
        refreshUserData();
      };

      const handleNewProject = () => {
        if (projectCount.current < 4) {
            setvisable(true);
            
        } else {
            window.alert("You have hit the max number of projects in your dashboard! (4/4)");
        }
    };

      
     



    const today = new Date();
    

    const todayz = new Date(today);
    todayz.setDate(today.getDate());

    

    const Todayz1 = new Date(todayz).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',  });
    const Timez = new Date(todayz).toLocaleTimeString('en-US');

  
  

 

    return (

        <div className='stuffAdapt'>
        <div className='HDRAdapt'>
            <Hdr />
        </div>
            
        <div className='leadAdapt'>
            
            
            
            <Naviga />





            <div className='middleAdapt'>
                <div className='middle1Adapt'>
                    <div className='leftBAdapt'>
                        <h1 className='greetAdapt'>hello, {userData.user.first_name}</h1>
                        <h3> {Todayz1}, {Timez} </h3>
                    </div>
                    <div className='addproAdapt'>
                    <button  onClick={handleNewProject}> <h1> New Project </h1> </button>
                    <Model className='formzAdapt' isOpen={visible} onRequestClose={() => setvisable(false)} style={{

                        overlay: {
                        blackground: "black"
                        }, 
                        content: {
                        width: "500px",
                        height: "500px"
                        }

                    }}>
                        
                        <div className='lexAdapt'>
                        <button className='lex2Adapt' onClick={() => setvisable(false)}  > X </button>
                        </div>
                        <AddUser onAddUser={handleAddProject}/>
                        

                    </Model>
                    </div>
                    
                    
                </div>

                <div className='middle2DashAdapt'>
                        <UsersList className='realAdapt' projects={userData.user ? userData.user.projects : []} onDelete={handleDelete} />
                        
                    </div>

                <div className='middle3Adapt'>

                    <div className='ToDoAdapt'>
                        <h3 className='houAdapt'> Tasks To-Do </h3>
                        <div className='fcolAdapt'> 
                            <div className='spacAdapt'>
                                <h1 className='boldAdapt'> Create UI Design </h1>
                                <h3> Due: Friday, 22 March 2024 @ 11:59</h3>
                            </div>
                            <div className='spac1Adapt'> ## hours </div>
                        </div>

                        <div className='fcolAdapt'> 
                            
                        </div>

                        <div className='fcolAdapt'> 
                            
                        </div>

                        <div className='fcolAdapt'> 
                            
                        </div>

                        
                    </div>

                    <div className='lol1Adapt'></div>
                    <div className='ToDo1Adapt'>
                        <h3 className='houAdapt'> Members Activity </h3>
                        <div className='fcol1Adapt'> 
                            <div className='spacAdapt'>
                                <h1 className='boldAdapt'> Completed Miro Board </h1>
                                <h3> User: [name]</h3>
                                <h3> Role: Miro Board Lead</h3>
                            </div>
                            <div className='spac1Adapt'> 30 minutes ago </div>
                        </div>
                        <div className='fcol1Adapt'> 
                            
                        </div>
                        <div className='fcol1Adapt'> 
                            
                        </div>
                        <div className='fcol1Adapt'> 
                            
                        </div>
                    </div>

                </div>

            </div>





            <div className='lastAdapt'> 
                <Calendar />
                
            </div>
        </div>
        </div>



    );




}

export default Home;