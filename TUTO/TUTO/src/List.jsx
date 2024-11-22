
function List(props){

    const Category=props.category;
    const itemList=props.items;
    const listItems=itemList.map(item => <li key={item.id}>{item.name} :&nbsp; {item.calories}</li>)
    return (<>
       <h3>{Category}</h3>
       <ul>{listItems}</ul>
     </>)


}
export default List;