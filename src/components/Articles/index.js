import React, { Component } from 'react';
import { connect } from 'react-redux';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const articles = this.props.articles.appReducer.users;

    return (
      <div className="container">
        <h2>Find smth word in articles</h2>
        <form>
          <input type="text" onChange={this.handleChange} placeholder="input smth"/>
        </form>
        {
            articles.map(article => {
              if (article.text.indexOf(this.state.inputValue) !== -1) {
                return <div key={article.id}>{article.text}<hr /></div>
              }
            })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
    articles: state
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
