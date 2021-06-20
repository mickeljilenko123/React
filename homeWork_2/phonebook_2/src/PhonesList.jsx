import React, { Component } from 'react';
import ContactsFilter from './ContactsFilter';
import CreateContactForm from './CreateContactForm';
import Contact from './Contact';
import { createContact, fetchContactsList, deleteContact } from './contactsGateway';


class PhonesList extends Component {
    state = {
       contacts: [],
       filter: '',
    }


    componentDidMount() {
        this.fetchContacts();
    }
    
    fetchContacts = () => 
    fetchContactsList()
    .then(contactsList => 
         this.setState({
            contacts: contactsList,
         }));

    onCreate = ({ name, number }) => {
        const { contacts } = this.state;
        if (contacts.find(contact => 
            contact.name.toLowerCase() === name.toLowerCase())){
               alert(`${name} is already in contacts.`);
            } else {
               const newContact = {
                  name,
                  number,
               };

               createContact(newContact)
               .then(() => fetchContactsList());
      }
     }

     handleDelete = (id) => {
        deleteContact(id)
        .then(() => this.fetchContacts())
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