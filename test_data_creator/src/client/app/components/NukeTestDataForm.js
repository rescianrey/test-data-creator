import React from 'react';
import {render} from 'react-dom';

export default class NukeTestDataForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var useTag = "<use xlink:href='" + ICON_CONTAINER + "standard-sprite/svg/symbols.svg#account')}'></use>";
    return (
      <form>
        <div className="slds-card slds-form--stacked slds-m-horizontal--small slds-m-bottom--small slds-p-around--medium">
          <div className="slds-card__header slds-p-horizontal--none">
            <header className="slds-media slds-media--center slds-has-flexi-truncate">
              <div className="slds-media__figure">
                <span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
                  <svg className="slds-icon slds-icon--small" aria-hidden="true" dangerouslySetInnerHTML={{__html: useTag }}>
                  </svg>
                </span>
              </div>
              <div className="slds-media__body">
                <h2>
                  <a href="javascript:void(0);" className="slds-card__header-link slds-truncate">
                    <span className="slds-text-heading--small">Nuke Test Data</span>
                  </a>
                </h2>
              </div>
            </header>

          </div>
          <div className="slds-card__body">
            <div className="slds-form-element">
              <label className="slds-form-element__label" >Salesforce Object</label>
              <div className="slds-form-element__control">
                <input type="text" className="slds-input" placeholder="" />
              </div>
            </div>

            <div className="slds-form-element">
              <label className="slds-form-element__label" >Zendesk Object</label>
              <div className="slds-form-element__control">
                <input type="text" className="slds-input" placeholder="" />
              </div>
            </div>

            <div className="slds-form-element slds-clearfix">
              <button className="slds-button slds-button--destructive slds-float--right">Nuke</button>
            </div>
          </div>
          
        </div>
      </form>
    );
  }
}