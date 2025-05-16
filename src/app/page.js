"use client";

// import Modal from "@/component/Modal";
// import Search from "@/component/Search";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
// import ToastComponent from "@/component/ToastComponent";
const DUMMY_USER = { email: 'rakesh@gmail.com', password: '1234' };
export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const updated = localStorage.getItem('isUpdated');
    if (updated === 'true') setIsUpdated(true);
  }, []);

  const handleLogin = () => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      if (!isUpdated) {
        router.push('/update');
      } else {
        router.push('/home');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {/*  <ToastComponent />*/}
      {/*  <Search/>*/}
      
      {/*   <Modal/>*/}

       <h2>Login</h2>
      <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>


    </div>
  );
}
