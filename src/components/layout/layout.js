import React from 'react';
import style from './layout.module.css';
import { Outlet, NavLink } from 'react-router-dom';
//import counter from '../../assets/images/counter.png';
//import cartable from '../../assets/images/cartable.png';
//import wgroup from '../../assets/images/group.png';
//import users from '../../assets/images/users.png';
//import messages from '../../assets/images/messages.png';
//import userinfo from '../../assets/images/userinfo.png';
//import logout from '../../assets/images/logout.png';

  
const Layout = () => {

const LinkStyles=({isActive})=>{
return ({color: isActive ? 'black' : 'lightGray',
backgroundColor: isActive ? 'white': '',
textDecoration:'none',
display:'block',
marginTop:'40px',
height:'40px',
width:'100%',
borderRadius:'0px 20px 20px 0px',
paddingTop:'5px'
})
}
  
    return (
        <div className={style.layout}>
             
         <div className={style.container}>
           
         <Outlet/>
         
         </div>
         <div className={style.sidebar}>
            <div className={style.frame}>
             <div className={style.logo}></div>
            </div>
            <div className={style.navbar}>
            
            <nav>

                 <NavLink to='counter' style={LinkStyles}>پیشخوان</NavLink>

                 <NavLink to='requests' style={LinkStyles}>درخواست ها</NavLink>
              
                 <NavLink to='cartable' style={LinkStyles}>کارتابل</NavLink>
                
                 <NavLink to='groups' style={LinkStyles}>کارگروه ها</NavLink>
                
                 <NavLink to='users' style={LinkStyles}>کاربران</NavLink>
            
                 <NavLink to='messages' style={LinkStyles}>پیام ها</NavLink>
                
                 <NavLink to='userInformations' style={LinkStyles}>اطلاعات کاربری</NavLink>
                
          </nav>
            </div>
          
         </div>
        </div>
    );
};

export default Layout;