import React from 'react';
import {render} from 'react-dom';

export default class Toast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            show: false
        };

        this.hideToast = this.hideToast.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    hideToast() {
        this.setState({show: false, message: ''});
    }

    showToast(message) {
        this.setState({show: true, message: message});
        setTimeout(this.hideToast, 2000);
    }

    render() {
        let useTag = "<use xlink:href='" + ICON_CONTAINER + "utility-sprite/svg/symbols.svg#close')}'></use>";
        let toast = null;

        if (this.state.show) {
            toast = (
                <div className="slds-notify_container slds-is-absolute">
                    <div className="slds-notify slds-notify--toast slds-theme--success slds-float--right" role="alert">
                        <span className="slds-assistive-text">Info</span>
                        <div className="slds-notify__content slds-text-align--center">
                            <h2 className="slds-text-heading--small">{this.state.message}</h2>
                        </div>
                    </div>
                </div>
            );
        }
        return toast;
    }
}