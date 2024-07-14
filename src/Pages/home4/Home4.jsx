import React, { useEffect } from 'react'
import Sidebar4 from '../components/Sidebar4/Sidebar4'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const home4 = () => {
  const auth = getAuth();
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const navigate = useNavigate()
  const [verify, setverify] = useState(false)

  useEffect(() => {
    if (!data) {
      Navigate('/login4')
    }
  }, [])

  onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user.emailVerified) {
      setverify(true)
    }
  });

  return (
    <>
      {
        verify ?
          <div>
            <div className='flex'>
              <div className='w-[186px]  h-screen bg-blue-600 rounded'>
                <Sidebar4 />
              </div>
              <div className='w-[427px]'>dfgghhjj</div>
              <div className='w-[344px]'>gyyyuyu</div>
              <div className='w-[344px]'>fffgyhh</div>
            </div>
          </div>
          :
          <div className='absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-blue-600'>
            <div>
              <h1 className='font-sans font-bold text-[40px] text-white'>please verify your email</h1>
              <div className="bg-white text-center rounded-full py-[20px]">
                <button href="" className="font-nunito text-[20px] font-semibold text-red-700">
                  Back to login4
                </button>
              </div>
            </div>
          </div>
      }

    </>
  )
}


export default home4