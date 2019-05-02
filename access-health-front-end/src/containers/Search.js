import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import ProgressBar from '../components/home/ProgressBar'


class Search extends Component {

  state = {
  	value: '',
  	suggestions: [],
  	campaign: {}
  }

  escapeRegexCharacters = (str) => {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

  getSuggestions = (value) => {
	  const escapedValue = this.escapeRegexCharacters(value.trim());

	  if (escapedValue === '') {
	    return [];
	  }

	  const regex = new RegExp('\\b' + escapedValue, 'i');
	  
	  // this.setState({
	  // 	campaigns: this.props.campaigns.campaigns.filter(campaign => regex.test(this.getSuggestionValue(campaign)))
	  // })

	  return this.props.campaigns.campaigns.filter(campaign => regex.test(this.getSuggestionValue(campaign)));
	}

  getSuggestionValue = (suggestion) => {
	  return `${suggestion.title}`;
	}

  renderSuggestion = (suggestion, { query }) => {
	  const suggestionText = `${suggestion.title}`;
	  const matches = AutosuggestHighlightMatch(suggestionText, query);
	  const parts = AutosuggestHighlightParse(suggestionText, matches);

	  let urlEnding = suggestion.title.split(' ').join('-').toLowerCase()

	  return (
	    <span className={'suggestion-content ' + suggestion.twitter}>
	      <span className="name">
	        {
	          parts.map((part, index) => {
	            const className = part.highlight ? 'highlight' : null;
	            return (
	              <React.Fragment>
		            <a href={`/browse/${urlEnding}`} key={suggestion.id}>
		              <span className={className} key={index}>{part.text}</span>
		            </a>
		          </React.Fragment>
	            );
	          })
	        }
	      </span>
	    </span>
	  );
	}

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  
  render() {
  	const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search by campaign name",
      value,
      onChange: this.onChange
    };

  	return(
  	  <Autosuggest 
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} />
	)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Search)