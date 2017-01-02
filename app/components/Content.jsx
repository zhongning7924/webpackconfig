import React from 'react';

import img from '../images/1.png';
export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let a= [1,2,3]
    let b = {a:1,b:2};
    let c=Object.keys(b);
    return (
      <div className="content">
        <p>{c.map(index=>(index))}</p>
        <div>
            <img src={img}/>
        </div>  
      </div>
    );
  }
}