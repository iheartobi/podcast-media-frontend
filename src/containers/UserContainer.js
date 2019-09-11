import React from 'react';
import UserCard from '../components/UserCard'

class UserContainer extends React.Component{
    
    
    render(){
        console.log("UserContainer", this.props)
      let allUsers = this.props.users? (
        this.props.users.map(user => <UserCard key={user.id} user={user}/>)
    ) : <p>Loading...</p>
      
        return(
            <div>
              {allUsers}
          </div>
        )
    }
}

export default (UserContainer);
