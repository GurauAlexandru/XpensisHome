import { useContext } from 'react';

import { UserContext } from './context/user.context';

import WelcomePage from './routes/welcome page/welcome.page';
import Home from './routes/home/home.page';

function App() {
  const { currentUser } = useContext(UserContext);

  return !currentUser ? <WelcomePage /> : <Home />;
}

export default App;
