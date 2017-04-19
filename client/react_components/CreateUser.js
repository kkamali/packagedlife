var React = require('react'),
    ReactRouter = require('react-router')
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var CreateUser = React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault()
    var newUser = e.target.elements[0].value
    var password = e.target.elements[1].value
    hashHistory.push({pathname: 'message'})
  },
  render: function(){
    return (
        <div className="signup-form">
            <div className="formy-form">
                <h5>Sign up in seconds</h5>
                <form onSubmit={ this.handleFormSubmit }>
                    <p>
                        <p>I am a...</p>
                        <select className="selectpicker">
                            <option>Teacher</option>
                            <option>Parent</option>
                            <option>Student</option>
                        </select>
                    </p>
                    <p>
                        <input type="text" placeholder="First Name"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Last Name"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Phone Number"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Email"/>
                    </p>
                    <p>
                        <input type="password" placeholder="Password"/>
                    </p>
                    <p>
                        <input type="password" placeholder="Re-type Password"/>
                    </p>
                    <p>
                        <input type='submit' value='Register me!'/>
                    </p>
                </form>
            </div>
            <footer>
                <Link to="/">
                    Login In
                </Link>
            </footer>
        </div>
    )
  }
});

module.exports = CreateUser;
