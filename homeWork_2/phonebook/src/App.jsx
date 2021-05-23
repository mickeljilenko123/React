import React , { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';




class App extends Component {
   state = {
      contacts: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
   }
   
   onCreate = ({ name, number }) => {
      const { contacts } = this.state;
      if (contacts
         .find(contact => 
            contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()))
            {
               alert("Sorry");
            } else {
               const newContact = {
                  id: Math.random(),
                  name,
                  number,
               }
               const updateContacts = contacts.concat(newContact);
              this.setState({ contacts:  updateContacts })
      }
      
                
   }
   onDelete = (id) => {
   const deleleContact = this.state.contacts.filter(contact =>
      contact.id !== id);
      this.setState({ contacts: deleleContact })
   }
   
  
    

      render() { 

         return(
            <div>
               <h1>Phonebook</h1>
               <ContactForm onCreate={this.onCreate} testContacts={this.state.contacts} />
               <h2>Contacts</h2>
               <ContactsList testContacts={this.state.contacts} onDelete={this.onDelete}/>
               
            </div>
         )
      }
}
export default App;