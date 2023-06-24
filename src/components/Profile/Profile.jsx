import PropTypes from 'prop-types';

import { 
  ProfileCard, 
  Description, 
  Avatar,
  Name,
Tag,
Location,
StatsList,
Item,
Label,
Quanity } from './Profile.styled';

export const Profile = user => {
return (
   <ProfileCard>
  <Description>
    < Avatar
      src={user.avatar}
      alt={user.username}
    />
    <Name>{user.username}</Name>
    <Tag>@{user.tag}</Tag>
    <Location>{user.location}</Location>
  </Description>

  <StatsList>
    <Item>
      <Label>Followers</Label>
      <Quanity>{user.stats.followers}</Quanity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quanity>{user.stats.views}</Quanity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quanity>{user.stats.likes}</Quanity>
    </Item>
  </StatsList>
</ProfileCard>
);
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}