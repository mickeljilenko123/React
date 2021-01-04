import React from "react";

class Expand extends React.Component {
  state = {
    isOpen: false,
  }

  showExpand = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    const arrowBtn = isOpen
      ? <i className="fas fa-chevron-up" />
      : <i className="fas fa-chevron-down" />

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.showExpand}>
            {arrowBtn}
          </button>
        </div>
        <div className="expand__content">
          {isOpen ? children : null}
        </div>
      </div>
    );
  }
}

export default Expand;