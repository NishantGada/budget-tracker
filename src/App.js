import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';

function App() {

	const [modal, setModal] = useState(false)

	return (
		<>
			<div className="App">
				<Header />
				<div className="sect">
					<IncomeList />
					<ExpenseList />
				</div>

				<button className="add" onClick={() => {
					document.getElementById("modal").style.visibility = "visible";
					document.getElementsByClassName("App")[0].style.filter = "brightness(0.6)"
					setModal(true)
				}}>
					<h3>+</h3>
				</button>
			</div>

			<div id="modal">
				<button onClick={() => {
					document.getElementById("modal").style.visibility = "hidden";
					document.getElementsByClassName("App")[0].style.filter = "brightness(1)"
					setModal(false)
				}}>X</button>
			</div>
		</>
	);
}

export default App;
