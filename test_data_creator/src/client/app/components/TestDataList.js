import React from 'react';
import {render} from 'react-dom';

import TestDataTable from './TestDataTable';

export default class TestDataList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var useTag = "<use xlink:href='" + ICON_CONTAINER + "custom-sprite/svg/symbols.svg#custom57')}'></use>";
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
              <button className="slds-button slds-button--neutral">New</button>
            </div>
          </div>
        </div>

        <div className="slds-clearfix slds-m-bottom--small slds-m-left--small slds-grid">
          <div className="slds-col">
            <div className="slds-form--inline">
              <div className="slds-form-element">
                <div className="slds-form-element__control">
                  <div className="slds-select_container">
                    <select id="select-01" className="slds-select">
                      <option>Create Test Data</option>
                      <option>Delete Test Data</option>
                      <option>Move to Trash</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="slds-form-element slds-clearfix">
                <button className="slds-button slds-button--brand">Go!</button>
              </div>
            </div>
          </div>
        </div>

        <TestDataTable />

      </div>
    );
  }
}