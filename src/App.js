import React, { Component } from 'react';
import './App.css';
import Dog from './Components/Dog'

// APP.js is where you will put in all of your data so you can send them to your child data this is so the data cannot be changed by children
// bring in axios to mount stuff
import axios from 'axios';
class App extends Component {
  // convert to state component aka convert class and change import to component
  constructor() {
    super();
    this.state = {
      favoriteDogs: []
    };
  }
  // add component and test if it is working through .then and .catch
  componentDidMount() {
    // start axios
    axios
      .get(`/api/dogs`)
      .then(res => {
        console.log('res', res)
        // need to set it to the data where the dog array lives
        this.setState({ favoriteDogs: res.data })

      })
      .catch(err => console.log('err', err))
  }

  // delete dog you know it needs an id
  deleteDog = id => {
    axios
      .delete(`/api/dogs/${id}`)
      .then(res => {
        console.log('res', res);
        this.setState({ favoriteDogs: res.data })
          ;

      })
  };

  editDogRating = (rating, id) => {
    axios
      // grab newRating off of controller
      .put(`/api/dogs/${id}?newRating${rating}`)
      .then(res => {
        this.setState = ({ favoriteDogs: res.data })
      })
  };

  render() {
    //show the information from your dog
    return (
      <div className="App">
        {/* looping through every item in the array and returning information key
        which is needed for when you map so it stays unique. */}
        {this.state.favoriteDogs.map((dog, i) => {
          return <Dog key={dog.id}
            dog={dog}
            deleteDog={this.deleteDog}
            editDogRating={this.editDogRating} />;
          // let dog be accessed dog is coming from .map(dog =>)
        })}
        {/* delete dog and you need to evoke a function */}
      </div>
    );
  }
}
export default App;
