import React from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Profile from "./Profile.jsx";

class Page extends React.Component {
  state = {
    firstName: "John",
    lastName: "Doe",
  };

  //получаем данные(name, value) из форм
  handleChange = (event) => {
    const { name, value } = event.target;
    //через вычислимые свойства объекта меняем содержимое формы,
    //название свойства соответствует атрибуту name в самой форме
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default Page;

