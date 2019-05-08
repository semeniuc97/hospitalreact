import React, { Component } from "react";

class Counter extends Component {
  state = {
    isUpdated:false
  };

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    return this.state.count === 0 ? "Zero" : this.state.count;
  };


  render() {
    return (
      //   <div>
      //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      //     <button onClick={this.handledIncrement }>Click me</button>
      //     <button onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
      //     <ul className="list-group" style={{ width: 400 }}>
      //       {this.state.patients.map(patient => (
      //         <li
      //           className="list-group-item list-group-item-action"
      //           key={patient}
      //         >
      //           {patient}
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      <tr>
        <th scope="row" />
        <td>{this.props.patient.name}</td>
        <td>{this.props.patient.surname}</td>
        <td>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option value>Basic</option>
            <option value="premium">Premium</option>
            <option value="advanced">Advanced</option>
          </select>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.patient.id)}>
            Delete
          </button>{" "}
          <button className="btn btn-info" onClick={this.handledIncrement}>Click me</button>
        </td>
      </tr>
    );
  }
}

export default Counter;
