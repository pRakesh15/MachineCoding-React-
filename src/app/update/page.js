"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleUpdate = () => {
    localStorage.setItem('isUpdated', 'true');
    alert('Profile updated successfully');
    router.push('/home');
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <p>Email: rakesh@gmail.com</p>
      <input placeholder='Contact No' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
      <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}


export default page
