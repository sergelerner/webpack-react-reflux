import React from 'react';  
import ReactDOM from 'react-dom';
import ExampleComp from './js/components/example.comp.js';
import styles from './css/style.scss';

let App = React.createClass({  
    render: function() {    	
        return (
            <div>
            	<ExampleComp/>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('app'));