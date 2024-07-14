import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';

const ForgotPassword4 = () => {
const auth = getAuth();
const [email, setEmail] = useState('');
const [emailerr, setEmailerr] = useState('');
// const [password, setPassworderr] = useState('');
const handleEmail = (e)=> {
  
  if(!email) { 
    setEmailerr('email is required');
    
  }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      // setEmailerr('email is required');
      setEmail('email is valid');
    }
}
if(email){
  sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('send');
  
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
  });
}
  return (
    <div className='w-full h-screen bg-red-500 flex justify-center items-center'>
      <div className='bg-white w-1/2 p-20'>
      <h1 className="text-[#11175d] font-Sans text-[34px] ">Forgot Password</h1>
      <div className="relative mt-[60px] w-96">
                <input onChange={handleEmail}
                  type="email"
                  className="w-full py-[26px] px-[50px] border-b border-[#11175D]"
                />
                <p className="absolute top-[-8px] left-[32px] mx-auto font-nunito semibold text-[13px] tracking-[1px] px-[18px] bg-white outline-none">
                  Email Address
                </p>
                {
                emailerr &&
              <p className='font-nunito text-[14px] bg-red-500 text-white p-1 rounded mt-1'>{emailerr}</p>
             }   
              </div>
              <div className="mt-10">
                  <button  href="" className="font-nunito text-white font-semibold text-[20px] bg-[#5F35F5] py-[20px] rounded px-[30px]" >
                   Reset
                  </button>
                  <button  href="" className="font-nunito text-white font-semibold text-[20px] bg-[#5F35F5] py-[20px] ml-[10px] rounded px-[30px]">
                  <Link to='/login'>Back to Login</Link> 
                  </button>
                </div>     
      </div>
      
    </div>
  )
}

export default ForgotPassword4