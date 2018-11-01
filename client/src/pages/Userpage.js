import React, { Component, Fragment } from "react";
import API from "../utils/API";
import { Icon, Row, Col, Button, Container, Input } from "react-materialize";
import Heading from "../construct-components/Heading";
import Textbox from "../construct-components/Textbox";
import Divider from "../construct-components/Divider";
import Image from "../construct-components/Image";
import { setSeconds } from "date-fns";
import axios from "axios";

class Search extends Component {
  state = {
    // breeds: [],
    // breed: "",
    // results: []
    selectedUser: "",
    foundUser: false,
    headMessage: "No Page Found",
    rows: [],
    backgroundColor: ""
  };

  componentDidMount = () => {
    let userID = this.props.match.params.userID;
    let pageName = this.props.match.params.pageName;
    console.log({
      functionName: "component did mount",
      userId: this.props.match.params.userID,
      pageName: this.props.match.params.pageName
    });
    // const userList = API.routeEmails();
    // userList.then(result => {
    //   // console.log(result.data);
    //   result.data.map(user => {
    //     // console.log(user.email);
    //     if (user.email === this.props.match.params.user) {
    //       this.setState({
    //         selectedUser: user.email,
    //         foundUser: true,
    //         headMessage: "Welcome to " + user.email + "'s page"
    //       });
    //     }
    //   });
    // });

    axios
      .get(
        "/api/page/" +
          userID +
          "/" +
          pageName +
          "/" +
          Math.round(Math.random() * 1000000)
      )
      .then(data => {
        console.log({
          functionName: "axios call",
          data: data
        });
        this.setState({
          rows: data.data.rows,
          backgroundColor: data.data.backgroundColor
        });
      });

    // breedList.then(result => {
    //   let list = result.data.message;
    //   console.log(list);
    //   this.setState({
    //     breeds: list
    //   });
    // });
  };

  render() {
    // let rows = [
    //   {
    //     components: [
    //       {
    //         BGcolor: "",
    //         color: "#000000",
    //         content: "This is a Heading",
    //         font: "times",
    //         size: "60px",
    //         status: "heading",
    //         thickness: "",
    //         url: "",
    //         width: 12
    //       }
    //     ]
    //   },
    //   {
    //     components: [
    //       {
    //         BGcolor: "",
    //         color: "#000000",
    //         content: "this is a textbox with some text in it",
    //         font: "times",
    //         size: "18px",
    //         status: "textbox",
    //         thickness: "",
    //         url: "",
    //         width: 6
    //       },
    //       {
    //         BGcolor: "",
    //         color: "#000000",
    //         content: "this is a textbox with some other text in it",
    //         font: "times",
    //         size: "18px",
    //         status: "textbox",
    //         thickness: "",
    //         url: "",
    //         width: 6
    //       }
    //     ]
    //   },
    //   {
    //     components: [
    //       {
    //         BGcolor: "",
    //         color: "",
    //         content: "",
    //         font: "",
    //         size: "",
    //         status: "image",
    //         thickness: "",
    //         url: "https://www.tugthr.com//uploads/60_picture3.jpg",
    //         width: 6
    //       },
    //       {
    //         BGcolor: "",
    //         color: "",
    //         content: "",
    //         font: "",
    //         size: "",
    //         status: "gif",
    //         thickness: "",
    //         url:
    //           "https://media3.giphy.com/media/OAthVeXHlBnFK/giphy.gif?cid=e1bb72ff5bd898185a515464590fac3a",
    //         width: 6
    //       }
    //     ]
    //   },
    //   {
    //     components: [
    //       {
    //         BGcolor: "",
    //         color: "#808080",
    //         content: "",
    //         font: "",
    //         size: "",
    //         status: "divider",
    //         thickness: "2px",
    //         url: "",
    //         width: 12
    //       }
    //     ]
    //   },
    //   {
    //     components: [
    //       {
    //         BGcolor: "#bf4040",
    //         color: "#000000",
    //         content: "This is a Heading",
    //         font: "times",
    //         size: "60px",
    //         status: "heading",
    //         thickness: "",
    //         url: "",
    //         width: 12
    //       }
    //     ]
    //   }
    // ];
    if (typeof this.state.rows === "undefined") {
      return <Container />;
    } else {
      return (
        <Container>
          {this.state.rows.map((row, index) => {
            return (
              <Row key={index}>
                {row.components.map((component, i) => {
                  if (component.status === "heading") {
                    return (
                      <Heading
                        key={i}
                        headingContent={component.content}
                        headingColor={component.color}
                        headingSize={component.size}
                        headingFont={component.font}
                        backgroundColor={component.BGcolor}
                      />
                    );
                  } else if (component.status === "textbox") {
                    return (
                      <Textbox
                        key={i}
                        textContent={component.content}
                        textColor={component.color}
                        textSize={component.size}
                        textFont={component.font}
                        textboxWidth={component.width}
                        backgroundColor={component.BGcolor}
                      />
                    );
                  } else if (component.status === "divider") {
                    return (
                      <Divider
                        key={i}
                        color={component.color}
                        thickness={component.thickness}
                      />
                    );
                  } else if (component.status === "image") {
                    return (
                      <Image
                        imageWidth={component.width}
                        key={i}
                        imageURL={component.url}
                      />
                    );
                  } else if (component.status === "gif") {
                    return (
                      <Image
                        imageWidth={component.width}
                        key={i}
                        imageURL={component.url}
                      />
                    );
                  }
                })}
              </Row>
            );
          })}
          <div
            style={{
              backgroundColor: this.state.backgroundColor,
              height: "100vh",
              width: "100vw",
              position: "fixed",
              top: 0,
              left: 0,
              // marginTop: "-22px",
              zIndex: "-100"
            }}
          />
        </Container>
      );
    }
  }
}

export default Search;
