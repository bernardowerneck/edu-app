import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import SelectionElement from './SelectionElement';

ReactDOM.render(
    <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <SelectionElement />,
document.getElementById('root')
);

