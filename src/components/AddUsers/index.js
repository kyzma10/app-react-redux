import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddUser extends Component {
  render() {
    const user = this.props.users.appReducer.users;
    return (
      <div>
        <div className="card">
        <div className="card-header">AddUser</div>
          <div className="card-body">
            {user.map((u) => {return <div key={u.id}>@{u.name} <b>email:</b> {u.email}
            <hr />
            </div>})}
            <p className="card-text"><b>All Users:</b> {user.length}</p>
            <button className="btn btn-primary float-right" onClick={this.props.addUser}>
              Add User
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    users: state
});
const mapDispatchToProps = dispatch => ({
      addUser: () => dispatch({type: 'NEW_USER'})
});

export default connect (mapStateToProps, mapDispatchToProps)(AddUser);
