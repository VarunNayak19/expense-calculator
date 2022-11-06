import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import "./expenseList.css";

const ExpenseList = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  return (
    <div className="expenseList">
      {list.length ? list.map((item) => <Card item={item} />) : <div></div>}
    </div>
  );
};

export default ExpenseList;
