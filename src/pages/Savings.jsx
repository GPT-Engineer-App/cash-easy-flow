import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

const Savings = () => {
  const [savingsGoal, setSavingsGoal] = useState(1000);
  const [currentSavings, setCurrentSavings] = useState(250);

  const handleAddSavings = (amount) => {
    setCurrentSavings(prev => Math.min(prev + amount, savingsGoal));
  };

  const progress = (currentSavings / savingsGoal) * 100;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Savings Goals</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Savings Goal</CardTitle>
          <CardDescription>Track your progress towards your savings target</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-lg font-semibold">Goal: ${savingsGoal}</p>
            <p className="text-md">Current: ${currentSavings}</p>
          </div>
          <Progress value={progress} className="mb-4" />
          <p className="text-sm text-gray-600 mb-4">{progress.toFixed(1)}% of goal reached</p>
          <div className="flex space-x-2">
            <Button onClick={() => handleAddSavings(10)}>Add $10</Button>
            <Button onClick={() => handleAddSavings(50)}>Add $50</Button>
            <Button onClick={() => handleAddSavings(100)}>Add $100</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Set New Savings Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="Enter goal amount"
              value={savingsGoal}
              onChange={(e) => setSavingsGoal(Number(e.target.value))}
            />
            <Button onClick={() => setCurrentSavings(0)}>Set New Goal</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Savings;
