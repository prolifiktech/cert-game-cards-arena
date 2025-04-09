
import React, { useState } from "react";
import { Flashcard } from "@/types/flashcard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  card: Flashcard;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  card,
  onCorrect,
  onIncorrect,
  onNext,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCorrect = () => {
    setAnswered(true);
    onCorrect();
  };

  const handleIncorrect = () => {
    setAnswered(true);
    onIncorrect();
  };

  const handleNext = () => {
    setIsFlipped(false);
    setAnswered(false);
    onNext();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div 
        className="card-container w-full h-[400px] md:h-[450px] mx-auto mb-6 cursor-pointer"
        onClick={!isFlipped && !answered ? handleFlip : undefined}
      >
        <div className={cn(
          "card-inner w-full h-full transition-all duration-500",
          isFlipped ? "rotate-y-180" : ""
        )}>
          <div className="card-front flex flex-col justify-center p-8 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-sm text-muted-foreground mb-4">Question:</div>
            <div className="text-xl md:text-2xl font-medium text-center">
              {card.question}
            </div>
            {!isFlipped && (
              <div className="mt-6 text-sm text-accent text-center">
                Tap card to flip and reveal the answer
              </div>
            )}
          </div>
          <div className="card-back flex flex-col justify-center p-8 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-sm text-muted-foreground mb-4">Answer:</div>
            <div className="text-xl md:text-2xl font-medium text-center">
              {card.answer}
            </div>
            {card.category && (
              <div className="mt-4 text-sm text-muted-foreground text-center">
                Category: {card.category}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full mt-4">
        {isFlipped && !answered ? (
          <div className="flex gap-4 justify-center">
            <Button 
              variant="destructive" 
              className="flex-1 py-6" 
              onClick={handleIncorrect}
            >
              I didn't know
            </Button>
            <Button 
              variant="default" 
              className="flex-1 py-6 bg-green-600 hover:bg-green-700" 
              onClick={handleCorrect}
            >
              I knew it
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            {answered && (
              <Button 
                className="w-full md:w-auto py-6 px-12" 
                onClick={handleNext}
              >
                Next Card
              </Button>
            )}
            {!isFlipped && !answered && (
              <Button 
                className="w-full md:w-auto py-6 px-12" 
                onClick={handleFlip}
              >
                Show Answer
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCard;
