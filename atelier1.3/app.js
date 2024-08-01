class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputTODO: ''
        }
    }

    render() {
        return <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>To do List</h1>
                <div className="input-group mb-3">
                    <input 
                        
                        value={this.state.inputTODO}
                        onChange={(e)=>{
                            this.setState({
                                inputTODO:e.target.value
                            })
                        }}
                        type="text"
                        placeholder="nouvelle tache"
                        className="form-control"
                    />
                    <button
                        className="btn btn-warning" 
                        onClick={()=>{this.setState({todos:[...this.state.todos,this.state.inputTODO]})}}
                    >ajouter</button>
                </div>
                <ul className="shadow list-group">
                    {this.state.todos.map((todo)=>{
                        return <li className="p-2">{todo}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}
ReactDOM.render(<Todos/>,document.getElementById('root'))