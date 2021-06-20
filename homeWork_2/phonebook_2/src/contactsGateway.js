const baseUrl = 'https://crudcrud.com/api/1dda8a0fb7904ffb99c78763d76ec3de/contacts';

export const createContact = contactData => {
    fetch(baseUrl, {
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