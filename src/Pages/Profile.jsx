import React from 'react'
import Navbar from '../Components/Navbar'

function Profile() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center h-screen '>
        <div className='shadow-lg shadow-slate-400 rounded-md flex flex-col items-center p-10 '>
          <img src="https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=612x612&w=0&k=20&c=nrJ6RZ8Ft4vHECnRjBGBK_9XJ7f_lsi3dJjj_uAlkT8=" alt="user" className='w-96' />
           <p>name</p>
           <p>email</p>
           <button className='btn-primary'>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile