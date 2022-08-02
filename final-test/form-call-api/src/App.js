import { useState } from "react";
import "./App.css";
import FormLink from "./form/FormLink.jsx";
import LinkList from "./form/LinkList";


function App() {
  const [links, setLink] = useState([]);
  const onAddLink =(newLinkValue) => {
  const newLink = {
    id: links.length+ 1 ,
    titleItem: newLinkValue,



  }
  const newLinkList=[...links,newLink];
  setLink(newLinkList);  

  }
  return (
    <div className="App">
      <FormLink  onAddLink={onAddLink}/>
      <div className="linkList">

      <LinkList data={links}/>
      </div>
    </div>
  );
}

export default App;

