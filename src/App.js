import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from './context/user.context';

import WelcomePage from './routes/welcome page/welcome.page';
import Home from './routes/home/home.page';
import Dashboard from './routes/dashboard/dashboard.page';
import AccountBudget from './routes/budget/budget.page';
import AccountDetails from './routes/details/details.page';

function App() {
  const { currentUser } = useContext(UserContext);

  return !currentUser ? (
    <WelcomePage />
  ) : (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path='/details' element={<AccountDetails />} />
        <Route path='/budget' element={<AccountBudget />} />
      </Route>
    </Routes>
  );
}

export default App;
