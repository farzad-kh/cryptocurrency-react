import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import Cryptocurrency from './pages/Cryptocurrencies';
import Exchange from './pages/Exchange';
import Home from './pages/Home';
import News from './pages/News';
import CryptoDetails from './pages/CryptoDetails';
import { Route, Routes, useLocation } from 'react-router-dom'


import { useGetCryptosQuery } from '../services/cryptoSlice';
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,

} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { MenuUnfoldOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, Tabs } from 'antd';
import { NavContext } from '../context/NavLayout/NavContextPro';
import TabBar from './layout/TabBar';






const Main = () => {




    //  clientHeight

    const { Header, Sider, Content } = Layout;
    const { collapsed, setCollapsed } = useContext(NavContext)



    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout  >
     

            <Layout >
                <Header className='custom-shadow'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <TabBar />
                    <Button
                        className='display-none'
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>





                <Content data-scrollbar className='overflow-y-auto scroll-bar-custom main-responsive  '
                    style={{
                        margin: '16px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >


                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cryptocurrency' element={<Cryptocurrency />} />
                        <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                        <Route path='/exchanges' element={<Exchange />} />
                        <Route path='/news' element={<News />} />

                    </Routes>

                    {/* <Exchange/> */}

                </Content>

            </Layout>

            {/* footer */}



        </Layout>

    );
};
export default Main;