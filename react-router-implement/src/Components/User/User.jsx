import React from 'react'
import { useParams } from 'react-router-dom'

//useParams is used to capture the parameter provided in the url and show data according to the parameter provided


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User