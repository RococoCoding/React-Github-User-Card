import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import axios from "axios";
import React from "react";
//avatar_url: "https://avatars1.githubusercontent.com/u/63833718?v=4"
// bio: "Full-time web dev student at Lamba School!"
// blog: ""
// company: null
// created_at: "2020-04-17T04:17:09Z"
// email: null
// events_url: "https://api.github.com/users/RococoCoding/events{/privacy}"
// followers: 1
// followers_url: "https://api.github.com/users/RococoCoding/followers"
// following: 2
// following_url: "https://api.github.com/users/RococoCoding/following{/other_user}"
// gists_url: "https://api.github.com/users/RococoCoding/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/RococoCoding"
// id: 63833718
// location: "Brooklyn, NY"
// login: "RococoCoding"
// name: "Alice Chang"
// node_id: "MDQ6VXNlcjYzODMzNzE4"
// organizations_url: "https://api.github.com/users/RococoCoding/orgs"
// public_gists: 0
// public_repos: 38
// received_events_url: "https://api.github.com/users/RococoCoding/received_events"
// repos_url: "https://api.github.com/users/RococoCoding/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/RococoCoding/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/RococoCoding/subscriptions"
// twitter_username: "rocococode"
// type: "User"
// updated_at: "2020-10-24T06:27:15Z"
// url: "https://api.github.com/users/RococoCoding"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: [],
    };
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/RococoCoding`)
      .then(res => {
        this.setState({...this.state, user: res.data});
        return res.data.followers_url;
      })
      .then(followers_url => {
        axios.get(`${followers_url}`) //returns array with followers
          .then(res => {
            res.data.forEach(item => { 
              axios.get(`${item.url}`) // gets each followers profile
                .then(res => {
                  let array = [];
                  array.push(res.data);
                  this.setState({...this.state, followers:array});
                })
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  
  render() {
    return (
      <div className="App">
        <h2>Selected User</h2>
          <Card person={this.state.user}/>
        <h2>Followers:</h2>
          {this.state.followers.map((item, idx) => {
            // console.log(item)
            return (
              <Card key={idx} person={item}/>
            )
          })}
      </div>
    );
  };
};

export default App;
