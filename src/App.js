import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Footer from "./components/Footer/Footer";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Papier toaletowy",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Telewizor",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Ubezpieczenie samochodu",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Biurko",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Klawiatura",
    amount: 149.99,
    date: new Date(2021, 7, 23),
  },
  {
    id: "e6",
    title: "Myszka",
    amount: 51.69,
    date: new Date(2021, 8, 11),
  },
  {
    id: "e7",
    title: "Monitor",
    amount: 399.99,
    date: new Date(2021, 9, 16),
  },
  {
    id: "e8",
    title: "Fotel",
    amount: 424.55,
    date: new Date(2021, 11, 12),
  },
  {
    id: "e9",
    title: "Plecak",
    amount: 49.97,
    date: new Date(2022, 1, 10),
  },
  {
    id: "e10",
    title: "Piórnik",
    amount: 19.99,
    date: new Date(2022, 3, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
};

export default App;
