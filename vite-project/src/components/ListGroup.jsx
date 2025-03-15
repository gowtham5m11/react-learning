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
  if (items.length ===0)
    return <><h1>List group</h1><p>There are no items in the list</p></>; 
  return (
    <Fragment>
      <h1>List group</h1>
      <ul className="list-group">
      {items.map((item) => (
      <li key={item.id}>{item.name}</li>))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
