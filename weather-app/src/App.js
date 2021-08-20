import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>

      <Header />

      {/* <div className="sidebar">       
        <Sidebar />
      </div> */}

      <div className="appMain">
      <Main />
      </div>

    </div>
  );
}

export default App;
