import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.jsx';
import flowers from './assets/images/flowers.jpeg';
import paint from './assets/images/paint.svg';
import arctic from './assets/images/arctic.svg';
import './styles/index.scss';
import './styles/test.scss';

const title = 'Webpack setup';

ReactDOM.render(
  <div>
    {title}
    <Button></Button>
    <img src={flowers} />
    <img src={paint} />
    <img src={arctic} />
  </div>,
  document.getElementById('app')
);
