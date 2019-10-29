import React, { Component } from 'react'
import { connect } from 'react-redux';
import PetItem from '../components/PetItem'

export class PetList extends Component {
  render() {
    console.log('petlist render');
    const pets = this.props.pets.map(( pet, i ) => <PetItem key={i} pet={ pet } />)
    return (
      <div>
        <h3>Pet List</h3>
        <ul className="collection">
          { pets }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log('petlist mapstatetoprops');
  return {
    pets: store.petsReducer.pets
  }
}

export default connect(mapStateToProps)(PetList);
