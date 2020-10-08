import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);
  const [contentImage, setContentImage] = useState(false);
  const [contentTitle, setContentTitle] = useState("Welcome to my app!");
  const [contentText, setContentText] = useState("Hi");


  const HandleMenu = (str)=>{
    //capture what happened in the menu and change the page state based on it
    // alert(str)
    if(str === "bg"){
      setContentColor("#DCA877");
      setContentImage("");
    };
    if(str === "img"){
      setContentImage("url(/bgimage1.jpg)");
      setContentColor("#DCA877");
    }
    if(str === "help"){
      setContentTitle("What can I help you with?");
      setContentText("Ask anything.");
    }
  }

  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor} bgimage={contentImage}>
        <h1>{contentTitle}</h1>
        <div>{contentText}</div>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
}
