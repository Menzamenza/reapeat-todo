class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputToDo: ""
        }
    }

    render() {
        return <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>To-D- list</h1>
                <div className="input-group mb-3">
                    <input
                        value={this.state.inputToDo}
                        onChange={(e) => {
                            this.setState({
                                inputToDo: e.target.value
                            })
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Ajoutez une tâche"
                    />
                    <button className="btn btn-outline-danger" onClick={() => { this.setState({ todos: [...this.state.todos, this.state.inputToDo] }) }}>ajouter</button>
                </div>
                <ul className="list-group shadow">
                        {this.state.todos.map((todo)=>{
                            return <li>
                                {todo}
                            </li>
                        })}
                </ul>
            </div>
        </div>
    }
}
ReactDOM.render(<Todos/>,document.getElementById('root'))