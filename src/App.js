import { useContext } from 'react';

import { UserContext } from './context/user.context';

import WelcomePage from './routes/welcome page/welcome.page';

function App() {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return <WelcomePage />;
}

export default App;
