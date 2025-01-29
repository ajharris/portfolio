import './App.css';
import './components/Projects'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Andrew Harris</h1>
        <h2>Portfolio</h2>
        <p>andrew.harris (at) torontomu.ca</p>
      </header>
        <Projects />

    </div>

  );
}

export default App;
