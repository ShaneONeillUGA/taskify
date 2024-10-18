import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = props => {
    const router = useRouter();
    const handleDelete = () => {
        props.onDelete(props.id); // Call onDelete function with id
    };

    const handleProjectSelect = (projectId) => {
        // Navigate to the tasks page with the project ID as a query parameter
        router.push(`/tasks?project=${projectId}`);
      };

    return (    
        
        
            <div className="list">
                <div className='old3'>
                <button className='button' onClick={handleDelete}>X</button>
                </div>
                
                <div className='exit'>
                    <h1 className='old' key={props.id} onClick={() => handleProjectSelect(props.id)}> {props.pname} </h1>                    
                </div>
                <hr className='bor' />
                <h3 className='old2'> Completion </h3>
                <h3 className='old2'> [Progress Bar] </h3>
            </div>
        
    )
}

export default User;
