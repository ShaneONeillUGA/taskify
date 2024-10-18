'use client';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    members: [],
    projects: [],
    tasks: [],
  });

  const fetchUserData = async () => {
    console.log("Fetch Stored Token: ", localStorage.getItem('auth-token'));
    const token = localStorage.getItem('auth-token');
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:8082/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        setUserData(prev => ({
          ...prev,
          user: response.data,
          members: response.data.members || [],
          projects: response.data.projects || [],
          tasks: response.data.tasks || [],
        }));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Optionally handle errors, e.g., clearing user data or handling authorization errors
    }
  };

  // Call fetchUserData on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to refresh user data
  const refreshUserData = () => {
    console.log("Refresh Stored Token: ", localStorage.getItem('auth-token'));
    fetchUserData();
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, refreshUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
