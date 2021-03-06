import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/bitcoin.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]) //called whenever the screen size changes.

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={1} className="logo">
          <Link to="/">Coinium</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
          size="large"
          shape="default"
          style={{ padding: "3px"}}
          >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && ( //if activeMenu is true then....
        <Menu className="navigation-section" theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Navbar

// Exchanges requires a platinium subscription and hence has been removed.
// <Menu.Item icon={<MoneyCollectOutlined />}>
//   <Link to="/exchanges">Exchanges</Link>
// </Menu.Item>
