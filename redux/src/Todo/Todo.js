import { useSelector, useDispatch } from "react-redux";
import { addValue, getValue } from "./action";

const Todo = ()=> {

 const dispatch = useDispatch();
 const Slice = useSelector((state) => state.todo);
 console.log("Slice",Slice);
    
 function Change (E){
    dispatch(getValue(E.target.value))
  console.log("getvalue" ,getValue)
 };

 function Get (){
    dispatch(addValue(Slice));
    dispatch(getValue(""));

    console.log("Slice add",Slice);

 };

 function Reset (){
    dispatch(addValue([]));
 };

    return (<>
      <div>
        <input type="text" onChange={Change} value={Slice.inputValue}></input>
        <button onClick={Get}>Add</button>
        <button onClick={Reset}>Reset</button>
      </div>
      <h2>Task</h2>
      {Slice.addInputValue.map((E) => (<p key={E}>{Slice.addInputValue}</p>)
      )}
      </> );
}
export default Todo;