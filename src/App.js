import './App.css';
import TopBar from './components/TopBar';
import Intro from './components/Intro'
import TrendingStyles from './components/TrendingStyles';
import NewArrivals from './components/NewArrivals';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Intro />
      <TrendingStyles />
      <NewArrivals />
    </div>
  );
}

export default App;
