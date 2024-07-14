import React, { useState } from 'react'
import registration4 from "../../assets/registration4.png";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
const auth = getAuth();
const [email, setEmail] = useState('');
const [fullName, setFullName ] = useState('');
const [password, setPassword] = useState('');

const [emailerr, setEmailerr] = useState('');
const [fullNameerr, setFullNameerr] = useState('');
const [passworderr, setPassworderr] = useState('');

const [showPassword, setShowPassword] = useState('false');

const handleEmail = (e)=> {
setEmail(e.target.value);
setEmailerr("");

}
const handleFullName = (e)=> {
  setFullName(e.target.value);
  setFullNameerr("");
  
  }
  const handlePassword= (e)=> {
    setPassword(e.target.value);
    setPassworderr("");
    
    }

const handleSubmit = () => {
  if(!email) { 
    setEmailerr('email required');
   } 
   else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("email is invalid");
    }
    if(!fullName) { 
      setFullNameerr('FullName required');
    }
    if(!password) { 
    setPassworderr('Password required');
    }
    if(email && fullName && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    sendEmailVerification(auth.currentUser)
  
    toast.success("registration done. please verify your email");
    setEmail('');
    setFullName('');
    setPassword('');
   
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes('auth/email-already-in-use')){
      setEmailerr('email is already in used');
      console.log('fgghh');
    }
   
  });
    }
   }
    
  return (
   
    <div className='flex'>
        <div className='w-1/2 flex justify-end'>
        <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
         />
          <div>
            <h1 className='text-[#11175D] font-Nunito font-bold text-[34px] mr-[69px] mb-[13px] mt-[225px]'>Get started with easily register</h1>
            <p className='text-[#000] font-Nunito text-xl font-normal mb-[53px]'>Free register and you can enjoy it</p>
            <div className='relative w-96'>
              <input type='email' onChange={handleEmail} value={email} className='w-full rounded-lg text-[#11175D] border-[1.72px] solid py-[26px] px-[50px] mb-16'/>
              <p className='absolute top-[-8px] left-[50px]  bg-white text-[#11175D] font-Nunito font-semibold tracking-[1px]'>Email Address</p>
              {
                emailerr &&
              <p className='font-nunito w-full py-2 px-2 my-4 text-[14px] absolute top-[82px] left-[2px] bg-red-500 text-white mb-5  rounded mt-1'>{emailerr}</p>
             }    

            </div>
            <div className='relative w-96'>
              <input type='Full name' onChange={handleFullName} value={fullName} className='w-full rounded-lg text-[#11175D] border-[1.72px] solid py-[26px] px-[50px] mb-[56px]'/>
              <p className='absolute top-[-8px] left-[50px] px-[18px] bg-white text-[#11175D] font-Nunito font-semibold tracking-[1px]'>Full name </p>
              {
                fullNameerr &&
              <p className='font-nunito text-[14px] py-2 px-2 my-4  w-full absolute top-[82px] left-[2px]  bg-red-500 text-white p-1 rounded mt-1'>{fullNameerr}</p>
             }  

            </div>
            <div className='relative w-96'>
              <input type={showPassword ? 'text' : 'Password'} onChange={handlePassword} value={password} className='w-full rounded-lg text-[#11175D] border-[1.72px] solid py-[26px] px-[50px] mb-16'/>
              <p className='absolute top-[-8px] left-[50px] px-[18px] bg-white text-[#11175D] font-Nunito font-semibold tracking-[1px]'>Password</p>
              {
                showPassword ?
                 <RiEyeFill onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[23px]'/>
              :
              <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[23px]'/>
              }
              {
                passworderr &&
              <p className='font-nunito text-[14px] py-2 px-2 my-4 w-full  absolute top-[82px] left-[2px] bg-red-500 text-white p-1 rounded mt-1'>{passworderr}</p>
   
              }   


            </div>
            <div onClick={handleSubmit}
                className="bg-[#5F35F5] w-96 py-[20px] text-center rounded-full mb -[35px]">
               
            
                <button className="font-nunito text-xl font-semibold text-white">
                  Sign up
                </button>
              </div>
              <div className="mt-[35px] ml-[75px] mr-[75px] mb-[117px]">
                <p className="font-sans text-[#03014C] font-normal text-[13px]">
                  Already have an account ?
                  <span className="text-[#EA6C00] font-sans font-bold"><Link to='/login1'>Sign In</Link></span>
                </p>
              </div>
          </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src={registration4} alt="" />
        </div>
    </div>
    
  
  )
}


export default Registration