import React, { Component } from "react";
import "./App.css"; // Import app-specific styling
import ProfileCard from "./components/ProfileCard"; // Import ProfileCard component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer and artist.",
        imgSrc: "https://example.com/john.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <ProfileCard
            person={this.state.person}
            mountedTime={this.state.mountedTime}
          />
        )}
      </div>
    );
  }
}

export default App;
