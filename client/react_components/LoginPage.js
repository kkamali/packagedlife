var React = require('react'),
    ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var Login = React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault()
    // This is another way to collect form information, rather than two-way binding via state
    var user = e.target.elements[0].value
    var password = e.target.elements[1].value
    hashHistory.push({pathname: 'message', state: { user: user }})
  },
  render: function(){
    return (
      <div className = "login-form">
          <div className = "formy-form">
              <h5>Log In</h5>
              <form onSubmit={ this.handleFormSubmit }>
                <p>Email:</p>
                <p><input type='text' size="38"/></p>
                <p>Password:</p>
                <p><input type='password' size="38"/></p>
                <input className="button" class="btn btn-primary" type='submit' value='Go!'/>
              </form>
          </div>
          <footer>
              <Link to="/create">
                  Sign Up
              </Link>
          </footer>
      </div>
    )
  }
});

module.exports = Login;
