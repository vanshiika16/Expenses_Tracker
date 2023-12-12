import React, { useState } from "react";

import NewExpense from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expense/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2018, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 1000,
    date: new Date(2021, 8, 19),
  },
  {
    id: "e6",
    title: "Hostel Security",
    amount: 35000,
    date: new Date(2021, 4, 1),
  },
  {
    id: "e7",
    title: "Family Gifts",
    amount: 200,
    date: new Date(2022, 12, 25),
  },
  {
    id: "e8",
    title: "New Wardrobe",
    amount: 550,
    date: new Date(2022, 3, 22),
  },
  {
    id: "e9",
    title: "Mobile Phone",
    amount: 80,
    date: new Date(2023, 4, 16),
  },
  {
    id: "e10",
    title: "Trip expenses",
    amount: 800,
    date: new Date(2023, 8, 29),
  },
  {
    id: "e11",
    title: "Sample Books",
    amount: 389,
    date: new Date(2023, 12, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log("In App.js");
    // console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;