

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputTODO: ''
        }
    }

    render() {
        return <div className="d-flex justify-content-center align-item-center">
            <div>
                <h2>To Do</h2>
                <div className="input-group">
                    <input
                        value={this.state.inputTODO}
                        onChange={(e) => {
                            this.setState({
                                inputTODO: e.target.value
                            })
                        }}
                        type="text"
                        className="form-control"
                        placeholder="nom de la tache"
                    />
                    <button className="btn btn-warning" onClick={() => {
                        this.setState({
                            todos: [...this.state.todos, this.state.inputTODO]
                        })
                    }}>ajouter</button>
                </div>
                <ul>
                    {this.state.todos.map((todo) => {
                        return <li>{todo}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}
ReactDOM.render(<Todos />, document.getElementById('root'))