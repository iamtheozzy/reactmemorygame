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
    highScore: 0
  };

  shuffleCards = () => {
    const array = this.state.friends;
    let i = array.length;
    let j = 0;
    let temporary;
    while(i--) {
      j = Math.floor(Math.random() * (i + 1));
      temporary = array[i];
      array[i] = array[j];
      array[j] = temporary;
    }
    return this.setState({friends:array});
  }


  onClickHandler = id => {
    // matches id of image clicked to friends array
    let found = this.state.friends.find(function(friend){
      return friend.id === id;
    })
    if(found.clicked){
      if(this.state.count > this.state.highScore){
        this.setState({highScore: this.state.count})
      }
      this.state.friends.forEach(function(friend){
        friend.clicked = false;
      });
      this.setState({count:0});
    } else {
      found.clicked = true;
      this.shuffleCards();
      this.setState({count: this.state.count + 1});
    }
  }


  render() {
    return (
      <div>
        <NavBar count={this.state.count} highScore={this.state.highScore} />
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
                onClickHandler={this.onClickHandler}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
