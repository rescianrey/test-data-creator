import React from 'react';
import {render} from 'react-dom';

export default class TestDataTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.selected,
      status: this.props.status
    }

    this.handleChange = this.handleChange.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  componentDidMount() {
    setInterval(this.checkStatus, 5000);
  }

  setSelected(val) {
    this.setState({ isSelected: val });
  }

  checkStatus() {
    Visualforce.remoting.Manager.invokeAction('TestDataListCtrl.checkStatus', this.props.recordId, function(result, event) {
        this.setState({ status: result });
    }.bind(this));
  }

  handleChange(event) {
    this.setState({ isSelected: event.target.checked });
    if (event.target.checked) {
      this.props.addToChecklist(this.props.recordId);
    } else {
      this.props.removeToChecklist(this.props.recordId);
    }
    console.log(event.target.checked);
  }

  render() {
    let name = this.props.name;

    if (this.props.recordId && !this.props.isTableHeader) {
      name = <a href={'/' + this.props.recordId}>{this.props.name}</a>;
    }

    return (
          <tr>
            <th scope="col">
               <input type="checkbox" name="selected" checked={this.state.isSelected} value={this.state.isSelected}  onChange={this.handleChange} />
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{name}</div>
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
            <th scope="row" data-label="" className="slds-text-align--center" style={{minWidth: "150px"}}>
              <div className="slds-truncate" title="">{this.state.status}</div>
            </th>
          </tr>
    );
  }
}