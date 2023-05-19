import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showDescription, setShowDescription] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowDescription(true);
  };

  const addExpenseHandler = () => {
    setShowDescription(false);
  };

  const cancelEditingHandler = () => {
    setShowDescription(true);
  };
  return (
    <div className="new-expense">
      {showDescription && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {!showDescription && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
