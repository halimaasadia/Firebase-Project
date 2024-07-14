import React, { useState } from 'react'
import login4 from '../../assets/login4.png'
import google4 from "../../assets/google4.png";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/UserSlices';

const Login = () => {
const auth = getAuth();
const dispatch = useDispatch();
const provider = new GoogleAuthProvider();
const Navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [emailerr, setEmailerr] = useState('');
const [passworderr, setPassworderr] = useState('');

const [showPassword, setShowPassword] = useState('false');
const [error ,setError] = useState('');

const handleEmail = (e)=> {
setEmail(e.target.value);
setEmailerr('');
}

  const handlePassword= (e)=> {
    setPassword(e.target.value);
    setPassworderr('');
    }

const handleSubmit = () => {
if(!email) { 
setEmailerr('email is required');
setError("emai nai")
  }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setEmailerr('email is required');
    }
    
      if(!password) { 
        setPassworderr('Password is required');
      }
       if(email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    
      signInWithEmailAndPassword(auth, email, password)
     .then((user) => {
      toast.success("login successfully done");
      console.log(user.user, 'user');
      dispatch(userLoginInfo(user.user))
      localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user.user)))
      setTimeout(()=>{
        Navigate('/home4');
      },1000)
    console.log('login done');
  })
     .catch((error) => {
    const errorCode = error.code;
 
   console.log(errorCode)
    if(errorCode.includes('auth/invalid-login4-credential')){
    setError('plz give right email & password');
    }
   
  });
  
}
      }
      const handleGoogleSignIn = ()=>{
        console.log('good');
        signInWithPopup(auth, provider)
  .then(() => {
    // console.log('google login done');
    setTimeout(() =>{
      Navigate('/Home4');
    },1000)
   const errorCode = error.code;
    console.log(errorCode);
    
  });

      }
      return (
        <div className="flex">
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
          <div className="w-1/2 flex justify-end">
            <div className="mt-[225px] mr-[69px]">
              <h1 className="text-[#03014C] font-Sans text-2xl font-bold mb-[29.7px] mt-[221.83px] mr-[215.87px] ">
                Login to your account!
              </h1>
              <img onClick={handleGoogleSignIn} src={google4} alt='' />
              {
                error &&
                <p className='font-Sans text-[20px] p-5 text-white bg-red-500 font-bold'>{error}</p>
              }
              
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
    
              <div className="relative mt-[60px] w-96">
                <input onChange={handlePassword} className="w-full py-[26px] px-[50px] border-b border-[#11175D]" />
                <p className="absolute top-[-8px] left-[32px] font-nunito semibold text-[13px] tracking-[1px] px-[18px] bg-white">
                  Password
                </p>
                
              {
                showPassword ?
                 <RiEyeFill onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[23px]'/>
              :
              <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)} className='absolute top-[28px] right-[23px]'/>
              }
              {
                passworderr &&
              <p className='font-nunito text-[14px] bg-red-500 text-white p-1 rounded mt-1'>{passworderr}</p>
   
              }    
              </div>
    
              <div className="mt-[50px] text-center w-96">
                <div onClick={handleSubmit} className="bg-[#5F35F5] w-96 py-[20px] text-center border-radious-[8.707px] mt-[50px]">
                  <button className="font-nunito text-xl font-semibold text-white">
                    Login to Continue
                  </button>
                </div>
               
                <div className="mt-[35px] ml-[75px] mr-[75px] mb-[17px]">
                <p className="font-sans text-[#03014C] font-normal text-[13px]">
                Already have an account ?
                <span className="text-[#EA6C00] font-sans font-bold"><Link to='/' > Sign up </Link></span>
              </p>
                </div>
                <div className="text-center w-96">
              <p className="font-sans  text-[18px] text-[#EA6C00] font-bold cursor-pointer"><Link to='/forgotPassword4'>
                Forgot Password</Link>
              </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="w-1/2">
            <img className="w-full h-screen object-cover" src={login4} alt="" />
          </div>
        </div>
      )
            }
    
    
    export default Login;
    