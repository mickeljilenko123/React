import React, { Component } from 'react';

class CreateContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      })
    }
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onCreate(this.state);
       this.setState({
           name: '',
           number: '',
       })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                       type="text" 
                       name="name"
                       value={this.state.name}
                       onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                       required
                    />
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <input 
                       type="tel"
                       name="number"
                       value={this.state.number}
                       onChange={this.handleChange}
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                       required
                    />
                </div>
                <button type="submit">Add Contact</button>
            </form>
        )
    }
   
}
export default CreateContactForm