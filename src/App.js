import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
