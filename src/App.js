import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/user.context';
import WelcomePage from './routes/welcome page/welcome.page';
import Home from './routes/home/home.page';
import Dashboard from './routes/dashboard/dashboard.page';
import AccountBudget from './routes/budget/budget.page';
import AccountDetails from './routes/details/details.page';
import ModalUserProfile from './components/modal-user-profile/modal-user-profile.component';

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
        <Route path='/my-profile' element={<ModalUserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
