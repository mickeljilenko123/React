import React from 'react'

const ContactsFilter = ( { filterText, onChange } ) => {

        return (
            <div>
                <h3>Find contacts by name</h3>
                <input 
                  type="text"
                  name="name"
                  value={filterText}
                  onChange={onChange}
                />
            </div>
        )
}

export default ContactsFilter