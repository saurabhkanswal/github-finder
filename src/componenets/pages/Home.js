import React ,{Fragment} from 'react'
import Search from '../users/Search'
import Users from '../users/Users'
 const Home = () => {
     const icon="https://avatars0.githubusercontent.com/u/50443111?v=4"
    return(
        <Fragment>
              <div>
            <img src={icon} alt=''
             className='round-img'
             style={{width:'50px'}} />
             <p className='lead' style={{color:'red'}}>hi guys... I am <strong>Priyanshu Baluni</strong> and this would be my
                 kind of a first unproper live thing/website. Here you can 
                 search for a github users and can access his/her detail.
             </p><div className='lead'>
                 <h4>I am available in these platforms,for any queries do message me:</h4>
                 <a href='https://www.facebook.com/iampriyanshu20898/'>Facebook </a>
                 <a href='https://twitter.com/iampriyanshu98'>Twitter </a>
                 <a href='https://www.linkedin.com/in/priyanshu-baluni-705a8b173/'>LinkedIn</a>
                 </div>
        </div>
            <Search />
            <Users />
        </Fragment>
    )
}
export default Home