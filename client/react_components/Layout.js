var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Layout = React.createClass({
    render: function() {
        return (
            <div className="app-container">
                <header className = 'top-bar'>
                    <img src="../static/img/logo.png"></img>
                    <Link to="/about">
                        How It Works
                    </Link>
                    <Link to="/support">
                        Support
                    </Link>
                    <Link to="/blog">
                        Blog
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
            </div>
        );
    }
});

module.exports = Layout;
