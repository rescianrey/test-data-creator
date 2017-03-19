import React from 'react';
import {render} from 'react-dom';

export default class TestDataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="slds-table slds-m-bottom--small slds-table--bordered slds-table--cell-buffer">
        <thead>
          <tr className="slds-text-title--caps">
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="col">
              <div className="slds-truncate">Test Data Name</div>
            </th>
            <th scope="col">
              <div className="slds-truncate">Number of records</div>
            </th>
            <th scope="col">
              <div className="slds-truncate">Short Description</div>
            </th>
            <th scope="col">
              <div className="slds-truncate">Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-001</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-002</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-003</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-004</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-004</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-004</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-004</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" tabindex="-1" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">TD-Data-004</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">1000</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Zendesk Only</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">Created</div>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}