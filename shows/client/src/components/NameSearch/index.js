import React from 'react';

class NameSearch extends React.Component {

    nameSearch() {

        let namesearch = document.querySelector("#namesearch");

        fetch("http://localhost:80/shows/name/" + namesearch.value )
        .then((res) => {
            res.json();
        })
        .then((processed) => {
            let namereport = document.querySelector("#namereport");

            if(processed.error) {
                namereport.innerHTML = processed.error;
            } else {
                namereport.innerHTML = processed.name;
            }
        });
    }

    render() {
        return (
            <div>
                <input id="namesearch" type="text" onKeyDown={this.nameSearch} />
                <div id="namereport"></div>
            </div>
        );
    }
}

export default NameSearch;