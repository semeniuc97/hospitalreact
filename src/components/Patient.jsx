import React, { Component } from "react";

class Patient extends Component {
  state = {
    isUpdated: false
  };

  userNameInput = React.createRef();
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    return this.state.count === 0 ? "Zero" : this.state.count;
  };

  checkUpdateStatus = () => {
    if (!this.props.patient.updatedStatus) {
      return (
        <tr>
          <th scope="row" />
          <td>{this.props.patient.name}</td>
          <td>{this.props.patient.surname}</td>
          <td>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
            >
              <option value>Basic</option>
              <option value="premium">Premium</option>
              <option value="advanced">Advanced</option>
            </select>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.patient.id)}
            >
              Delete
            </button>{" "}
            <button
              className="btn btn-info"
              onClick={() => this.props.onUpdate(this.props.patient.id)}
            >
              Update
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <th scope="row" />
          <td>
            <input
              className="form-control"
              type="text"
              defaultValue={this.props.patient.name}
              ref={this.userNameInput}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              defaultValue={this.props.patient.surname}
            />
          </td>
          <td>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
            >
              <option value>Basic</option>
              <option value="premium">Premium</option>
              <option value="advanced">Advanced</option>
            </select>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.patient.id)}
            >
              Delete
            </button>{" "}
            <button
              className="btn btn-info"
              onClick={() => this.props.onUpdate(this.props.patient.id,this.userNameInput)}
            >
              Update
            </button>{" "}
            <button
              className="btn btn-success"
              onClick={() => this.props.onSave(this.props.patient.id,this.userNameInput.current.value)}
            >
              Save changes
            </button>
          </td>
        </tr>
      );
    }
  };

  render() {
    return this.checkUpdateStatus();
  }
}

export default Patient;
