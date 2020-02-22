import React from 'react';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';

function App() {
  return (
    <div>
      <IdSearch />
      <NameSearch />
      <h2>Reporting</h2>
      <div id="reportingArea"></div>
    </div>
  );
}

export default App;
