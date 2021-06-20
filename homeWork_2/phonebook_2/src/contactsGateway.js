const baseUrl = 'https://crudcrud.com/api/1dda8a0fb7904ffb99c78763d76ec3de/contacts';

export const createContact = contactData => {
   return fetch(baseUrl, {
        method: "POST",
        headers: {
         'Content-Type': 'application/json;utc-8'
        },
        body: JSON.stringify(contactData)
    }).then(response => {
        if(!response.ok) {
            throw new Error('Failed to delete task');
        } 
    })
}

export const fetchContactsList = () => {
     return fetch(baseUrl).then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(contactsList => {
            return contactsList.map(({ _id, ...contacts }) => ({
                 id: _id,
                 ...contacts, 
             }))
        })
    }
export const deleteContact = (contactId) => {
    return fetch(`${baseUrl}/${contactId}`, {
        method: 'DELETE' 
    }).then(response => {
        if(!response.ok) {
            throw new Error('Failed to delete contact');
        } 
    })
}    
