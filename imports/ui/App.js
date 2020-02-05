import React, { Component } from 'react';
import Task from './Task.js';
import { Tasks } from "../api/tasks";
import { withTracker } from 'meteor/react-meteor-data';

class App extends Component{

    renderTasks(){
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>Tareas</header>
                <ul>{this.renderTasks()}</ul>
            </div>
        );
    }

}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);