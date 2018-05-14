import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';

const title = 'Webpack setup';

ReactDOM.render(
  <div>
    {title}
    <Button></Button>
  </div>,
  document.getElementById('app')
);
