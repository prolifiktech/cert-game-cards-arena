
import React, { useState, useEffect } from "react";
import FlashCard from "@/components/FlashCard";
import StatsDisplay from "@/components/StatsDisplay";
import { getRandomizedFlashcards } from "@/services/flashcardService";
import { CardStats, FlashcardCollection } from "@/types/flashcard";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [cards, setCards] = useState<FlashcardCollection>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [stats, setStats] = useState<CardStats>({
    total: 0,
    correct: 0,
    incorrect: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load and shuffle cards when component mounts
    const shuffledCards = getRandomizedFlashcards();
    setCards(shuffledCards);
  }, []);

  const handleCorrect = () => {
    setStats(prev => ({
      total: prev.total + 1,
      correct: prev.correct + 1,
      incorrect: prev.incorrect,
    }));
  };

  const handleIncorrect = () => {
    setStats(prev => ({
      total: prev.total + 1,
      correct: prev.correct,
      incorrect: prev.incorrect + 1,
    }));
  };

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // We've reached the end of the cards
      toast({
        title: "Round Complete!",
        description: `You completed all cards with ${stats.correct} correct answers out of ${stats.total}.`,
        duration: 5000,
      });
      
      // Reshuffle and start again
      const shuffledCards = getRandomizedFlashcards();
      setCards(shuffledCards);
      setCurrentCardIndex(0);
    }
  };

  const handleReset = () => {
    // Reset stats and shuffle cards again
    setStats({
      total: 0,
      correct: 0,
      incorrect: 0,
    });
    const shuffledCards = getRandomizedFlashcards();
    setCards(shuffledCards);
    setCurrentCardIndex(0);
    
    toast({
      title: "Game Reset",
      description: "All stats have been reset and cards shuffled.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Certification Flash Cards
          </h1>
          <p className="text-muted-foreground">
            Test your knowledge and track your progress
          </p>
        </div>

        {cards.length > 0 ? (
          <>
            <StatsDisplay 
              stats={stats} 
              currentCardIndex={currentCardIndex} 
              totalCards={cards.length}
              onReset={handleReset}
            />
            
            <FlashCard
              card={cards[currentCardIndex]}
              onCorrect={handleCorrect}
              onIncorrect={handleIncorrect}
              onNext={handleNext}
            />
          </>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-muted-foreground">Loading cards...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
