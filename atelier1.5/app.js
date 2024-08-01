class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputTODO: ''
        }
    }
    render() {
       return <div className="d-flex justify-content-center align-items-center ">
            <div>
                <h1>To Do</h1>
                <div className="input-group mb-3">
                    <input
                        value={this.state.inputTODO}
                        onChange={(e) => {
                            this.setState({ inputTODO: e.target.value })
                        }}
                        type="text"
                        className="form-control"
                        placeholder="entrez la tâche"
                    />
                    <button className="btn btn-light" onClick={() => {
                        this.setState({ todos: [...this.state.todos, this.state.inputTODO] })
                    }}>ajouter</button>
                </div>
                <ul className="list-group shadow">
                    {this.state.todos.map((todo) => {
                        return <li>
                            {todo}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }
}
ReactDOM.render(<Todos />, document.getElementById('root'))