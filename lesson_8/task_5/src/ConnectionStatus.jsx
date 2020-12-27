import React from 'react';

class ConnectionStatus extends React.Component {
    constructor() {
        super();
        this.state({
         status: online,
        })
    }
    onStatusNetwork = (e) => {
        this.setState({
            status: e.type,
        })
    } 
    componentDidMount() {
        window.addEventListener('online', this.onStatusNetwork);
        window.addEventListener('offline', this.onStatusNetwork);

        
    }
    componentWillUnmount() {
        window.removeEventListener('online', this.onStatusNetwork);
        window.removeEventListener('offline', this.onStatusNetwork);

    }
 
    

    // setStatus = (online, offline) => {
    // if(online) {
    //     this.setState({
    //         online,
    //       });
    // };
    // if(offline) {
    //     this.setState({
    //         offline,
    //     })
    //     document.body.style.backgroundColor = '#f00';
    // };


    changeClassName = (status) => `status ${status === "offline" ? "status_offline" : ""}`;

    render() {
        return <div className={this.changeClassName(this.state.status)}>{this.state.status}</div>;
    }
}

export default ConnectionStatus;


