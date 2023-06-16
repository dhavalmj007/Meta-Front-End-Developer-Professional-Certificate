import logo from './logo.svg';
import './App.css';
import image from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <h1>Below is the image</h1>
      <img
        height={200}
        src={image}
        alt='Image'
      />
      
    </div>
  );
}

export default App;
