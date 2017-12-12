import React from 'react'


class Person extends React.Component {
  render() {
    return (
      <li>
        <p>
          {this.props.person.firstName} <br />
          {this.props.person.lastName} <br />
          {this.props.person.phone} <br />
          {this.props.person.address}
        </p>
      </li>
    )
  }
}
export default Person;