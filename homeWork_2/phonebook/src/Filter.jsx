import React from 'react'

const Filter = ( { filterText, onChange } ) => {

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

export default Filter
