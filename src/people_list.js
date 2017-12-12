import React from 'react';

import Person from './person'
class PeopleList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  
  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    let filteredPeople = this.props.people.filter(
      (person) => {
        var fullName = person.firstName.toLowerCase() + person.lastName.toLowerCase()
        return fullName.indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="people-list">
       <div className="search">
        <input type="text" 
          className="search_input"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Enter name or lastname"
        />
       </div>
        <ul className="list">
          {filteredPeople.map((person)=> {
            return <Person person={person} />
          })}
       </ul>
      </div>

    )
  }
}

export default PeopleList;