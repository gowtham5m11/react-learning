import { Fragment } from "react";
function ListGroup() {
  let items = [
    { id: 1, name: "guntur" },
    { id: 2, name: "vijayawada" },
    { id: 3, name: "amaravathi" },
    { id: 4, name: "nellore" },
    { id: 5, name: "vishakapattanam" }, 
  ];
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
      {items.map((item) => (
      <li className="list-group-item" key={item.id}>{item.name}</li>))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
