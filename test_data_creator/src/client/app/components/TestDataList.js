import React from 'react';
import {render} from 'react-dom';

import TestDataTable from './TestDataTable';

export default class TestDataList extends React.Component {
    constructor(props) {
        super(props);
        this.redirectToCreationPage = this.redirectToCreationPage.bind(this);
    }

    redirectToCreationPage(e) {
        window.location = '/a0L/e?retURL=/apex/TestDataDashboard';
    }

    render() {
        var useTag = "<use xlink:href='" + ICON_CONTAINER + "custom-sprite/svg/symbols.svg#custom7')}'></use>";
        return (
            <div>
                <div className="slds-page-header slds-m-bottom--small" role="banner">
                    <div className="slds-media slds-media--center">
                        <div className="slds-media__figure">
                          <svg className="slds-icon slds-icon-standard-opportunity" aria-hidden="true" dangerouslySetInnerHTML={{__html: useTag }}>
                          </svg>
                        </div>
                        <div className="slds-media__body">
                            <p className="slds-page-header__title slds-truncate" title="Rohde Corp - 80,000 Widgets">All Test Data</p>
                        </div>
                        <div className="slds-media__figure slds-media__figure--reverse">
                            <button className="slds-button slds-button--neutral" onClick={this.redirectToCreationPage}>New</button>
                        </div>
                    </div>
                </div>
                <TestDataTable />
            </div>
        );
    }
}