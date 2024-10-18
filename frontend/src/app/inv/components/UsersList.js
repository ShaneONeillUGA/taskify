import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from "./User";
import Card from "./Card";

const UsersList = ({ members, onDelete }) => {
    console.log(members);
    const [memberDetails, setMemberDetails] = useState([]);

    useEffect(() => {
        // Only run if members is truthy and is an array
        if (members && Array.isArray(members)) {
            fetchMembers();
        }
    }, [members]); // Depend on members

    const fetchMembers = async () => {
        if (!members || !Array.isArray(members)) {
            console.error('Invalid or undefined members array');
            return; // Early return if members is not an array
        }
    
        try {
            const promises = members.map(member =>
                axios.get(`http://localhost:8082/api/users/${member.user._id}`).then(response => ({
                    ...response.data,
                    role: member.role,
                    memberId: member._id
                    
                }))
            );
            const results = await Promise.all(promises);
            setMemberDetails(results);
        } catch (error) {
            console.error('Failed to fetch member details:', error);
        }
    };
    

    return (
        
            <ul className='realinv'>
                {memberDetails.map((member, index) => (
                    <Card className="usersinv">
                    <User
                        key={member._id || index} // Use _id if available, otherwise fallback to index
                        id={member.memberId}
                        mname={member.first_name}
                        memail={member.email}
                        mphone={member.phone}
                        mpic={member.profile_picture} // Ensure this field is named correctly in the data
                        mrole={member.role}
                        onDelete={() => onDelete(member.memberId)}
                    />
                    </Card>
                ))}
            </ul>
       
    );
};

export default UsersList;
