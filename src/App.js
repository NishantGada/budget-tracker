import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';

function App() {

	const [expense, setExpense] = useState(15200);
	const [income, setIncome] = useState(55000);
	const [left, setLeft] = useState();

	useEffect(() => {
		setLeft(income-expense);
	}, [])

	return (
		<>
			<div className="App">
				<Header left={left} />
				<div className="sect">
					<IncomeList income={income} />
					<ExpenseList expense={expense} />
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
