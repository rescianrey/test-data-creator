import React from 'react';
import {render} from 'react-dom';

export default class TestDataTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <tr>
            <th scope="col">
               <input type="checkbox" name="options" />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.name}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.shortDescription}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.createIn}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.numberOfRecords}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.status}</div>
            </th>
          </tr>
    );
  }
}