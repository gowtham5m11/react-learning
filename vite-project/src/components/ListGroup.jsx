import { Fragment } from "react";
function ListGroup() {
  let items = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" }, 
  ];
  items=[];
  // const message=items.length===0 ? <p>No items to display</p> : <p>Items to display</p>;
  const getmessage=()=>{
    items.length===0 ? <p>No items to display</p> : <p>Items to display</p>
  }
  return (
    <Fragment>
      <h1>List group</h1>
      {getmessage}
      <ul className="list-group">
      {items.map((item) => (
      <li key={item.id}>{item.name}</li>))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
