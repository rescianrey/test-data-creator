import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from 'react-addons-transition-group'

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
                    <div className="slds-notify slds-notify--toast toast slds-float--right" role="alert">
                        <span className="slds-assistive-text">Info</span>
                        <div className="slds-notify__content slds-text-align--center">
                            <h2 className="slds-text-heading--small">{this.state.message}</h2>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <ReactCSSTransitionGroup
              transitionName="toast"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={1000}>
              {toast}
            </ReactCSSTransitionGroup>
        );
    }
}