import React from 'react';  // Will need to do this in every component file

// Create ES6 class
class StorePicker extends React.Component {
    // Every component requires at least one method: the Render method
    render() {
        return (
            <form className="store-selector">
                { /* This is the funcky JSK comment syntax */ }
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;