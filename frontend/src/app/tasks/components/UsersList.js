'use client';

import User from "./User";
import Card from "./Card";
import React from 'react';

const UsersList = ({ tasks, onDelete }) => {
    console.log(tasks);
    if (!tasks || !Array.isArray(tasks)) {
        console.log("Tasks is undefined or not an array.");
        return <div>Loading tasks...</div>;  // or any other placeholder content
    }
    
    return (
        
            <ul className='realDash'> 
                {tasks.map((task, index) => (
                    <Card className='usersdash'>
                    <User 
                        key={index}
                        id={task._id}
                        task_name={task.task_name}
                        pro_name={task.pro_name}
                        in_charge_name={task.in_charge_name}
                        date={task.date}
                        isComplete={task.isComplete}
                        onDelete={() => onDelete(task._id)}
                    />
                    </Card>
                ))}
            </ul>
       
       
          
        
    );
};

export default UsersList;