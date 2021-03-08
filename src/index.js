import React from 'react';
import ReactDOM from 'react-dom';

import { Counter } from './myCom/counter.jsx';
import { LifeCycle } from './myCom/lifeCycle.jsx';


ReactDOM.render(
  <LifeCycle name="张三"></LifeCycle>,
  document.getElementById('root')
);