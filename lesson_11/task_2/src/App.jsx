import React from "react";
import Dialog from "./Dialog";


class App extends React.Component {
 
  state = {
    isOpen: false,
  }

  hideDialog = () => {
    this.setState({
      isOpen: false,
    })
  }

  showDialog = () => {
    this.setState({
      isOpen: true,
    })
  }

  render() {

    return (
      <div className="app">
        <div className="btn" onClick={this.showDialog}>Show</div>
        <Dialog isOpen = {this.state.isOpen} onClose={this.hideDialog} title = "some_title">
        <p>some text</p>
        </Dialog>
      </div>
    );
}
}

export default App;
