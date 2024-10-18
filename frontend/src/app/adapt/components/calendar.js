'use client';
import './calendar.css';
import React, { useEffect, useState } from 'react';

const calendar = () => {

    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

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



    return(

        <div>
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
    )


}

export default calendar;