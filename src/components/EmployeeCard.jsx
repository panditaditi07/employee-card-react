import { Component } from "react";
import style from "./EmployeeCard.module.css";

class EmployeeCard extends Component {
  render() {
    return (
      <div className={style["employee-card"]}>
        <img
          className={style["employee-image"]}
          src={this.props.employee.imageUrl}
          alt={this.props.employee.name + "Prfile picture"}
        />
        <span class={style["names"]}>
          {this.props.employee.firstName} {this.props.employee.lastName}
        </span>
        <span class={style["company"]}>{this.props.employee.company}</span>
      </div>
    );
  }
}

export default EmployeeCard;
