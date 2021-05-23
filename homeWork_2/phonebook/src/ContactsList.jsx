import React, { Component }  from 'react'
import Filter from './Filter';
import ContactItem from './ContactItem'

class ContactsList extends Component {
    state = {
        filter: '',
    }
    handleChangeFilter = event => {
        event.preventDefault();
        this.setState({
            filter: event.target.value
        })
    }
       render() {
           const filteredContact = this.props.testContacts
           .filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
           .map(contact => <ContactItem key={contact.id} { ...contact } onDelete={this.props.onDelete} />)
        return(
            <div className="contacts">
                <Filter filterText={this.state.filter} onChange={this.handleChangeFilter}/>
                
                <ul className="list">
                    {filteredContact}
                </ul>
            </div>
        )
       }
}

export default ContactsList
