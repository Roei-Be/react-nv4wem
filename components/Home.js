import React from 'react';

function Home() {
  return (
    <React.Fragment>
      <div id="search_input_wrapper">
        <h1>search input</h1>
      </div>
      <div id="main_wrapper">
        <div id="filters_tags_wrapper">
          <h1>tags</h1>
        </div>
        <div id="search_results_wrapper">
          <h1>result</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
