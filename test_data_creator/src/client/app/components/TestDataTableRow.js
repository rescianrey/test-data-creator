import React from 'react';
import {render} from 'react-dom';

export default class TestDataTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.selected,
      status: this.props.status,
      percentage: 100,
      showEditButton: false,
      showEditField: false,
      numberOfRecords: this.props.numberOfRecords

    }

    this.handleChange = this.handleChange.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.onRowHover = this.onRowHover.bind(this);
    this.onRowUnhover = this.onRowUnhover.bind(this);
    this.getCSS = this.getCSS.bind(this);
    this.getStatusColor = this.getStatusColor.bind(this);
    this.onClickOfEditButton = this.onClickOfEditButton.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleNumberOfRecordsChange = this.handleNumberOfRecordsChange.bind(this);
  }

  componentDidMount() {
    setInterval(this.checkStatus, 5000);
  }

  setSelected(val) {
    this.setState({ isSelected: val });
  }

  onRowHover(event) {
    if (!this.state.showEditField) {
      this.setState({ showEditButton: true});
    }
  }

  onRowUnhover(event) {
    if (!this.state.showEditField) {
      this.setState({ showEditButton: false});
    }
  }

  onKeyPress(event) {
    if (event.key == 'Enter') {
      this.setState({ showEditField: false});
      Visualforce.remoting.Manager.invokeAction('TestDataDashboardCtrl.updateNumberOfRecord', this.props.recordId, event.target.value, function(result, status) {
        // do nothing
      }.bind(this));

    }
  }

  handleNumberOfRecordsChange(event) {
    this.setState({ numberOfRecords: event.target.value});
  }

  onClickOfEditButton(e) {
    e.preventDefault();
    this.setState({ showEditButton: false, showEditField: true});
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

    let objs = '';
    if (this.props.sfObject != null && this.props.zObject != null) {
      objs = this.props.sfObject + ' & ' + this.props.zObject;
    } else if (this.props.sfObject != null) {
      objs = this.props.sfObject;
    } else if (this.props.zObject != null) {
      objs = this.props.zObject;
    }

    var useTag = "<use xlink:href='" + ICON_CONTAINER + "utility-sprite/svg/symbols.svg#edit')}'></use>";

    return (
          <tr onMouseEnter={this.onRowHover} onMouseLeave={this.onRowUnhover}>
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
              <div className="slds-truncate" title="">{objs}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate" title="">{this.props.createIn}</div>
            </th>
            <th scope="row" data-label="">
              <div className="slds-truncate number-of-records" title="" onClick={this.onClickOfEditButton}>
                { !this.state.showEditField &&
                  <span>{this.state.numberOfRecords}</span>
                }
                { this.state.showEditField &&
                  <div className="slds-form">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <input type="text" className="slds-input" size="6" value={this.state.numberOfRecords} onKeyPress={this.onKeyPress} name="number-of-records" onChange={this.handleNumberOfRecordsChange}/>
                      </div>
                    </div>
                  </div>
                }
                { this.state.showEditButton &&
                  <button className="slds-button slds-button--icon slds-cell-edit__button slds-m-left--x-small" onClick={this.onClickOfEditButton}>
                    <svg className="slds-button__icon slds-button__icon--hint slds-button__icon--edit" aria-hidden="true" dangerouslySetInnerHTML={{__html: useTag }}>
                    </svg>
                  </button>
                }
              </div>
            </th>
            <th scope="row" data-label="" className="slds-text-align--center" style={css}>
                <div className="slds-truncate" title="">{this.state.status}</div>
            </th>
          </tr>
    );
  }
}