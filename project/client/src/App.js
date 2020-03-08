import React from 'react';
import YearSearch from './components/YearSearch';
import ResultTable from './components/ResultTable';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  exampleFunction = (processed) => {
    this.setState({
      "table": processed
    });
  }

  render() {

    return (
      <div>
        <h2>Year Search</h2>
        <YearSearch callback={this.exampleFunction} />
        <ResultTable table={this.state.table} />
      </div>
    );

  }

  
}

export default App;