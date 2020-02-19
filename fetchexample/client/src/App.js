import React from 'react';
import ScoreSearch from './components/ScoreSearch';
import NameSearch from './components/NameSearch';
import ReportingArea from './components/ReportingArea';

class App extends React.Component {
  render() {
    return(
      <div>
        <ScoreSearch />
        <NameSearch />
        <ReportingArea />
      </div>
    );
  }
}

export default App;
