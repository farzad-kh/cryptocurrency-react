
// import React from 'react';
// import { Button, Menu, Typography, Avatar } from 'antd';

// import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import icon from "../../images/cryptocurrency.png"
// const Navbar = () => {
//     return (

//         <div className='nav-container'>
//             <div className="logo-container">
//                 <Avatar src={icon} size='large' />
//                 <Typography.Title level={2} className='logo' />
//                 <Link to='/'>Cryptoverse</Link>
//                 {/* <Button className=' menu-control-container'></Button> */}

//             </div>
//             <Menu theme='dark'>
//                 <Menu.Item icon={<HomeOutlined />}>
//                     <Link to='/'></Link>
//                 </Menu.Item>

//             </Menu>
//         </div>
//     );
// };

// export default Navbar;
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,

} from '@ant-design/icons';

import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { NavContext } from '../../context/NavLayout/NavContextPro';
 
import icon from "../../images/cryptocurrency.png"

const { Header, Sider, Content } = Layout;

const NavbarMain = () => {
  const { collapsed } = useContext(NavContext)

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <div  className="navbar ">
      <Layout  >
        {/* <Avatar src={icon}/> */}

        <Sider trigger={null} collapsible collapsed={collapsed} width={"250px"}>

          <div className='m-3 flex h-12 border-b-2 pb-2 border-slate-400 ' >

            <img src={icon} className='object-contain w-full h-full' alt="" />
          </div>




          <Menu className='active-nav'
            style={{ margin: "10px 0" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}>

            <NavLink className={"nav-list"} to='/'>
              <Menu.Item key={1} icon={<HomeOutlined style={{ fontSize: collapsed && "16px" }} />}  >
                home
              </Menu.Item>
            </NavLink>
            <NavLink className={"nav-list"} to='/cryptocurrency'>
              <Menu.Item key={2} icon={<FundOutlined style={{ fontSize: collapsed && "16px" }} />}  >
                Cryptocurrency
              </Menu.Item>
            </NavLink >

          




          </Menu>
        </Sider>

      </Layout>
    </div>


  );
};
export default NavbarMain;