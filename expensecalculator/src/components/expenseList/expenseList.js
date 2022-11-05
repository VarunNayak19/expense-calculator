import React from "react";
import Card from "./card";
import "./expenseList.css";

const ExpenseList = () => {
  const list = [
    {
      title: "made a purchase",
      logo: "m",
      createdAt: Date.now(),
      amount: 11234,
    },
    {
      title: "made a purchase",
      logo: "m",
      createdAt: Date.now(),
      amount: 11234,
    },
  ];
  return (
    <div>{list.length ? list.map((item) => <Card item={item} />) : null}</div>
  );
};

export default ExpenseList;
