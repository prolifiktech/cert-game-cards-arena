
import React from "react";
import { CardStats } from "@/types/flashcard";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, ArrowDown, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatsDisplayProps {
  stats: CardStats;
  currentCardIndex: number;
  totalCards: number;
  onReset: () => void;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  currentCardIndex,
  totalCards,
  onReset,
}) => {
  const correctPercentage = stats.total > 0
    ? Math.round((stats.correct / stats.total) * 100)
    : 0;

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-xl shadow-sm border border-border p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="text-lg font-medium mb-2 md:mb-0">
          Card {currentCardIndex + 1} of {totalCards}
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="px-3" 
            onClick={onReset}
          >
            <RotateCw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-secondary/50 rounded-lg p-3 text-center">
          <div className="text-sm text-muted-foreground">Total</div>
          <div className="text-xl font-medium">{stats.total}</div>
        </div>
        <div className="bg-green-100 dark:bg-green-950/30 rounded-lg p-3 text-center">
          <div className="text-sm text-green-700 dark:text-green-400 flex items-center justify-center">
            <ArrowUp className="h-3 w-3 mr-1" />
            Correct
          </div>
          <div className="text-xl font-medium text-green-700 dark:text-green-400">
            {stats.correct}
          </div>
        </div>
        <div className="bg-red-100 dark:bg-red-950/30 rounded-lg p-3 text-center">
          <div className="text-sm text-red-700 dark:text-red-400 flex items-center justify-center">
            <ArrowDown className="h-3 w-3 mr-1" />
            Incorrect
          </div>
          <div className="text-xl font-medium text-red-700 dark:text-red-400">
            {stats.incorrect}
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>Success Rate</span>
          <span>{correctPercentage}%</span>
        </div>
        <Progress value={correctPercentage} className="h-2" />
      </div>
    </div>
  );
};

export default StatsDisplay;
