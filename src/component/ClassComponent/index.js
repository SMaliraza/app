import React,{Component} from "react";
import Child from "./child";


class Classcomponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: props.name,
            todo:[]
        }
    }
  ClickIt= (e) =>{
      e.preventDefault()
      let todo=this.state.todo
      let input= this.state.name
      todo.push(input) 


      this.setState({
          todo:todo,
          name: ""
      })
}
changeHandler= (event) => { 
    console.log(event.target.value,"changehandler")
    this.setState({
        name:event.target.value

    })

}
    render(){
        console.log(this.props ,"props")
        console.log(this.state, "state")
        return(
        <div className="maindiv">
            <div className=" centerdiv">
                <h2 className="h2">TODO LIST</h2>
                <br/>
                <form onSubmit={this.ClickIt} >
                <input type="text"  placeholder="Add an item" value={this.state.name} onChange={this.changeHandler} /> 
                <button> + </button>
            </form>
            {this.state.name}
            <br/>
            <Child value={this.state.todo}/>
            </div>

        </div>
        )
    }
}
export default Classcomponent;
