import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} =useParams()
    return (
        <div className='bg-gray-500 text-white p-4 mr-12 items-center text-3lg text-center'>user: {userId}</div>
    )
}

export default User
