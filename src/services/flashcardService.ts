
import { Flashcard, FlashcardCollection } from "../types/flashcard";

// This is a simplified implementation. In a real-world app, 
// we'd implement CSV parsing or API calls to get this data
export const sampleFlashcards: FlashcardCollection = [
  {
    id: 1,
    question: "What is the OSI model?",
    answer: "A conceptual framework used to understand network interactions in seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    category: "Networking"
  },
  {
    id: 2,
    question: "What is the difference between TCP and UDP?",
    answer: "TCP is connection-oriented and provides reliable data delivery with error checking, while UDP is connectionless and prioritizes speed over reliability.",
    category: "Networking"
  },
  {
    id: 3,
    question: "What is a firewall?",
    answer: "A network security device that monitors and filters incoming and outgoing network traffic based on an organization's security policies.",
    category: "Security"
  },
  {
    id: 4,
    question: "What is public key infrastructure (PKI)?",
    answer: "A framework for managing digital certificates and public-key encryption, enabling secure communications.",
    category: "Security"
  },
  {
    id: 5,
    question: "What is a virtual machine?",
    answer: "A software emulation of a computer system that provides the functionality of a physical computer.",
    category: "Virtualization"
  },
  {
    id: 6,
    question: "What is container orchestration?",
    answer: "The automated arrangement, coordination, and management of software containers.",
    category: "Containers"
  },
  {
    id: 7,
    question: "What is CIDR notation?",
    answer: "Classless Inter-Domain Routing - a method for allocating IP addresses and routing IP packets, expressed as an IP address followed by a slash and the prefix size (e.g., 192.168.1.0/24).",
    category: "Networking"
  },
  {
    id: 8,
    question: "What is the CAP theorem?",
    answer: "States that a distributed database system can only guarantee two of three properties simultaneously: Consistency, Availability, and Partition tolerance.",
    category: "Databases"
  },
  {
    id: 9,
    question: "What is a SQL injection attack?",
    answer: "A code injection technique where malicious SQL statements are inserted into entry fields for execution.",
    category: "Security"
  },
  {
    id: 10,
    question: "What is the principle of least privilege?",
    answer: "A security concept in which a user is given the minimum levels of access necessary to complete their job functions.",
    category: "Security"
  }
];

export const getRandomizedFlashcards = (): FlashcardCollection => {
  // Create a copy of the flashcards array to avoid modifying the original
  const shuffled = [...sampleFlashcards];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

// This would be the function to parse CSV in a real implementation
export const parseCSV = (csvData: string): FlashcardCollection => {
  // In a real application, we would implement CSV parsing here
  // For now, we'll return our sample data
  return sampleFlashcards;
};
