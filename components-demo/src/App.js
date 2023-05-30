
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import OpenField from './components/OpenField';

function App() {
  let Shownews = false;
  return (
    <div className="App">
      <Header/>
      {Shownews?  <News/> : <OpenField/>}
      <Footer/>

    </div>
  );
}

export default App;