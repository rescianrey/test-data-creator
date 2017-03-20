import React from 'react';
import {render} from 'react-dom';

import TestDataTableRow from './TestDataTableRow';

export default class TestDataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="slds-table slds-m-bottom--large slds-table--bordered slds-table--cell-buffer">
        <thead className='slds-text-title--caps'>
            <TestDataTableRow name='Test Data Name' numberOfRecords='Number of records' createIn='Create In' status='Status' shortDescription='Short Description'/>
        </thead>
        <tbody>
          <TestDataTableRow name='TD-Data-001' numberOfRecords='1000' createIn='Zendesk Only' status='Created' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-002' numberOfRecords='200' createIn='Salesforce Only' status='Created' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-003' numberOfRecords='500' createIn='Both' status='Created' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-004' numberOfRecords='100' createIn='Zendesk Only' status='Deleted' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-005' numberOfRecords='20' createIn='Salesforce only' status='Created' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-006' numberOfRecords='600' createIn='Both' status='Not Started' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-007' numberOfRecords='800' createIn='Zendesk Only' status='Created' shortDescription='Matched records'/>
          <TestDataTableRow name='TD-Data-008' numberOfRecords='1000' createIn='Zendesk Only' status='Created' shortDescription='Matched records'/>
        </tbody>
      </table>
    );
  }
}