import React from 'react';
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import 'styles/app.css';
import 'styles/content.css';
import '../styles/footer.less';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

            <h1>Hello World</h1>
            <Content />
            <Footer />
      </div>
    );
  }
}

