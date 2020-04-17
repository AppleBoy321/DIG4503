class PokemonList extends React.Component {
    read(event) {
      event.preventDefault();
  
      fetch("/api/pokemon/pokeList")
        .then(res => {
          return res.json();
        })
        .then(processed => {
          let reporting = document.querySelector("#reportingArea");
          let innerHtmlTableHead = `
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Types</th>
              </tr>`;
  
          let innerHtml;
  
          for (let i = 0; i < processed.length; i++) {
            let processedItem = processed[i];
  
            if (!innerHtml) {
              innerHtml = `
              <tr>
                <td>${processedItem.id}</td>
                <td>${processedItem.name}</td>
                <td>${processedItem.typeList.map(type => { return `<span>${type}</span>` })}</td>
              </tr>
            `;
            } else {
            innerHtml += `
              <tr>
                <td>${processedItem.id}</td>
                <td>${processedItem.name}</td>
                <td>${processedItem.typeList.map(type => { return `<span>${type}</span>` })}</td>
              </tr>
            `;
            }
  
          reporting.innerHTML = innerHtmlTableHead + innerHtml + "</table>";
        }
      })
    }
      
    render() {
      return(
        <div>
          <form onSubmit={this.read}>
            <button>Get Pokemon List</button>
          </form>
        </div>
      );
    }
  }
  
  export default PokemonList;