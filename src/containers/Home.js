import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      qs: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const qs = await this.qs();
      this.setState({ qs });
    } catch (e) {
      console.log(e);
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  qs() {
    return API.get("q", "/q");
  }


  renderQsList(qs) {
  return [{}].concat(qs).map(
    (q, i) =>
      i !== 0
        ? <LinkContainer
            key={q.qId}
            to={`/q/${q.qId}`}
          >
            <ListGroupItem header={q.content.trim().split("\n")[0]}>
              {"Created: " + new Date(q.createdAt).toLocaleString()}
            </ListGroupItem>
          </LinkContainer>
        : <LinkContainer
            key="new"
            to="/qs/new"
          >
            <ListGroupItem>
              <h4>
                <b>{"\uFF0B"}</b> Create a new Q
              </h4>
            </ListGroupItem>
          </LinkContainer>
  );
}


  renderLander() {
    return (
      <div className="lander">
        <h1>Q</h1>
        <p>a Q app</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }


  renderQs() {
    return (
      <div className="qs">
        <PageHeader>Your Q</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderQsList(this.state.qs)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderQs() : this.renderLander()}
      </div>
    );
  }}
