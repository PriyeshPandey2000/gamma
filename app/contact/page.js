// pages/contact.js
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [phoneNumber, setPhoneNumber] = useState('');
  
  useEffect(() => {
    if (status === 'authenticated') {
      toast.success("Login successful");

      
      // router.push('/');
    }
  }, [status]);
  console.log(session);
  console.log(status)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      toast.success("Login successful");
      // router.push('/');
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'authenticated') {
      try {
        setIsLoading(true);
        await axios.post('/api/users/contact', { phoneNumber }, {
          withCredentials: true
        });
        router.push('/');
      } catch (error) {
        console.error('Error updating phone number:', error);
        toast.error('Error updating phone number');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error('You must be logged in to update phone number');
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Updating...' : 'Update Phone Number'}</button>
      </form>
    </div>
  );
}
