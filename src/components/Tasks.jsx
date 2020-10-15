import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    render() {
        return (
            <div>
                <Header />
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }

    componentDidMount() {
        fetch("http://localhost:8080/tasks")
            .then(resp => resp.json())
            .then(tasks => {
                this.setState({ tasks })
            });
    }
}

export default Tasks;