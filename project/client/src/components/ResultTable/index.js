import React from 'react';
import TableSelection from '../TableSelection';

class ResultTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "selected": []
        };

    }

    selectedResults = (selected) => {

        let original = [];

        console.log(this.state.selected.includes(selected));

        // Is the movie in the list?
        if(this.state.selected.includes(selected)) {

            // Return a new array where it excludes any entries with the same name
            original = this.state.selected.filter((entry) => {return entry !== selected });

        } else {

            // It's not, so add the new entry
            let original = this.state.selected;
            original.push(selected);

            // Update the state (and call render() )
            this.setState({
                "selected": original
            });

            console.log(this.state.selected);

        }

       
    }

    clearSelected = (event) => {

        // Find all checkboxes 
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        if(event.target.hasAttribute("checked")) {

            for(let checkbox of checkboxes) {
                checkbox.removeAttribute("checked");
            }

        } else {

            for(let checkbox of checkboxes) {
                checkbox.setAttribute("checked", "");
            }

            this.setState({
                "selected": []
            });
        }
    }


    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" onClick={this.clearSelected} />Selection</th>
                            <th>Title</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.table.map((entry, index) => {
                                return (
                                    <TableSelection key={index} year={entry.year} year={entry.year} callback={this.selectedResults} />
                                )
                            })
                        }
                    </tbody>
                </table>
                <h2>Selected Movies</h2>
                {
                    this.state.selected.map((entry, index) => {
                        console.log("map", entry);
                        return (
                            <p key={index}>{entry}</p>
                        )
                    })
                }
            </div>

        );
    }

}

export default ResultTable;
