import React from "react";

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    //установка заголовка по умолчанию
    this.setDemensions(innerWidth, innerHeight);
  }
  //отписка от события
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  //после изменения размера обновляем состояние state
  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDemensions(innerWidth, innerHeight);
  }

  //чтобы не было дублирования кода
  setDemensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };


  render() {
    return (
      <div className="dimensions">
        {`${innerWidth}px - ${innerHeight}px`}
      </div>
    )
  }
}

export default Dimensions;