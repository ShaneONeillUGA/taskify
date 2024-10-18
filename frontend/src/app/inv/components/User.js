import React from 'react';
import './User.css';

const User = props => {

    const handleDelete = () => {
        props.onDelete(props._id); // Call onDelete function with id
    };

    return (    
        
        
            <div className="listinv">
                <div className='old3inv'>
                <button onClick={handleDelete}>X</button>
                </div>
                <div className='member-pic-containerinv'>
                    <img src={props.mpic} alt='Member Picture'/>
                </div>
                
                
                <h1 className='oldinv'> {props.mname} </h1>
                
                <hr className='borinv' />
                <h3 className='old2inv'> {props.memail} </h3>
                <h3 className='old2inv'> {props.mphone} </h3>
                <p className='member-roleinv'>{props.mrole}</p>
            </div>
        
    )
}

export default User;
