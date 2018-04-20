import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";


class App extends Component {
  state = {
    friends: friends,
    count: 0,
    topCount: 0
  }



  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
        <h1>Click a card to earn points</h1>
        <h2>If you click the same image twice you LOSE!</h2>
        </Jumbotron>
        <Wrapper>
          {this.state.friends.map((friend, key) => (
              <FriendCard
                id={friend.id}
                key={key}
                image={friend.image}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
