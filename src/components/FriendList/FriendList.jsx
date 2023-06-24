import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { Container } from "./FriendList.styled";

export const FriendList = ({friends}) => {
   return(
      <Container>
         {friends.map(({avatar,name,isOnline,id}) => {
  return  (<FriendListItem 
   key={id}
   avatar={avatar}
   isOnline={isOnline}
   name={name}>
   </FriendListItem>)
         })}
      </Container>
   );
}

FriendList.prototype = {
 friends: PropTypes.arrayOf(
  PropTypes.exact({
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired, 
   avatar: PropTypes.string.isRequired,
  }) 
 )
}