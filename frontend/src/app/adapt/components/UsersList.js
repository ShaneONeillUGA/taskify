'use client';

import User from "./User";
import Card from "./Card";
import React from 'react';

const UsersList = ({ projects, onDelete }) => {

    console.log(projects);

    if (!projects || !Array.isArray(projects)) {
        console.log("Projects is undefined or not an array.");
        return <div>Loading projects...</div>;  // or any other placeholder content
    }
    
    return (
        
            <ul className='realAdapt'> 
                {projects.map((project, index) => (
                    <Card className="users">
                    <User 
                        key={project._id || index}
                        id={project._id}
                        pname={project.pro_name}
                        onDelete={() => onDelete(project._id)}
                    />
                    </Card>
                ))}
            </ul>
        
    );
};

export default UsersList;