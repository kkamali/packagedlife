var React = require('react')
var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button
var Collapse = ReactBootstrap.Collapse
var ReactDOM = require('react-dom');

var Message = React.createClass({
  getInitialState() {
      return {
          events: false,
          attachments: false,
          photo_video: false,
          due_date: false,
          response: false,
          assignment: false,
      };
  },
  render: function(){
    return (
      <div className="create-message">
        <h4>Create Message</h4>
        <div className="message-form">
            <form>
                <input type="text" placeholder="Subject"/>
                <textarea rows="4" cols="50" placeholder="Message"/>
                <input type="date" />
                <input type="checkbox"/> repeats
                <input type="checkbox"/> important
                <div className="row">
                    <div className="col">
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ events: !this.state.events })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Event</h6>
                                <Collapse in={this.state.events}>
                                    <div className="collapsed-section">
                                        <input type="checkbox"/> Yes
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ attachments: !this.state.attachments })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Attachment</h6>
                                <Collapse in={this.state.attachments}>
                                    <div className="collapsed-section">
                                        <input type="text" placeholder="File Name"/>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ photo_video: !this.state.photo_video })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Photo/Video</h6>
                                <Collapse in={this.state.photo_video}>
                                    <div className="collapsed-section">
                                        <input type="text" placeholder="File Name"/>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ due_date: !this.state.due_date })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Due Date</h6>
                                <Collapse in={this.state.due_date}>
                                    <div className="collapsed-section">
                                        <input type="text" placeholder="File Name"/>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ due_date: !this.state.due_date })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Response Needed</h6>
                                <Collapse in={this.state.due_date}>
                                    <div className="collapsed-section">
                                        <input type="checkbox"/> Yes
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                        <div className="collapsible">
                            <div className="clickable">
                                <Button className="plus-button" onClick={ ()=> this.setState({ due_date: !this.state.due_date })}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </Button>
                                <h6>Assignment</h6>
                                <Collapse in={this.state.due_date}>
                                    <div className="collapsed-section">
                                        <input type="checkbox"/> Yes
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Select Audience"/>
                <input type="reset" value="Cancel"/>
            </form>
        </div>
      </div>
    )
  }
})

module.exports = Message;
