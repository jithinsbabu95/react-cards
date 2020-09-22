import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

import App from './components/card'
import Home from './components/home'

const { Meta } = Card;

ReactDOM.render(
  <Home/>,
  document.getElementById('container'),
);