import React, { Component } from 'react'


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
         });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state); 
         this.props.onCreate(this.state);
         this.setState({ 
            name: '',
            number: ''
         });
        }

    render() {
        
        return (
            <form className='login-form' onSubmit={this.handleSubmit}>
               <div className="form-control">
                   <label className="form-label" htmlFor="name">Name</label>
                   <input
                    className="form-input"
                    value={this.state.name}
                    type="text"
                    name="name"
                    required
                    onChange={this.handleChange}
                />
               </div>
               <div className="form-control">
                   <label className="form-label" htmlFor="tel">Number</label>
                   <input
                    className="form-input"
                    value={this.state.number}
                    type="tel"
                    name="number"
                    required
                    onChange={this.handleChange}
                />
               </div>
                
                <button className="submit-button" type="submit">Submit</button>
            </form> 
            

        )
    }
    
}

export default ContactForm;
