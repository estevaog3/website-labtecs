import React from "react";
import "./Message.css";

export default function ({ value, isSuccess }) {
  let classNames = "message";
  if (isSuccess !== undefined) {
    if (isSuccess) {
      classNames = classNames + " success";
    } else {
      classNames = classNames + " error";
    }
  }
  return <h4 className={classNames}>{value}</h4>;
}
