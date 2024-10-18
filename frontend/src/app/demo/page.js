'use client';
import './page.css';
import Model from 'react-modal';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import UsersList from '../adapt/components/UsersList';
import AddUser from '../adapt/components/AddUser';
import Hdr from '../component/hdr';

const Home = () => {


    const [visible, setvisable] = useState(false);
    const router = useRouter();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Function to populate dropdown with months
        const populateMonths = () => {
          const monthDropdown = document.getElementById("monthDropdown");
          monthDropdown.innerHTML = '';
    
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          
          months.forEach((month, index) => {
            const option = document.createElement("option");
            option.text = month;
            option.value = index + 1; // Adding 1 to index to make value non-zero
            monthDropdown.add(option);
          });
          const currentMonthIndex = new Date().getMonth();
    
          monthDropdown.selectedIndex = currentMonthIndex;
        };
    
        populateMonths();
      }, []);

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
      };
    
      const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
      };

      const handleAddUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
      };
     
      const handleDelete = id => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      };



    const today = new Date();
    const tomorrow = new Date(today);
    const tomorrow2 = new Date(today);
    const tomorrow3 = new Date(today);
    const tomorrow4 = new Date(today);
    const tomorrow5 = new Date(today);
    const tomorrow6 = new Date(today);
    const tomorrow7 = new Date(today);
    const tomorrow8 = new Date(today);
    const tomorrow9 = new Date(today);
    const tomorrow10 = new Date(today);
    const tomorrow11 = new Date(today);
    const tomorrow12 = new Date(today);
    const tomorrow13 = new Date(today);
 

    const todayz = new Date(today);
    todayz.setDate(today.getDate());

    tomorrow.setDate(today.getDate() + 1);  
    tomorrow2.setDate(today.getDate() + 2);  
    tomorrow3.setDate(today.getDate() + 3);  
    tomorrow4.setDate(today.getDate() + 4);  
    tomorrow5.setDate(today.getDate() + 5);  
    tomorrow6.setDate(today.getDate() + 6);  
    tomorrow7.setDate(today.getDate() + 7);  
    tomorrow8.setDate(today.getDate() + 8);  
    tomorrow9.setDate(today.getDate() + 9);  
    tomorrow10.setDate(today.getDate() + 10);  
    tomorrow11.setDate(today.getDate() + 11);  
    tomorrow12.setDate(today.getDate() + 12);  
    tomorrow13.setDate(today.getDate() + 13);  
 

    const Todayz1 = new Date(todayz).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',  });
    const Timez = new Date(todayz).toLocaleTimeString('en-US');

  const nextDayWeekday = new Date(tomorrow).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber = new Date(tomorrow).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday2 = new Date(tomorrow2).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber2 = new Date(tomorrow2).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday3 = new Date(tomorrow3).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber3 = new Date(tomorrow3).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday4 = new Date(tomorrow4).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber4 = new Date(tomorrow4).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday5 = new Date(tomorrow5).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber5 = new Date(tomorrow5).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday6 = new Date(tomorrow6).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber6 = new Date(tomorrow6).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday7 = new Date(tomorrow7).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber7 = new Date(tomorrow7).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday8 = new Date(tomorrow8).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber8 = new Date(tomorrow8).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday9 = new Date(tomorrow9).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber9 = new Date(tomorrow9).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday10 = new Date(tomorrow10).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber10 = new Date(tomorrow10).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday11 = new Date(tomorrow11).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber11 = new Date(tomorrow11).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday12 = new Date(tomorrow12).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber12 = new Date(tomorrow12).toLocaleDateString(undefined, { day: 'numeric' });

  const nextDayWeekday13 = new Date(tomorrow13).toLocaleDateString(undefined, { weekday: 'long' }).slice(0, 3);
  const nextDayNumber13 = new Date(tomorrow13).toLocaleDateString(undefined, { day: 'numeric' });



 

    return (

        <div className='stuff'>
        <div className='HDRDemo'>
            <Hdr />
        </div>
            
        <div className='lead'>
            
            
            <div className='beg'> 
    
                <img src='https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' alt='Profile Picture' width={50}/>
                <h3> Demo Demi</h3>
                <h3> demo@email.com </h3>
                <hr/>
                <div>
                    <button className='dirDemo'> Dashboard </button>
                </div>

                <div>
                    <button className='dirDemo'> Task List </button>
                </div>

                <div>
                    <button className='dirDemo'> Members </button>
                </div>

                <div>
                    <button className='dirDemo' > Settings </button>
                </div>
            
            
            </div>






            <div className='middle'>
                <div className='middle1'>
                    <div className='leftB'>
                        <h1 className='greet'>hello, Demo Demi</h1>
                        <h3> {Todayz1}, {Timez} </h3>
                    </div>
                    <div className='addpro'>
                    <button className='buzz' type='button'> <h1>New Project </h1></button>
                    <Model className='formz' isOpen={visible} onRequestClose={() => setvisable(false)} style={{

                        overlay: {
                        blackground: "black"
                        }, 
                        content: {
                        width: "500px",
                        height: "500px"
                        }

                    }}>
                        
                        <div className='lex'>
                        <button className='lex2' onClick={() => setvisable(false)}  > X </button>
                        </div>
                        <AddUser onAddUser={handleAddUser}/>
                        

                    </Model>
                    </div>
                    
                    
                </div>

                <div className='middle2'>
                    <UsersList className="real" users={users} onDelete={handleDelete} />
                    
                </div>

                <div className='middle3'>

                    <div className='ToDo'>
                        <h3 className='hou'> Tasks To-Do </h3>
                        <div className='fcol'> 
                            <div className='spac'>
                                <h1 className='bold'> Create UI Design </h1>
                                <h3> Due: Friday, 22 March 2024 @ 11:59</h3>
                            </div>
                            <div className='spac1'> ## hours </div>
                        </div>

                        <div className='fcol'> 
                            
                        </div>

                        <div className='fcol'> 
                            
                        </div>

                        <div className='fcol'> 
                            
                        </div>

                        
                    </div>

                    <div className='lol1'></div>
                    <div className='ToDo1'>
                        <h3 className='hou'> Members Activity </h3>
                        <div className='fcol1'> 
                            <div className='spac'>
                                <h1 className='bold'> Completed Miro Board </h1>
                                <h3> User: Demo Demi 2</h3>
                                <h3> Role: Miro Board Lead</h3>
                            </div>
                            <div className='spac1'> 30 minutes ago </div>
                        </div>
                        <div className='fcol1'> 
                            
                        </div>
                        <div className='fcol1'> 
                            
                        </div>
                        <div className='fcol1'> 
                            
                        </div>
                    </div>

                </div>

            </div>





            <div className='last'> 
                <h1 className='name'> Calendar </h1> 
                <div className='apex'>
                <select id="monthDropdown" onChange={handleMonthChange}>
                    <option value="0"></option>
                </select>
                <div className='lol'></div>
                <select id="yearDropdown" onChange={handleYearChange} defaultValue={new Date().getFullYear()}>
                    <option value="0">Select Year</option>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                    ))}
                    </select>
                </div>

                <div >

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber} 
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber2}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday2}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber3}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday3}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber4}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday4}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber5}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday5}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber6}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday6}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                       
                    </div>
                    </div>
                    
                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber7}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday7}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                       
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber8}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday8}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                       
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber9}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday9}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber10}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday10}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                       
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber11}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday11}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber12}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday12}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                        
                    </div>
                    </div>

                    <div className='upcoming'>
                    <div className='dateorg'>
                        <div className='dateWithin'>
                        {nextDayNumber13}
                        </div>
                        <div className='dateWithin'>
                        {nextDayWeekday13}
                        </div>
                        
                    </div>

                    <div className='dateorg1'>
                       
                    </div>
                    </div>

                   

                </div>
                
            </div>
        </div>
        </div>



    );




}

export default Home;