import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banknote, CreditCard, ArrowRightLeft, PiggyBank } from 'lucide-react';

const Index = () => {
  const [balance, setBalance] = useState(1000);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">CashTransact</h1>
        <p className="text-xl text-gray-600">Simplify Your Cash Transactions</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="deposit" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            <TabsTrigger value="transfer">Transfer</TabsTrigger>
          </TabsList>
          <TabsContent value="deposit">
            <Card>
              <CardHeader>
                <CardTitle>Deposit Cash</CardTitle>
                <CardDescription>Use me2u ATM to deposit cash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Input type="number" placeholder="Enter amount" />
                  <Button>Generate Voucher</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="withdraw">
            <Card>
              <CardHeader>
                <CardTitle>Withdraw Cash</CardTitle>
                <CardDescription>Convert voucher to cash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Input type="text" placeholder="Enter voucher code" />
                  <Button>Withdraw</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transfer">
            <Card>
              <CardHeader>
                <CardTitle>Transfer Funds</CardTitle>
                <CardDescription>Send money to another account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input type="text" placeholder="Recipient's account" />
                  <Input type="number" placeholder="Amount" />
                  <Button className="w-full">Send Transfer</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Deposits
              </CardTitle>
              <Banknote className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,231.00</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Withdrawals
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$568.00</div>
              <p className="text-xs text-muted-foreground">
                -4.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
