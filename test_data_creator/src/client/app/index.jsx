import React from 'react';
import {render} from 'react-dom';

import CreateTestDataForm from './components/CreateTestDataForm';
import NukeTestDataForm from './components/NukeTestDataForm';
import TestDataList from './components/TestDataList';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<div className="slds-grid">
    			<div className="slds-size--1-of-4">
    				<NukeTestDataForm />
    			</div>
    			<div className="slds-size--3-of-4">
    				<TestDataList />
    			</div>
    		</div>
    		
    	</div>
    )
  }
}
render(<App/>, document.getElementById('app'));