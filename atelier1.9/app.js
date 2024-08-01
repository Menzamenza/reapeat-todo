class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            inputTodo:""
        }
    }

    render(){
        return <div>
            <div>
                <h1>To Do list</h1>
                <div>
                    <input  
                        value={this.state.inputTodo}
                        onChange={(e)=>{
                            this.setState({
                                inputTodo:e.target.value
                            })
                        }}
                        type="text"
                        className="form-control"
                        placeholder="tâche"
                    />
                    <button className="btn btn-dark" onClick={()=>{
                        this.setState({todos:[...this.state.todos,this.state.inputTodo]})
                    }}>ajouter</button>
                </div>
                <ul>
                    {this.state.todos.map((todo)=>{
                        return<li>{todo}</li>
                    })}
                </ul>
            </div>
        </div>
    }
} 
ReactDOM.render(<Todos/>,document.getElementById('root'))