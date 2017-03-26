import React from 'react';
import {render} from 'react-dom';

import CreateTestDataForm from './components/CreateTestDataForm';
import NukeTestDataForm from './components/NukeTestDataForm';
import TestDataList from './components/TestDataList';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="slds-is-relative">
                <div className="slds-grid">
                    <div className="slds-size--1-of-5">
                        <NukeTestDataForm />
                    </div>
                    <div className="slds-size--4-of-5">
                        <TestDataList />
                    </div>
                </div>
                
            </div>
        )
    }
}
render(<App/>, document.getElementById('app'));