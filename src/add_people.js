import React from 'react';

class AddPerson extends React.Component {

  componentWillMount() {
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      address: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPerson(this.state)
  }

  handleChange(data) {
    let state = this.state;
    let name = data.target.name;
    state[name] = data.target.value;
    this.setState(state);
  }

  render() {

    return (
     <div className="person-add">
      <form className="add-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-field">
          <label>Name: </label>
          <input type="text"
           name="firstName"
           value={this.props.firstname}
           onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-field">
          <label>Lastname: </label>
          <input type="text"
           name="lastName"
           value={this.props.lastname}
           onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-field">
          <label>Phone: </label>
          <input type="text"
           name="phone"
           value={this.props.phone}
           onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-field">
          <label>Address: </label>
          <input type="text"
           name="address"
           value={this.props.address}
           onChange={this.handleChange.bind(this)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
    )
  }
}

export default AddPerson;