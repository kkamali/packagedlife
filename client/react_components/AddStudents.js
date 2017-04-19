var React = require('react'),
    ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var AddStudents = React.createClass({
    handleFormSubmit: function(e) {
        e.preventDefault();
        var students = e.target.map;
        console.log(students);
    },
    render: function() {
        return (
            <div className="addstudents-form">
                <h5> Enter Students </h5>
                
            </div>
        )
    }

});

module.exports = AddStudents;
