import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.jsx';
import flowers from './assets/images/flowers.jpeg';
import './styles/index.scss';
import './styles/test.scss';

const title = 'Webpack setup';

ReactDOM.render(
  <div>
    {title}
    <Button></Button>
    <img src={flowers} />
  </div>,
  document.getElementById('app')
);
