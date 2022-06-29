import './App.css';
import TopBar from './components/TopBar';
import Intro from './components/Intro'
import TrendingStyles from './components/TrendingStyles';
import NewArrivals from './components/NewArrivals';
import Featured from './components/Featured';
import ShopByCategory from './components/ShopByCategory';
import SpecialDeal from './components/SpecialDeal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Intro />
      <TrendingStyles />
      <NewArrivals />
      <Featured />
      <ShopByCategory />
      <SpecialDeal />
      <Footer />
    </div>
  );
}

export default App;
