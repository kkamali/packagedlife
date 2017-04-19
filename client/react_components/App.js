var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute,
    Layout = require("./Layout")
    CreateUser = require('./CreateUser'),
    Message = require('./CreateMessage'),
    LoginPage = require('./LoginPage'),
    NoPageFound = require('./NoPageFound'),
    AddStudents = require('./AddStudents');


var App = React.createClass({
    render: function(){
      return (
          <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={LoginPage}/>
                <Route path='/create' component={CreateUser} />
                <Route path='/message' component={Message} />
                <Route path='/add' component={AddStudents} />
                <Route path="*" component={NoPageFound} />
            </Route>
          </Router>
        )
    }
});

module.exports = App;
