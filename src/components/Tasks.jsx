import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import SearchBox from "./Searchbox";

const URI_BASE = "http://localhost:8080/tasks";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskDescription: "",
            tasks: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    render() {
        return (
            <>
                <Header />
                <SearchBox value={this.state.newTaskDescription}
                    onChange={this.onInputChange}
                    onSubmit={this.onSubmit} />
                <TaskList tasks={this.state.tasks}
                    onUpdate={this.onUpdate}
                    onDelete={this.onDelete} />
            </>
        );
    }

    componentDidMount() {
        fetchTask()
            .then(tasks => {
                this.setState({ tasks })
            })
            .catch(console.log);
    }

    onInputChange(event) {
        this.setState({ newTaskDescription: event.target.value });
    }

    onSubmit(event) {
        const { newTaskDescription } = this.state;
        const options = {
            method: 'POST',
            data: {
                description: newTaskDescription,
                state: false
            }
        };
        fetchTask(options)
            .then(task => {
                const tasks = [...this.state.tasks, task]
                this.setState({ newTaskDescription: " ", tasks });
            })
            .catch(console.log);
        event.preventDefault();
    }

    onUpdate(id, index) {
        const options = {
            method: 'PUT',
            data: { id }
        };
        fetchTask(options, `/${id}`)
            .then(task => {
                const tasks = this.state.tasks;
                tasks[index] = task;
                this.setState({ tasks });
            })
            .catch(console.log);
    }

    onDelete(id, index) {
        const options = {
            method: 'DELETE',
            data: { id }
        };
        fetchTask(options, `/${id}`)
            .then(id => {
                const tasks = this.state.tasks;
                tasks.splice(index, 1);
                this.setState({ tasks });
            })
            .catch(console.log);
    }
}

const fetchTask = (options = {}, endpoint = "") => {
    const init = {
        method: options.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.data)
    };
    return fetch(URI_BASE + endpoint, init).then(resp => resp.json());
}

export default Tasks;