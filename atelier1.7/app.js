class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputTodo: ""
        }
    }

        render() {
            return <div className="d-flex justify-content-center align-items-center">

                <div>
                    <h1>To-Do List</h1>
                    <div className="input-group mb-3">
                        <input 
                            value={this.state.inputTodo}
                            onChange={(e)=>{
                                this.setState({
                                    inputTodo:e.target.value
                                })
                            }}
                            type="text"
                            className="form-control"
                            placeholder=" la tâche"
                        />
                        <button className="btn btn-light" onClick={()=>{
                            this.setState({todos:[...this.state.todos,this.state.inputTodo]})
                        }}>ajouter</button>
                    </div>
                    <ul >
                        {this.state.todos.map((todo)=>{
                            return <li>{todo}</li>
                        })}
                    </ul>
                </div>
            </div>
        }
    
}
ReactDOM.render(<Todos/>,document.getElementById('root'))