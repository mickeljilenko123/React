import React, { Component } from "react";

class ConnectionStatus extends Component {
    state = {
        status: "online",
    };

    newStatus = (e) => {
        this.setState({
            status: e.type,
        });
    };

    componentDidMount() {
        window.addEventListener("online", this.newStatus);
        window.addEventListener("offline", this.newStatus);
    }

    componentWillUnmount() {
        window.removeEventListener("online", this.newStatus);
        window.removeEventListener("offline", this.newStatus);
    }

    changeClassName = (status) => `status ${status === "offline" ? "status_offline" : ""}`;

    render() {
        return <div className={this.changeClassName(this.state.status)}>{this.state.status}</div>;
    }
}

export default ConnectionStatus;


