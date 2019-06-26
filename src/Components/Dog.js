// stateful comp
import React, { Component } from 'react'
export default class Dog extends Component {

    // need to add some state to dogs so you can edit this is for tracking your editing so you can track only one dog you need this in dog aka creat constructor
    // to use props inside you need to pass in props
    constructor(props) {
        super();
        this.state = {
            editing: false,
            rating: props.dog.rating

        };
        // Bind function (used in button)
    }
    flipEdit = () => {
        // switching editing on and off 
        this.setState({ editing: !this.state.editing });
        // grabbing rating from above and grabbing id from parent
        this.props.editDogRating(this.state.rating, this.props.dogs.id);

    };

    saveChanges = () => {
        this.flipEdit();
    }

    // handle the change e is handling the event
    handleChange = e => {
        let { name, value } = e.target
        // this is the input target or any target when you reuse this
        // puting [name] allows you to reuse this value for w.e
        this.setState({ [name]: value })


    }


    render() {
        // pull this off parent and allow you to use it aka props
        let { dog } = this.props
        //pull off editing and rating
        let { editing, rating } = this.state
        return (
            // basic html tag with rating
            <div>
                <img src={dog.image} />
                {editing
                    // allow editing of the rating
                    ? ( // if true
                        <input value={rating} onChange={this.handleChange} name="rating" />
                    ) : ( // if not
                        <p>Rating: {dog.rating} </p>
                    )}
                {/* checking editing for rendering */}
                {editing
                    ? (<button onClick={this.saveChanges}>save changes</button>)
                    : 
                      (<button onClick={this.flipEdit}> Edit rating </button>)}
                    <button onClick={(e) => this.PaymentResponse.deleteDog(dog.id)}> Delete dog</button>
            </div>
        );
    }
}

