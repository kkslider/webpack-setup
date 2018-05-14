import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.jsx';
import './styles/index.scss';
import './styles/test.scss';

const title = 'Webpack setup';

ReactDOM.render(
  <div>
    {title}
    <Button></Button>
  </div>,
  document.getElementById('app')
);
