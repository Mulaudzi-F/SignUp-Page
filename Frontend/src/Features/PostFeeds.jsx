import React from "react";
import { Tooltip } from "react-tooltip";
import { AiOutlineLike } from "react-icons/ai";
import {
  FiLink,
  FiMessageCircle,
  FiRepeat,
  FiShare,
  FiPlus,
} from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Sample posts data (replace this with data from your backend)
const posts = [
  {
    id: 1,
    title: "First Post",
    content:
      "This is the content of the first post. It can be longer and will be truncated if it exceeds a certain length.",
    image: "https://via.placeholder.com/400x200",
    tags: ["Tech", "React"],
    poster: {
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/40", // URL to the profile picture
    },
  },
  {
    id: 2,
    title: "Second Post",
    content:
      "This is the content of the second post. It can be longer and will be truncated if it exceeds a certain length.",
    image: null,
    tags: ["Design", "UI/UX"],
    poster: {
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/40", // URL to the profile picture
    },
  },
  {
    id: 3,
    title: "Third Post",
    content:
      "This is the content of the third post. It can be longer and will be truncated if it exceeds a certain length.",
    image: "https://via.placeholder.com/400x200",
    tags: ["JavaScript", "Tailwind"],
    poster: {
      name: "Alice Johnson",
      profilePicture: "https://via.placeholder.com/40", // URL to the profile picture
    },
  },
];

function PostFeed() {
  return (
    <div className="container mx-auto w-2/3  sm:w-2/5 pt-24 p-4">
      {/* Create New Post Button */}
      <div className="mb-6 flex fixed float-end w-3/5 justify-end">
        <button className="flex items-center space-x-2 bg-[#3A3A3A] text-[#fff] px-4 py-2 rounded-lg hover:bg-[#4A4A4A] transition-colors">
          <FiPlus className="w-5 h-5" />
          <span>Create New Post</span>
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-2">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg bg-gradient-to-br from-[#2c3e50] to-[#4ca1af]  text-[#fff] transition-shadow"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              {/* Profile Picture */}
              <img
                src={post.poster.profilePicture}
                alt={post.poster.name}
                className="w-10 h-10 rounded-full"
              />

              {/* Poster Name and Post Title */}
              <div>
                <p className="font-semibold">{post.poster.name}</p>
                <CardTitle className="text-sm text-gray-500">
                  {post.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {/* Post Content */}
              <p className="text-[#fff] mb-4 line-clamp-3">{post.content}</p>

              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-4 w-full justify-between text-gray-500">
                {/* Link Icon */}
                <button
                  className="p-2 rounded-full text-[#fff] flex gap-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  data-tooltip-id="link-tooltip"
                  data-tooltip-content="Like"
                >
                  <AiOutlineLike className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <Tooltip id="link-tooltip" />

                {/* Comment Icon */}
                <button
                  className="p-2 rounded-full text-[#fff] flex gap-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  data-tooltip-id="comment-tooltip"
                  data-tooltip-content="View Comments"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  <span>Comment</span>
                </button>
                <Tooltip id="comment-tooltip" />

                {/* Repost Icon */}
                <button
                  className="p-2 rounded-full text-[#fff] flex gap-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  data-tooltip-id="repost-tooltip"
                  data-tooltip-content="Repost"
                >
                  <FiRepeat className="w-5 h-5" />
                  <span>Repost</span>
                </button>
                <Tooltip id="repost-tooltip" />

                {/* Share Icon */}
                <button
                  className="p-2 rounded-full text-[#fff] gap-2 flex hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  data-tooltip-id="share-tooltip"
                  data-tooltip-content="Share"
                >
                  <FiShare className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <Tooltip id="share-tooltip" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PostFeed;
