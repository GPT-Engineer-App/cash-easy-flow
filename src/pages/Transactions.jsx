import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  { id: 1, date: "2023-04-01", description: "Deposit at me2u ATM", amount: 500, type: "credit" },
  { id: 2, date: "2023-04-02", description: "Grocery Store Purchase", amount: 75.50, type: "debit" },
  { id: 3, date: "2023-04-03", description: "Transfer to John Doe", amount: 200, type: "debit" },
  { id: 4, date: "2023-04-04", description: "Payroll Deposit", amount: 1500, type: "credit" },
  { id: 5, date: "2023-04-05", description: "Utility Bill Payment", amount: 120, type: "debit" },
];

const Transactions = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your financial activity for the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                  <TableCell className={transaction.type === "credit" ? "text-green-600" : "text-red-600"}>
                    {transaction.type === "credit" ? "Credit" : "Debit"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
