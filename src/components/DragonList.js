import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';
import { addNewMember, updateNewMember } from '../actions/dragonListActions';

class DragonList extends React.Component {
handleClick = () => {
  let newMemberObj = {
    name : this.props.newMember,
    dragonStatus : Math.floor(Math.random()*3) === 2 ? true : false,
}
this.props.addNewMember(newMemberObj);
}
  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
          onChange={(e)=>this.props.updateNewMember(e.target.value)}
          placeholder="Add new member"
        />
        <button onClick={()=>this.handleClick()}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    members : state.dragonList.members,
    newMember : state.dragonList.newMember,
  }
}

export default connect(mapStateToProps,{updateNewMember, addNewMember})(DragonList);
