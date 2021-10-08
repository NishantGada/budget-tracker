import './App.css';

import Header from './components/Header';
import Add from './components/Add';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
		<Header />
		<Add />
		
		<div className="sect">
			<IncomeList />
			<ExpenseList />
		</div>

    </div>
  );
}

export default App;
