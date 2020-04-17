class RandomPokemon extends React.Component {
    readRandom(event) {
      event.preventDefault();
  
      fetch("/api/pokemon/random")
        .then(res => res.json())
        .then(processed => {
          let reporting = document.querySelector("#reportingArea");
  
          reporting.innerHTML = `
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Types</th>
              </tr>
              <tr>
                <td>${processed.id}</td>
                <td>${processed.name}</td>
                <td>${processed.typeList.map(type => { return `<span>${type}</span>` })}</td>
              </tr>
            </table>
          `;
        }
      )
    }
      
    render() {
      return(
        <div>
          <form onSubmit={this.readRandom}>
            <button>Randomize</button>
          </form>
        </div>
      );
    }
  }
  
  export default RandomPokemon;