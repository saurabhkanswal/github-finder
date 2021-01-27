import React, { useState,useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
const Search =()=> {
   
   const githubContext= useContext(GithubContext)
   const alertContext= useContext(AlertContext)
    const [text,setText]=useState('')
    
    const onSubmit= (e)=>{
        e.preventDefault();
        if (text=== ''){
            alertContext.setAlert('Please enter something','light')
        }else{
            githubContext.searchUsers(text)
            setText('')
        }
       
    }
    const onChange=(e)=>{
        setText(e.target.value)
    }
        
            // Destructuring
            // const {showClear,clearUsers}=this.props
        return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type='text' 
                    name='text' 
                    placeholder='Search' 
                    value={text}
                    onChange={onChange}
                    />
                    <input type='submit' 
                    value='Search' 
                    className='btn btn-dark btn-block' />
                </form>
                {githubContext.users.lenght > 0 &&  <button 
                    onClick={githubContext.clearUsers}
                     className='btn btn-light btn-block'>
                        Clear</button>}
            </div>
        )
    
}


export default Search
