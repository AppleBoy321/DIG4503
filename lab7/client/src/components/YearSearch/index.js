import React from 'react';

class YearSearch extends React.Component {

    yearSearchFormSubmit = () => {

        // Get the input's value
        let year = document.querySelector('#yearSearch').value;

        // Test if year is an empty string
        // If so, change it to a value
        if(year.length === 0) {
            year = "0";
        }

        // Look for movies based on the year
        fetch("http://localhost:80/movies/year/" + year)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Movies by their Year:</h2>
                <input 
                    type="text" 
                    id="yearSearch" 
                    onKeyUp={this.yearSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default YearSearch;