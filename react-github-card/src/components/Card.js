import React from "react"

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {console.log(this.props.person)
    return (
      <div className="card">
        <img src={`${this.props.person.avatar_url}`} alt="" />
        <div className="card-info"></div>
        <h3 className="name">{`${this.props.person.name}`}
          <p className="username">{`${this.props.person.login}`}</p>
          <p className="location">{`Location: ${this.props.person.location}`}</p>
          <p className="profile"><a href="">{`Profile: ${this.props.person.html_url}`}</a></p>
          <p>{`Followers: ${this.props.person.followers}`}</p>
          <p>{`Following: ${this.props.person.following}`}</p>
          <p>{`Bio: ${this.props.person.bio}`}</p>
        </h3>
      </div>
    );
  };
};

export default Card;