import React, { Component } from "react";
import Patient from "./Patient";

class PatientsList extends Component {
  state = {
    patients: [
      { id: 1, name: "Kolya", surname: "Semeniuk", updatedStatus: false },
      { id: 2, name: "Kolya", surname: "Semeniuk", updatedStatus: false }
    ]
  };

  handleDelete = selectedId => {
    const patients = this.state.patients.filter(c => c.id !== selectedId);
    this.setState({ patients });
    console.log("Its okey", selectedId);
  };

  handleUpdate = selectedId => {
    let patients = this.state.patients;
    let patientWithIndex = this.findPatientWithIndex(selectedId);
    patientWithIndex.patient.updatedStatus = true;
    patients.splice(patientWithIndex.index, 1, patientWithIndex.patient);
    this.setState({ patients });
  };

  findPatientWithIndex = id => {
    const patients = this.state.patients;
    let patient = {
      patient: patients.find(c => c.id === id),
      index: patients.findIndex(c => c.id === id)
    };
    return patient;
  };

  handleSave = (id, updatedUserName) => {
    let patientWithIndex = this.findPatientWithIndex(id);
    let patients = this.state.patients;
    patientWithIndex.patient.name = updatedUserName;
    patientWithIndex.patient.updatedStatus = false;
    patients.splice(patientWithIndex.index, 1, patientWithIndex.patient);
    this.setState(patients);
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map(patient => (
              <Patient
                key={patient.id}
                onDelete={this.handleDelete}
                onSave={this.handleSave}
                patient={patient}
                onUpdate={this.handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientsList;
