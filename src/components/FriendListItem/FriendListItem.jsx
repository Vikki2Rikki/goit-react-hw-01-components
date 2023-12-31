import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = ({avatar,name,isOnline}) => {
   return (
<Item>
  <Status isOnline={isOnline}></Status>
  <Avatar src={avatar} alt={name} width="48" />
  <Name>{name}</Name>
</Item>
   );
}

FriendListItem.prototype = {
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired, 
   avatar: PropTypes.string.isRequired
}

