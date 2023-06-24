import PropTypes from 'prop-types';

import { 
  Section,
  Title, 
  StatList,
  Item,
  Label,
  Percentage } from "./Statistics.styeld";

export const Statistics = ({title, stats}) => {
 return (
   <Section>
  {title && <Title>{title}</Title>}

  <StatList>
    {stats.map(({id, label, percentage }) => (
 <Item key={id}>
 <Label>{label}</Label>
 <Percentage>{percentage}%</Percentage>
</Item>
    ))}
    
  </StatList>
</Section>
 );  
}

Statistics.propTypes = {
 title: PropTypes.string.isRequired,
 stats :PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }
))  
}