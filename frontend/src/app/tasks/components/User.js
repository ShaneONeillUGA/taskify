import React, { useContext, useState } from 'react';
import './User.css';
import axios from 'axios';
import UserContext from '@/app/context/UserContext';

const User = props => {
    const { userData, refreshUserData } = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        task_name: props.task_name,
        pro_name: props.pro_name,
        in_charge_name: props.in_charge_name,
        date: props.date,
        isComplete: props.isComplete,
    });

    const handleDelete = () => {
        props.onDelete(props.id); // Call onDelete function with id
    };

    const handleEdit = async () => {
        try {
            const response = await axios.put(`http://localhost:8082/api/users/${userData.user.id}/tasks/${props.id}/`, formData);
            console.log(response.data); // Log or handle response data
            setEditMode(false);
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
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (    
        <div className="list11">
            <div className='exit1'>
                <h1 className='old1'>{props.task_name}</h1>
                <button onClick={handleDelete}>X</button>
                <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit'}</button>
            </div>
            {editMode ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleEdit();
                }}>
                    <input name="task_name" value={formData.task_name} onChange={handleChange} />
                    <input name="pro_name" value={formData.pro_name} onChange={handleChange} />
                    <input name="in_charge_name" value={formData.in_charge_name} onChange={handleChange} />
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <label>
                        Complete:
                        <input type="checkbox" name="isComplete" checked={formData.isComplete} onChange={handleChange} />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            ) : (
                <>
                    <h3 className='old11'>{props.pro_name}</h3>
                    <h3 className='old11'>{props.in_charge_name}</h3>
                    <h3 className='old11'>{props.date}</h3>
                    <hr className='bor1' />
                    <h3 className='old21'>{props.isComplete ? 'Complete' : 'Incomplete'}</h3>
                </>
            )}
        </div>
    );
}

export default User;
