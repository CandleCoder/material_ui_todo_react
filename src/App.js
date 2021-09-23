import './App.css';
import ContentContainer from './Components/ContentContainer';
import HeaderBar from './Components/HeaderBar';
function App() {
  return (
    <div className="App">
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <ContentContainer></ContentContainer>
    </div>
  );
}

export default App;
