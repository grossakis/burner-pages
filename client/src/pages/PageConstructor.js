import React, { Component, Fragment } from 'react';
// import './Custom.css';
import FullBox from '../component-boxes/FullBox';
import Heading from '../construct-components/Heading';
import API from '../utils/API';

class PageConstructor extends Component {
  state = {
<<<<<<< HEAD
    rows: []
=======
    box1: {
      status: 'empty'
    }
>>>>>>> 88fb5f85c85ed51e5f5efdcdbc2e341eda18966f
  };

  // componentDidMount = () => {
  //   this.setState({
  //     rows: {
  //       row1: {
  //         status: "empty"
  //       }
  //     }
  //   });
  // };

  componentWillMount = () => {
    let rows = this.state.rows;
    let newElement = {
      status: "heading",
      content: "This is a Heading",
      color: "",
      size: "",
      font: ""
    };
    rows.push(newElement);
    console.log(rows);
    this.setState({
<<<<<<< HEAD
      // test: "test"
      rows: rows
=======
      box1: {
        status: 'heading',
        content: 'This is a Heading',
        color: '',
        size: '',
        font: ''
      }
>>>>>>> 88fb5f85c85ed51e5f5efdcdbc2e341eda18966f
    });
  };

  addElement = () => {
    console.log("hulloSAM!");
  };

  render() {
<<<<<<< HEAD
    console.log(this.state.rows);
    let rows = this.state.rows;
    // let element1;
    // if (this.state.rows === []) {
    //   element1 = <FullBox addElement={this.addElement} />;
    // } else if (this.rows[0].status === "heading") {
    //   element1 = (
    //     <Heading
    //       headingColor={this.state.box1.color}
    //       headingSize={this.state.box1.size}
    //       headingFont={this.state.box1.font}
    //       headingContent={this.state.box1.status}
    //     />
    //   );
    // }

=======
    let element1;
    if (this.state.box1.status === 'empty') {
      element1 = <FullBox addElement={this.addElement} />;
    } else if (this.state.box1.status === 'heading') {
      element1 = (
        <Heading
          headingColor={this.state.box1.color}
          headingSize={this.state.box1.size}
          headingFont={this.state.box1.font}
          headingContent={this.state.box1.status}
        />
      );
    }
>>>>>>> 88fb5f85c85ed51e5f5efdcdbc2e341eda18966f
    return (
      <div className="container">
        <div className="row">
          {rows.map(type => {
            if (type.status === "heading") {
              return <Heading headingContent={type.content} />;
            }
          })}
        </div>
        <button onClick={this.addElement}>add element</button>
      </div>
    );
  }
}

export default PageConstructor;
