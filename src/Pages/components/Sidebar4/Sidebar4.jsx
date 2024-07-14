import React, { useState } from 'react'
import profile4 from "../../../assets/profile4.png"
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMessage,  AiOutlineLogout } from "react-icons/ai";
// import { IoMdCloudUpload } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import "cropperjs/dist/cropper.css";
// import Cropper from "react-cropper";
// import { createRef } from 'react'; 


const Sidebar = () => {
const auth = getAuth();
const navigate = useNavigate()

const handleSignout = ()=>{
  signOut(auth).then(() => {
    navigate('/login4')
    
  }).catch((error) => {
   
  });
}
// const [imageUploadPopup, 
// ] = useState(false)
// const [image, setImage] = useState();
// const [cropData, setCropData] = useState("#");
// const cropperRef = createRef();
// const handlePopup = ()=>{
//   imageUploadPopup(true)
// }

//   const handleCropeImage = (e) => {
//     e.preventDefault();
//     let files;
//     if (e.dataTransfer) {
//       files = e.dataTransfer.files;
//     } else if (e.target) {
//       files = e.target.files;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//     reader

  return (
    <>
    <div className='relative h-screen bg-blue-600 rounded'>
      <div className='relative group
      pt-[35px]'>
        <img className='mx-auto w-28 h-28' src={profile4} alt='' />
        {/* <div className='absolute top-[35px] left-[37px] w-28 h-28 group hover:bg-overlay rounded-full flex justify-center items-center'>
        <IoMdCloudUpload onClick={handlePopup} className='text-white text-3xl opacity-0 group-hover:opacity-100 cursor-pointer'/> 

        </div> */}
      </div>
      <div className='py-[20px] mt-[80px] m flex justify-center relative after:absolute after:content[""] after:w-full after:h-full after:bg-white after:top-0 after:left-[25px] after:rounded-l-lg after:z-[-1] z-[1] before:absolute before:content[""] before:w-[8px] before:h-full before:bg-blue-600 before:rounded-l-lg before:top-0 right-0'> 
      <AiOutlineHome className='text-[50px] text-center '/>
      </div>
      <div className='flex mt-[80px] justify-center'>
      <AiOutlineMessage className='text-[50px] text-center text-[#BAD1FF] '/>
      </div>
      <div className='flex mt-[80px] justify-center'>
      <AiOutlineMessage className='text-[50px] text-center text-[#BAD1FF] '/>
      </div>
      <div className='flex mt-[80px] justify-center'>
      <AiOutlineMessage className='text-[50px] text-center text-[#BAD1FF] '/>
      </div>
      <div className='flex mt-[80px] justify-center'>
      <AiOutlineMessage className='text-[50px] text-center text-[#BAD1FF] '/>
      </div>
      <div className='flex mt-[80px] justify-center'>
      <AiOutlineLogout onClick={handleSignout}className='cursor-pointer text-[50px] text-center text-[#BAD1FF] '/>
      </div>
    </div>
    {/* {
      imageUploadPopup &&
    <div className='absolute h-screen w-full bg-red-500 top-0 left-0 z-[1] flex justify-center items-center'>
      <div className='bg-white w-[600px] p-[20px] rounded-lg'>
      <h1 className="text-[#03014C] font-Sans text-2xl font-bold">
                Image Upload
                <input type='file' className='my-[40px]' onChange={handleCropeImage} />
                <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
        /> */}

      {/* </h1>
      <div className='mt-[40px] gap-x-[20px] flex'>
        <button className='bg-blue-600 px-[30px] py-[16px] text-[20px] font-nunito text-white rounded-lg'>Upload</button>
        <button className='bg-blue-600 px-[30px] py-[16px] text-[20px] font-nunito text-white rounded-lg'>Cancel</button>
      </div>
     
      </div>
      </div>
    
     } */}
     
    
    </>
    
  )
}


export default Sidebar