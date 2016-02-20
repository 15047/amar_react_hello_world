import React from 'react';
import ReactDom from 'react-dom';

import MyApp from './Components/MyApp';

const app = document.getElementById('app');
ReactDom.render(<MyApp />, app);