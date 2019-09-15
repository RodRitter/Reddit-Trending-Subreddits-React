/** @jsx jsx */  import { Global,css, jsx } from '@emotion/core';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Routes
import TrendingListing from '../TrendingListing/TrendingListing';
import TrendingPost from '../TrendingPost/TrendingPost';


function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Istok+Web:400,700&display=swap');
          body {
            font-family: 'Istok Web', sans-serif;
            background: #f9f9f9;
            margin: 0;
          }
        `}
      />
      <Router>
        <Route exact path="/" component={TrendingListing} />
        <Route exact path="/post" component={TrendingPost} />
      </Router>
    </div>
  );
}

export default App;
