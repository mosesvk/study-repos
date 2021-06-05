import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hello = props => {
  console.log(props);
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>Let's build something together</p>
    </div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
