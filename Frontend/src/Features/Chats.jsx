import React from "react";
import { FiPlus } from "react-icons/fi";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Sample chats data (replace this with data from your backend)
const chats = [
  {
    id: 1,
    participant: {
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/40",
    },
    lastMessage: "Hey, how are you?",
  },
  {
    id: 2,
    participant: {
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/40",
    },
    lastMessage: "Let's catch up soon!",
  },
  {
    id: 3,
    participant: {
      name: "Alice Johnson",
      profilePicture: "https://via.placeholder.com/40",
      lastMessage: "Did you see the new design?",
    },
  },
];

function Chats() {
  return (
    <div className="container mx-auto w-3/4 sm:w-2/5 pt-24 p-4">
      <div className="grid grid-cols-1 ">
        {chats.map((chat) => (
          <Card
            key={chat.id}
            className="hover:shadow-lg bg-gradient-to-br from-[#2c3e50] to-[#4ca1af]  text-[#fff] transition-shadow cursor-pointer"
            onClick={() => console.log("Chat clicked:", chat.id)} // Navigate to chat details
          >
            <CardHeader className="flex flex-row items-center space-x-4 p-4">
              {/* Profile Picture */}
              <img
                src={chat.participant.profilePicture}
                alt={chat.participant.name}
                className="w-10 h-10 rounded-full"
              />

              {/* Participant Name and Last Message */}
              <div className="flex-1">
                <p className="font-semibold">{chat.participant.name}</p>
                <p className="text-sm text-gray-400 line-clamp-1">
                  {chat.lastMessage}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Chats;
