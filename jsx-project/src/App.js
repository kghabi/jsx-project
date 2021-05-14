import './index.css';
import './style.css';
import image from './imageInSrc.jpg';
function App() {
  return (
    <div className="App">
    <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <div className="imageClass">
    <img src={image} alt="imageinsrc" />
    <br />
    <img src="/imageInPublic.jpg" alt="imageinpublic" />
    </div>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;
