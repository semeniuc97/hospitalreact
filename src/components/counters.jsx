import Counter from "./counter";
import React, { Component } from "react";

class Counters extends Component {
  state = {
    // counters: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    patients: [{ id: 1, name: "Kolya", surname: "Semeniuk" },
    { id: 2, name: "Kolya", surname: "Semeniuk" },
]
  };

  handleDelete = selectedId => {
    const patients = this.state.patients.filter(c => c.id !== selectedId);
    this.setState({ patients });
    console.log("Its okey", selectedId);
  };

  render() {
    return (
      //   <div>
      //     {this.state.counters.map(c => (
      //       <Counter
      //         onDelete={this.handleDelete}
      //         id={c.id}
      //         key={c.id}
      //         counter = {c}

      //       />
      //     ))}
      //   </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map(patient => (
              <Counter key={patient.id} onDelete={this.handleDelete} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
