import React, { Component } from 'react';
import '../Styles/Home.scss';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <img
            src="https://res.cloudinary.com/hwery4evq/image/upload/c_scale,w_400/v1/assets/toast"
            alt="welcome"/>
          <h1>
            Welcome!
          </h1>

          <h3>
            Oliver Space Take-Home Instructions
          </h3>
          <p>
            Your mission, if you choose to accept it, is to build out a mock of a user-focused view
            (wireframes attached below). The idea is that this would mimic a view that our Operations
            team might use to better understand Oliver's users.
          </p>
          <p>
            Please spend 90 minutes completing this task to whatever extent you can finish, but don't
            go over time. Please add notes on anything else you would have done with more time
            if you don't feel like your work is complete. Feel free to use any third-party libraries
            that you find helpful.
          </p>

          <h3>
            API
          </h3>
          <p>
            Please use the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" >
            JSONPlaceholder API</a> /users and /posts endpoints to grab User information and Post information.
            The documentation should all be there, but feel free to contact us with any questions. You can
            use the Javascript fetch API or setup something like axios to make the requests, or just mock
            out the data if you're struggling to get it from the JSONPlaceholder API.
          </p>

          <h3>
            Wireframes
          </h3>
          <a href="https://docs.google.com/drawings/d/1jOYV-zriDjOK7eG-KanQOIwcS36e8O8T9nmo2lZJLDI/edit?usp=sharing"
          target="_blank" rel="noopener noreferrer" >
            Users View
          </a>
          <br />
          <a href="https://docs.google.com/drawings/d/1ZqQmvzBSB7hq1VJmXpH8ybI3JREnp-KHkC27fWZKN-c/edit?usp=sharing"
          target="_blank" rel="noopener noreferrer" >Individual User View</a>

          <h4>
            Best of luck! Feel free to email <a href="mailto:caroline@oliver.space">caroline@oliver.space</a>
            or text (203) 434 - 2075 if you have any questions while you're completing the exercise. I'm
            happy to help :)
          </h4>
        </div>
      );
  }
}

export default Home;
