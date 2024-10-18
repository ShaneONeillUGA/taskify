'use client';
import './page.css';
import Model from 'react-modal';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState, useRef  } from 'react';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import Hdr from '../adapt/components/hdr';
import Calendar from '../adapt/components/calendar';
import Naviga from '../adapt/components/naviga';
import UserContext from '../context/UserContext';
import axios from 'axios';

const Home = () => {

    const dummyData = [
        {
            id: 'e1',
            mname: "pops",
            memail: "pop@gmail.com",
            mphone: "678-678-678",
            mpic: "data:image/jpeg;base64,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",
            mrole: "writer",
            
         },

         {
            id: 'e2',
            mname: "rigby",
            memail: "rigby@gmail.com",
            mphone: "404-404-404",
            mpic: "data:image/jpeg;base64,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",
            mrole: "writer",
            
         },

         {
            id: 'e2',
            mname: "benson",
            memail: "benson@gmail.com",
            mphone: "470-470-470",
            mpic: "data:image/png;base64,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",
            mrole: "writer",
            
         },
    ]

    const [visible, setvisable] = useState(false);
    const router = useRouter();
    const [users, setUsers] = useState(dummyData);

    const projectCount = useRef(3);

    const { userData, refreshUserData } = useContext(UserContext);
    console.log(userData);

    useEffect(() => {
        refreshUserData();
    }, []);
    

      const handleAddUser = async (memberDetails) => {
        try {
            console.log(memberDetails);
            const response = await axios.put(`http://localhost:8082/api/users/newMember/user/${userData.user.id}/`, {
            memberEmail: memberDetails.memail,
            role: memberDetails.mrole,
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
     
      const handleDelete = async (memberId) => {
        try {
            const userId = userData.user.id;
            const response = await axios.delete(`http://localhost:8082/api/users/user/${userId}/members/${memberId}`);
        } catch (err) {
            console.log(err.message);
            if (err.request) {
                console.log('request error', err.request);
            }
        }
        refreshUserData();
      };

      const handleNewProject = () => {
        if (projectCount.current < 10) {
            setvisable(true);
            
        } else {
            window.alert("You have hit the max number of tasks in your Member Dashboard! (10/10)");
        }
      }



    const today = new Date();
    

    const todayz = new Date(today);
    todayz.setDate(today.getDate());

    

    const Todayz1 = new Date(todayz).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',  });
    const Timez = new Date(todayz).toLocaleTimeString('en-US');


 

    return (

        <div className='stuffinv'>
        <div className='HDRinv'>
            <Hdr />
        </div>
            
        <div className='leadinv'>
            
            
            <Naviga />






            <div className='middleinv'>
                <div className='middle1inv'>
                    <div className='leftBinv'>
                        <h1 className='greetinv'>Member Dashboard</h1>
                        <h3> {Todayz1}, {Timez} </h3>
                    </div>
                    <div className='addproinv'>
                    <button onClick={handleNewProject}> <h1>Add Member </h1> </button>
                    <Model className='formzinv' isOpen={visible} onRequestClose={() => setvisable(false)} style={{

                        overlay: {
                        blackground: "black"
                        }, 
                        content: {
                        width: "500px",
                        height: "500px"
                        }

                    }}>
                        
                        <div className='lexinv'>
                        <button className='lex2inv' onClick={() => setvisable(false)}  > X </button>
                        </div>
                        <AddUser onAddUser={handleAddUser}/>
                        

                    </Model>
                    </div>
                    
                    
                </div>

                <div className='middle2inv'>
                    
                    <UsersList className="realinv" members={userData.user ? userData.user.members : []} onDelete={handleDelete} />
                    
                    
                    
                </div>

                

            </div>





            <div className='lastinv'> 
                <Calendar />
                
            </div>
            
        </div>
        </div>



    );




}

export default Home;