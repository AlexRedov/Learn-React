import React from 'react';
import './filterli.css';

const items = ['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum']

class FilterLi extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
    	filter: ''
    }
  }
  
  onChange = event => {
  	this.setState({
    	filter: event.target.value
    })
  }

  render() {
    const arrayToShow = items.filter(item => item.startsWith(this.state.filter));
  	
    return (
      <div className="filtered-list">
        <input className="filtered-list__input" onChange = {event => this.onChange(event)}></input>
        
        { arrayToShow.length > 0
        	? <ul className="filtered-list__list">
            {arrayToShow.map( (item, ind) => (
              <li key={ind} className="filtered-list__item" >{item}</li>
            ))}
          </ul>
          : <div className="filtered-list__note">There is no such items</div>
        }
      </div>
    )
  }
}

export default FilterLi;
