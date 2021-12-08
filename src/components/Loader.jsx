import React from 'react'
import { Spin } from 'antd'
import 'antd/dist/antd.css';

const Loader = () => {
  return (
    <div className="loader">
      <Spin size="large"/>
    </div>
  )
}

export default Loader
