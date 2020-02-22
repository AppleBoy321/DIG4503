import React from "react";

class IdSearch extends React.Component {
  readID(event) {
    event.preventDefault();
    let input = document.querySelector("#ID");

    fetch("http://localhost:80/api/id/" + input.value)
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
        <form onSubmit={this.readID}>
          <input id="ID" type="text" placeholder="Pokemon ID"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default IdSearch;