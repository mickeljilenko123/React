import React from 'react';

class ConnectionStatus extends React.Component {
    constructor() {
        super();
        this.state({
         status: online,
        })
    }
    componentDidMount() {
        window.addEventListener('online || offline', this.onStatusNetwork);
    }
    componentWillUnmount() {
        window.removeEventListener('online || offline', this.onStatusNetwork);
    }

    onStatusNetwork = (e) => {
        this.setState({
            status: e.type,
        })
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

render() {
    const { status } = this.state
    const current = ('online' || 'offline') ? "status status_offline" : "status";
    return(
        <div className={current}>{status}</div>
    )
}
}
export default ConnectionStatus;


