import PropTypes from 'prop-types';
import { 
   Table, 
   TableHead,
   TableRow,
   HeadName,
   TableBody,
   TableData 
} from "./TransactionHistory.styled";


export const TransactionHistory = ({items}) => {
return (
   <Table>
  <TableHead>
    <TableRow>
      <HeadName>Type</HeadName>
      <HeadName>Amount</HeadName>
      <HeadName>Currency</HeadName>
    </TableRow>
  </TableHead>

  <TableBody>
   {items.map(({id, type, amount, currency}) => {
      return (
<TableRow key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
      )
   })
   }
  </TableBody>
</Table>
)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact(
      {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired 
       }
    )
  )
}