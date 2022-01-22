import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css'

const App = () => {

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'navy', textAlign: 'center' }}>
            Coinium. <br />
            ALL RIGHTS RESERVED. <br />
            Coinium is a project completed as part of Project3 at General Assembly's Software Engineering Immersive Program.
          </Typography.Title>
          <Space>
            <Link style={{ color: 'navy' }} to="/">Home</Link>|
            <Link style={{ color: 'navy' }} to="/exchanges">Exchanges</Link>|
            <Link style={{ color: 'navy' }} to="/news">News</Link>|
            <a style={{ color: 'navy' }} href="https://www.github.com/dcc7/Project3">Github</a>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App
