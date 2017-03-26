import React from 'react';
import {render} from 'react-dom';

import Toast from './Toast';

let sf_options = ([
    'None',
    'Account',
    'Contact',
    'Lead',
    'Zendesk_Bulk_Sync_Response__c',
    'Zendesk_Sync_Job__c',
    'ZendeskLog__c'
  ]);

let zd_options = ([
    'None',
    'organizations',
    'users'
  ]);

export default class NukeTestDataForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          sf_object: 'None',
          zd_object: 'None',
          nuke_button_disabled: true
        };

        this.selectSFObject = this.selectSFObject.bind(this);
        this.selectZDObject = this.selectZDObject.bind(this);
        this.nukeData = this.nukeData.bind(this);
    }

    selectSFObject(event) {
        this.setState({sf_object: event.target.value});

        if (event.target.value == 'None' && this.state.zd_object == 'None') {
            this.setState({nuke_button_disabled: true});
        } else {
            this.setState({nuke_button_disabled: false});
        }
    }

    selectZDObject(event) {
        this.setState({zd_object: event.target.value});

        if (this.state.sf_object == 'None' && event.target.value == 'None') {
            this.setState({nuke_button_disabled: true});
        } else {
            this.setState({nuke_button_disabled: false});
        }
    }

    nukeData(e) {
        e.preventDefault();
        this.refs.toast.showToast('Processing...');
        this.setState({sf_object: 'None', zd_object: 'None', nuke_button_disabled: true});
        Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.nukeData', this.state.sf_object, this.state.zd_object, function(result, event) {
            this.refs.toast.showToast(result);
        }.bind(this));
    }

    render() {
        var useTag = "<use xlink:href='" + ICON_CONTAINER + "custom-sprite/svg/symbols.svg#custom7')}'></use>";
    
        return (
            <form>
                <Toast ref="toast" />
                <div className="slds-card slds-form--stacked slds-m-horizontal--small slds-m-bottom--small slds-p-around--medium">
                    <div className="slds-card__header slds-p-horizontal--none">
                        <header className="slds-media slds-media--center slds-has-flexi-truncate">
                            <div className="slds-media__figure">
                                <span className="slds-icon_container nuke-icon" title="description of icon when needed">
                                    <svg className="slds-icon slds-icon--medium" aria-hidden="true" dangerouslySetInnerHTML={{__html: useTag }}></svg>
                                </span>
                            </div>
                            <div className="slds-media__body">
                                <h2>
                                    <a href="javascript:void(0);" className="slds-card__header-link slds-truncate">
                                        <span className="slds-text-heading--small">Nuke Records</span>
                                    </a>
                                </h2>
                            </div>
                        </header>
                    </div>
                    <div className="slds-card__body">
                        <div className="slds-form-element">
                            <label className="slds-form-element__label" >Salesforce Object</label>
                            <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select id="salesforce-object" className="slds-select" value={this.state.sf_object} onChange={this.selectSFObject}>
                                        {sf_options.map(function(name, index){
                                            return <option key={ index }>{name}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="slds-form-element">
                            <label className="slds-form-element__label" >Zendesk Object</label>
                            <div className="slds-form-element__control">
                                <select id="zendesk-object" className="slds-select" value={this.state.zd_object} onChange={this.selectZDObject}>
                                    {zd_options.map(function(name, index){
                                        return <option key={ index }>{name}</option>;
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="slds-form-element slds-clearfix">
                            <button disabled={this.state.nuke_button_disabled} className="slds-button slds-button--destructive slds-float--right" onClick={this.nukeData} >Nuke</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}