import React from 'react'
import {Link} from 'react-router-dom'
const Useritem =({user:{avatar_url,login,html_url}})=> {

       
        
        return (
            <div className='card text-center'>
                <img
                src={avatar_url}
                alt=''
                className='round-img'
                style={{width:'50px'}}
                />
            <h1>{login}</h1>
           
            <div>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                Visit Profile
            </Link>
            </div>
            </div>
        )
}

export default Useritem
