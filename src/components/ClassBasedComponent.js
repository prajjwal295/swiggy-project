import React from 'react'

class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count:0,
            count2:0
        }
    }
    // constructor is being used in making useState Function

    render()
    {
        return (
          <>
            <h1>Class Baased COmponents</h1>
            <h2>Name : {this.props.name}</h2>
            {/* Thiss is method to aaccess props inside a class based component */}
            <h3>count : {this.state.count}</h3>

            {/* this is hoow we manipultee our dataa in cbc */}
            <button
              onClick={() => {
                this.setState({
                   count: 1
                });
              }}
            >
              SetCount
            </button>
          </>
        );
    }
}

export default Profile;