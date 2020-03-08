import React from 'react';

class TableSelection extends React.Component {

    selectMovie = () => {
        this.props.callback(this.props.year);
    }


    render() {
        return (
            <tr key={this.props.index}>
                <td><input onClick={this.selectMovie} /></td>
                <td>{this.props.year}</td>
                <td>{this.props.title}</td>
            </tr>
        );
    }
}

export default TableSelection;
