import React, { Component } from 'react';
import ContactsFilter from './ContactsFilter';
import CreateContactForm from './CreateContactForm';
import Contact from './Contact';

const baseUrl = 'https://crudcrud.com/api/1dda8a0fb7904ffb99c78763d76ec3de/contacts';

class PhonesList extends Component {
    state = {
       contacts: [],
       filter: '',
    }

    componentDidMount() {
        this.fetchContactsList();
    }
    
    fetchContactsList = () => {
        fetch(baseUrl).then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(contactsList => {
             const contacts = contactsList.map(({ _id, ...contacts }) => ({
                 id: _id,
                 ...contacts, 
             }))
             this.setState({
                contacts
             })
        })
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
                  name,
                  number,
               }

               fetch(baseUrl, {
                   method: "POST",
                   headers: {
                    'Content-Type': 'application/json;utc-8'
                   },
                   body: JSON.stringify(newContact)
               }).then(response => {
                   if(response.ok) {
                       this.fetchContactsList();
                   } else {
                    throw new Error('Failed to delete task');
                 }
               })

            //    const updateContacts = contacts.concat(newContact);
            //   this.setState({ contacts:  updateContacts })
      }
     }
     handleDelete = (id) => {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE' 
        }).then(response => {
            if(response.ok) {
                this.fetchContactsList();
            } else {
               throw new Error('Failed to delete task');
            }
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