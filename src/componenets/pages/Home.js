import React ,{Fragment} from 'react'
import Search from '../users/Search'
import Users from '../users/Users'
 const Home = () => {
     const icon=""
    return(
        <Fragment>
              <div>
            <img src={icon} alt=''
             className='round-img'
             style={{width:'50px'}} />
             <p className='lead' style={{color:'red'}}>hi guys... I am <strong>Saurabh Kanswal</strong> and this would be my
                 kind of a first unproper live thing/website. Here you can 
                 search for a github users and can access his/her detail.
             </p><div className='lead'>
                 
                 </div>
        </div>
            <Search />
            <Users />
        </Fragment>
    )
}
export default Home