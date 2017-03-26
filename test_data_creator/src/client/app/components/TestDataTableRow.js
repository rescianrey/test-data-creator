import React from 'react';
import {render} from 'react-dom';

export default class TestDataTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.selected,
      status: this.props.status,
      percentage: 100
    }

    this.handleChange = this.handleChange.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.getCSS = this.getCSS.bind(this);
    this.getStatusColor = this.getStatusColor.bind(this);
  }

  componentDidMount() {
    setInterval(this.checkStatus, 5000);
  }

  setSelected(val) {
    this.setState({ isSelected: val });
  }

  checkStatus() {
    Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.checkStatus', this.props.recordId, function(result, status) {
      if (status) {
        this.setState({ status: result.status, percentage: result.percentage });
      }
    }.bind(this));
  }

  handleChange(event) {
    this.setState({ isSelected: event.target.checked });
    if (event.target.checked) {
      this.props.addToChecklist(this.props.recordId);
    } else {
      this.props.removeToChecklist(this.props.recordId);
    }
  }

  getCSS() {
    let firstColor = this.getStatusColor(this.state.status);
    let secondColor = firstColor;

    let statusParts = this.state.status.split(' ');

    if (statusParts[0] == 'Ongoing') {
      firstColor = this.getStatusColor("Process");
    }

    let css = { 
        minWidth: "150px",
        color: "black",
        background: "linear-gradient(90deg, "+ firstColor +" "+ this.state.percentage +"%, "+ secondColor+" " + this.state.percentage + "%)",
        fontWeight: "bold"
    };
    return css;
  }

  getStatusColor(stat) {
    const colors = {
      notStarted: "#fffac5",
      deleted: "#d5dada",
      ongoing: "#cfeef8",
      created: "#c1e952",
      queued: "#ebbfbf",
      process: "#4ebade"
    };

    let bColor = colors.notStarted;

    switch(stat) {
      case "Created":
        bColor = colors.created;
        break;
      case "Deleted":
        bColor = colors.deleted;
        break;
      case "Ongoing Deletion":
        bColor = colors.ongoing;
        break;
      case "Ongoing Creation":
        bColor = colors.ongoing;
        break;
      case "Queued":
        bColor = colors.queued;
        break;
      case "Process":
        bColor = colors.process;
        break;
    }
    return bColor;
  }

  render() {
    let name = this.props.name;
    let css = this.getCSS();

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
            <th scope="row" data-label="" className="slds-text-align--center" style={css}>
                <div className="slds-truncate" title="">{this.state.status}</div>
            </th>
          </tr>
    );
  }
}