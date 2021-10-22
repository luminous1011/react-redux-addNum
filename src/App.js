import logo from './logo.svg';
import './App.css';

import A from './pages/A';
import B from './pages/B';
import { Provider } from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <A />
        <B />
      </div>
    </Provider>
  );
}

export default App;
