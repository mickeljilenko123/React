import React, { Component } from 'react';
import ContactsFilter from './ContactsFilter';
import CreateContactForm from './CreateContactForm';
import Contact from './Contact';

const baseUrl = "https://crudcrud.com/api/980d1bd0aa114a8d89d8a4b17df8ecf4/contacts";

class PhonesList extends Component {
    state = {
       contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
       ],
       filter: '',
    }
    onCreate = ({ name, number }) => {
        
        //1. Create new Object
        //2. Add name and number from object
        //3. Concats
        const { contacts } = this.state;
        if (contacts.find(contact => 
            contact.name.toLowerCase() === name.toLowerCase())){
               alert(`${name} is already in contacts.`);
            } else {
               const newContact = {
                  id: Math.random(),
                  name,
                  number,
               }

               fetch(baseUrl, {
                   method: "POST",
                   headers: {
                    'Content-Type': 'application/json;utc-8'
                   },
                   body: JSON.stringify(newContact)
               }).then(response => )

               const updateContacts = contacts.concat(newContact);
              this.setState({ contacts:  updateContacts })
      }
     }
     handleDelete = (id) => {
        const { contacts } = this.state;
        const updatedContacts = contacts.filter(contact => 
            contact.id !== id);
        this.setState({
            contacts: updatedContacts
        })    
     }
     handleChangeFilter = event => {
         event.preventDefault();
        this.setState({
            filter: event.target.value
        })
    }
    render() {
        const filteredContact = this.state.contacts
           .filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
           .map(contact => <Contact key={contact.id} { ...contact } onDelete={this.handleDelete} />)
        return(
            <div>
                <CreateContactForm onCreate={this.onCreate}/>
                <h2>Contacts</h2>
                <ContactsFilter filterText={this.state.filter} onChange={this.handleChangeFilter}/>
               <ul>
                   {filteredContact}
               </ul>
            </div>
        )
    }
}
export default PhonesList;