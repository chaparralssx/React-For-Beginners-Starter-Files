import React from 'react';

// import render method from a package called React DOM
// "render" is the equivalent of 'import ReactDOM from...' and using ReactDOM.render(),
// ... it only imports the render method.
import { render } from 'react-dom'; 

import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'; // This is the simple, old-school method. You can also add styles at the component level.
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));