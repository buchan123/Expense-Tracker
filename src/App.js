import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransactions } from "./components/AddTransactions";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider className="app-div">
      <Header />
      <div className="container">
        <div>
          <Balance />
          <IncomeExpenses />
        </div>
        <div>
          <TransactionsList />
        </div>
        <div>
          <AddTransactions />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
