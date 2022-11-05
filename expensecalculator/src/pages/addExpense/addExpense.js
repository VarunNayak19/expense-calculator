import React from "react";
import Form from "../../components/form/form";
import TopFold from "../../components/topfold/topfold";
import "./addExpense.css";
const AddExpense = () => {
  return (
    <div className="addexpenseContainer">
      <TopFold />
      <Form />
    </div>
  );
};

export default AddExpense;
