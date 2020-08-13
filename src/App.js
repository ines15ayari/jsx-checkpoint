import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import srcimage from "./image.jpg"

function App() {
  return (
    <>
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>
<h1 className="title red">Hello,my name is Ines</h1>
<br/>
<img src={srcimage}/>
<br/>
<img src="/image.jpg" alt ='myImage'/>
</div>
<video width="320" height="240" controls>
<source src="myVideo.mp4" type="video/mp4"/>
</video>
 </>  
    
  );
}

export default App;
