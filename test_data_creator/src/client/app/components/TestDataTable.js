import React from 'react';
import {render} from 'react-dom';

import TestDataTableRow from './TestDataTableRow';
import Toast from './Toast';

export default class TestDataTable extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showSpinner: true,
            checked: false,
            testDataItems: [],
            selectedItems: [],
            selectecAction: 'Create Test Data'
        };

        this.retrieveRecords = this.retrieveRecords.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addToChecklist = this.addToChecklist.bind(this);
        this.removeToChecklist = this.removeToChecklist.bind(this);
        this.performAction = this.performAction.bind(this);
        this.selectAction = this.selectAction.bind(this);
        this.retrieveRecords();
    }

    retrieveRecords() {
        Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.retrieveTestData', function(result, status) {
            if (status) {
                this.setState({testDataItems: result, showSpinner: false});
            }
        }.bind(this));
    }

    handleChange() {
        let currentValue = !this.state.checked;
        this.setState({checked: currentValue});

        let recordIds = [];
        this.state.testDataItems.map((record, index) => {
            this.refs[record.Id].setSelected(currentValue);
            if (currentValue) {
                recordIds.push(record.Id);
            }
        });
        this.setState({ selectedItems: recordIds });
    }

    selectAction(event) {
        this.setState({selectecAction: event.target.value});
    }

    addToChecklist(testDataId) {
        if (this.state.selectedItems.indexOf(testDataId) > -1){
            return;
        }

        let newSelected = this.state.selectedItems.slice();
        console.log('SLICE: '+newSelected);
        newSelected.push(testDataId);
        this.setState({ selectedItems: newSelected });
        console.log(newSelected);
    }

    removeToChecklist(testDataId) {
        if (this.state.selectedItems.indexOf(testDataId) < 0){
            return;
        }

        let newSelected = this.state.selectedItems.slice();
        newSelected.remove(testDataId);
        this.setState({ selectedItems: newSelected });
    }

    performAction(event) {
        this.refs.toast.showToast('Processing...');
        switch(this.state.selectecAction) {
            case 'Create Test Data':
                Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.createTestData', this.state.selectedItems, function(result, event) {
                    this.refs.toast.showToast(result);
                }.bind(this));
                break;
            case 'Delete Test Data':
                Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.deleteTestData', this.state.selectedItems, function(result, event) {
                    this.refs.toast.showToast(result);
                }.bind(this));
                break;
            case 'Move to Trash':
                Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.moveToTrash', this.state.selectedItems, function(result, event) {
                    this.refs.toast.showToast(result);
                }.bind(this));
                this.retrieveRecords();
                break;
        }

        this.state.selectedItems.map((testDataId, index) => {
            this.refs[testDataId].setSelected(false);
        });
        this.setState({ selectedItems: [] });
        this.setState({checked: false});
    }

    render() {
        let spinner = null;
        if (this.state.showSpinner) {
            spinner = (
                        <div className="slds-spinner_container" style={{marginTop: "8rem"}} >
                            <div role="status" className="slds-spinner slds-spinner--medium slds-spinner--brand">
                                <span className="slds-assistive-text">Loading</span>
                                <div className="slds-spinner__dot-a"></div>
                                <div className="slds-spinner__dot-b"></div>
                            </div>
                        </div>
                    );
        }

        return (
            <div>
                <Toast ref="toast" />
                <div className="slds-is-relative">
                    
                    <div className="slds-clearfix slds-m-bottom--small slds-m-left--small slds-grid">
                        <div className="slds-col">
                            <div className="slds-form--inline">
                                <div className="slds-form-element">
                                    <div className="slds-form-element__control">
                                        <div className="slds-select_container">
                                            <select value={this.state.selectedAction} onChange={this.selectAction} className="slds-select">
                                                <option>Create Test Data</option>
                                                <option>Delete Test Data</option>
                                                <option>Move to Trash</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="slds-form-element slds-clearfix">
                                    <button className="slds-button slds-button--brand" onClick={this.performAction}>Go!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="slds-table slds-m-bottom--large slds-table--bordered slds-table--cell-buffer ">
                        <thead className='slds-text-title--caps'>
                            <tr>
                                <th scope="col">
                                   <input type="checkbox" name="select-all" onChange={this.handleChange} checked={this.state.checked}/>
                                </th>
                                <th scope="row" data-label="">
                                  <div className="slds-truncate" title="">Test Data Name</div>
                                </th>
                                <th scope="row" data-label="">
                                  <div className="slds-truncate" title="">Short Description</div>
                                </th>
                                <th scope="row" data-label="">
                                  <div className="slds-truncate" title="">Create In</div>
                                </th>
                                <th scope="row" data-label="">
                                  <div className="slds-truncate" title="">Number of Records</div>
                                </th>
                                <th scope="row" data-label="" className="slds-text-align--center">
                                  <div className="slds-truncate" title="">Status</div>
                                </th>
                              </tr>
                        </thead>
                        <tbody>
                            {this.state.testDataItems.map( (record, index)=>{
                                return <TestDataTableRow ref={record.Id} selected={this.state.checked} removeToChecklist={this.removeToChecklist} addToChecklist={this.addToChecklist} key={record.Id} recordId={record.Id} name={record.Name} numberOfRecords={record.Number_of_records_to_create__c} createIn={record.Create_in__c} status={record.Status__c} shortDescription={record.Short_Description__c}/>;
                            } )}
                        </tbody>
                    </table>
                    {spinner}
                </div>
            </div>
        );
    }
}