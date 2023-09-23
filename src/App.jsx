import './App.scss';
import './reset.css';

///IMPORT PAGES
import Home from './pages/Home';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      {/* MENU START */}
      <Menu />
      {/* MENU END */}

      {/* HOME START */}
      <Home />
      {/* HOME END */}
    </>
  );
}

export default App;
