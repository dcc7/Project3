import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd'
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi'; //importing the API module.
import { Cryptocurrencies } from '../components'
import { News } from '../components'
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); //using a hook to make an API request.
  //redux toolkit provides the isFetching variable as data is initially undefined.
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;


  return (
    <>
    <Title level={2} className="heading">Global Cryptocurrency Statistics</Title>
    <Row className="summary-stats">
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies (Market Capitalisation)</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified />
    <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Cryptocurrency News (Source: Bing)</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified />
    </>
  )
}

export default Homepage

//simplified shows the top 10 only. Passed down as a prop, it not specified it will default to true.
