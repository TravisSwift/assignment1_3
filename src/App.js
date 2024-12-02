import './App.css';
import { Content } from './components/Content.js';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar.js';
import { SidePanel } from './components/SidePanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <SidePanel />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
