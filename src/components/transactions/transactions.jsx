import propTypes from 'prop-types';
import { Table, TableHeading, TableRow, TableData } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </thead>
      <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
        );
      })}
     </tbody>
    </Table>
  )
};

TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
}