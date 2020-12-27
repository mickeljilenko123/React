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

render() {
    const { status } = this.state
    const current = status !=='online' ? "status status_offline" : "status";
    return(
        <div className={current}>{status}</div>
    )
}
}
export default ConnectionStatus;


