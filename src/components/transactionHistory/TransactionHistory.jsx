import {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TransactionTable,
} from './TransactionHistory.styled';

export const TransactionsUser = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(e => (
          <TableRow key={e.id}>
            <TableData>{e.type}</TableData>
            <TableData>{e.amount}</TableData>
            <TableData>{e.currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};
