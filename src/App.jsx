import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
  const {imageData}= props;
  const data = imageData();

  return(
    <div>
      <h1>Kalvium Gallery</h1>
      <div id="grid">
        {data.map((el)=>{
          return(
            <div key={el.id}>
              <img src={el.img}/>
              </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;
