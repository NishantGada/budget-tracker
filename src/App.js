import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';

function App() {

	const [amountLeft, setAmountLeft] = useState();

	const [expenseList, setExpenseList] = useState([
		{ key: 1, name: 'Keyboard classes', amount: 1500 },
		{ key: 2, name: 'French classes', amount: 1200 },
		{ key: 3, name: 'Stocks', amount: 12000 },
		{ key: 4, name: 'Grocery', amount: 500 },
	]);
	
	const [incomeList, setIncomeList] = useState([
		{ key: 1, name: 'Salary', amount: 48000 },
		{ key: 2, name: 'Stocks', amount: 2000 },
		{ key: 3, name: 'Tracker (App)', amount: 5000 },
	]);

	var totalIncome = 0;
    incomeList.map((item) => {
        totalIncome = totalIncome + item.amount
    })
	var totalExpense = 0;
    expenseList.map((item) => {
        totalExpense = totalExpense + item.amount
    })

	useEffect(() => {
		setAmountLeft(totalIncome-totalExpense);
	}, [])

	return (
		<>
			<div className="App">
				<Header amountLeft={amountLeft} />
				<div className="sect">
					<IncomeList incomeList={incomeList} totalIncome={totalIncome} />
					<ExpenseList expenseList={expenseList} totalExpense={totalExpense} />
				</div>

				<button className="add" onClick={() => {
					document.getElementById("modal").style.visibility = "visible";
					document.getElementsByClassName("App")[0].style.filter = "brightness(0.6)"
				}}>
					<h3>+</h3>
				</button>
			</div>

			<div id="modal">
				<div className="form-section">
					<h4>Add an income</h4>
					<form className="incomeForm">
						<input type="text" name="income" id="income" placeholder="Enter name" autoComplete="off" /> <br />
						<input type="number" name="incomeValue" id="incomeValue" placeholder="Enter amount" />
						<input type="submit" value="Add" />
					</form>

					<h4>Add an expense</h4>
					<form className="expenseForm">
						<input type="text" name="expense" id="expense" placeholder="Enter name" autoComplete="off" /> <br />
						<input type="number" name="expenseValue" id="expenseValue" placeholder="Enter amount" />
						<input type="submit" value="Add" />
					</form>
				</div>

				<button onClick={() => {
					document.getElementById("modal").style.visibility = "hidden";
					document.getElementsByClassName("App")[0].style.filter = "brightness(1)"
				}}>+</button>
			</div>
		</>
	);
}

export default App;
