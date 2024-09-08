import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch( 'https://api.github.com/users/Linuxcode01')
    .then( (res) => res.json())
    .then( (data) => {
      setData(data)
      console.log(data);
      
    })
    
  })
    console.log(data);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    > Github followers: {data.followers}
    <h1>Name : {data.name}</h1>
    <h1>Public Repos : {data.public_repos}</h1>
    <h1> Id : {data.id}</h1>
  <img src={data.avatar_url} width={300} className='rounded-3lg p-2 ' alt="" />
    
    </div>
  )

}

export default Github