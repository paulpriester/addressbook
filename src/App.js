import React from 'react';
import ReactDOM from 'react-dom';
import AddPerson from './add_people';
import Person from './person';
import PeopleList from './people_list';


let people = [
  {firstName: "Alex", lastName: "Smith", age: 50, phone: "333 4567111", address: "San Francisco"},
  {firstName: "Jane", lastName: "Doe", age: 22, phone: "333 45667933", address: "Dallas, Texas" },
  {firstName: "Kyrie", lastName: "Irving", age: 45, phone: "333 33446776", address: "Bronx, NewYork"}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: people
    }
  }

 addPerson(person) {
    let people = this.state.people;

    people.push(person);

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <PeopleList people={this.state.people} />
        <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
      </div>
    )
  }
}


 ReactDOM.render(<App />, document.getElementById('root'))

export default App;