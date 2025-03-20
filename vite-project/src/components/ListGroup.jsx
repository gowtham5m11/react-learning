import { Fragment, useState } from "react";
// import mouseEvent from "react";
function ListGroup() {
  let items = [
    { id: 1, name: "guntur" },
    { id: 2, name: "vijayawada" },
    { id: 3, name: "amaravathi" },
    { id: 4, name: "nellore" },
    { id: 5, name: "vishakapattanam" }, 
  ];
  const[selectedItem,setSelectedIndex]=useState(-1);
  // removed below because the are not required for the follown method
  // const eventHandler = (event) => console.log(event);
   // items=[];
  // const message=items.length===0 ? <p>No items to display</p> : <p>Items to display</p>;
  // const getmessage=()=>{
  //   return items.length===0 ? <p>No items to display</p> : <p>Items to display</p>
  // }
  return (
    <Fragment>
      <h1>List group</h1>
      {/* {getmessage} */}
      <ul className="list-group">
      {items.map((item, index) => (
      <li className={selectedItem=== index? 'list-group-item active':'list group item'} 
      key={item.id} 
      onClick={()=>setSelectedIndex(index)}  
      >{item.name}
      </li>))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
