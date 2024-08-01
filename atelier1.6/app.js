class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            inputTodo:''
        }
    }
    render(){
        return <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>To Do list</h1>
                <div className="input-group">
                    <input
                        value={this.state.inputTodo}
                        onChange={(e)=>{
                            this.setState({
                                inputTodo:e.target.value
                            })
                        }}
                        type="text"
                        placeholder="tâche"
                        className="form-control"
                    />
                    <button className="btn btn-dark" onClick={()=>{
                        this.setState({todos:[...this.state.todos,this.state.inputTodo]})
                    }}>ajouter</button>
                </div>
                <ul className="list-group border-bottom shadow">
                    {this.state.todos.map((todo)=>{
                        return<li>
                            {todo}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }
}

ReactDOM.render(<Todos/>,document.getElementById('root'))