import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/Reader/Reader';
import publications from './components/Reader/publications.json';

const App = () => (
  <Fragment>
    <Reader items={publications} />
  </Fragment>
);

ReactDOM.render(<App />, document.querySelector('#root'));
