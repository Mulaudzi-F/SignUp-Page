import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function PostCreator() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
  };

  const handleShare = () => {
    // Handle post sharing logic here
    console.log("Post Shared:", { title, content, image, tags });
  };

  return (
    <div className="container flex flex-col justify-center items-center mx-auto pt-14 p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post Creation Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create Your Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content"
                rows={5}
              />
            </div>
            <div>
              <Label htmlFor="image">Upload Image</Label>
              <Input id="image" type="file" onChange={handleImageUpload} />
            </div>
            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Add tags (press Enter to add)"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleTagChange(e);
                    e.target.value = "";
                  }
                }}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleShare}>Post</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default PostCreator;
