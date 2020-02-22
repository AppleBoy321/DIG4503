import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();
    let input = document.querySelector("#name");

    fetch("http://localhost:80/api/name/" + input.value)
    .then((res) => {
      return res.json();
    }).then((processed) => {
      let reporting = document.querySelector("#reportingArea");

      if(processed.error) {
        reporting.innerHTML = processed.error;
      }else {
        reporting.innerHTML = processed.name;
      }
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.readName}>
          <input id="name" type="text" placeholder="Pokemon Name"/>
          <button>Submit</button>
        </form>
      </div>
    );
    
  }
}

export default NameSearch;