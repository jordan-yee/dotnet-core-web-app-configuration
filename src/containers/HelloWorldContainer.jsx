import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../components/HelloWorld.jsx';

const helloWorldContainer = (
    <HelloWorld />
);

ReactDOM.render(
    helloWorldContainer,
    document.getElementById('helloWorldContainer')
);