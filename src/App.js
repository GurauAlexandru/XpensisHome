import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from './context/user.context';

import WelcomePage from './routes/welcome page/welcome.page';
import Home from './routes/home/home.page';
import Overview from './routes/overwiew/overview.page';
import AccountBudget from './routes/budget/budget.page';

function App() {
  const { currentUser } = useContext(UserContext);

  return !currentUser ? (
    <WelcomePage />
  ) : (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Overview />} />
        <Route path='/budget' element={<AccountBudget />} />
      </Route>
    </Routes>
  );
}

export default App;
