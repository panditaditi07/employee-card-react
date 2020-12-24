import { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./Employee.module.css";
let url =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";
class Employee extends Component {
  state = { employees: [] };

  componentDidMount = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1 className={styles["heading"]}>Employee List</h1>
        <div className={styles["employee-container"]}>
          {this.state.employees.map((employee) => {
            return <EmployeeCard employee={employee} key={employee.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Employee;
