import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const user = {
  name: "John Doe",
  title: "Senior Developer",
  description:
    "Passionate about building web applications and teaching others.",
  profilePicture: "https://via.placeholder.com/150",
  courses: [
    "React Fundamentals",
    "Advanced JavaScript",
    "Full-Stack Development",
  ],
  posts: [
    {
      id: 1,
      title: "Understanding React Server Components",
      date: "Feb 20, 2025",
    },
    {
      id: 2,
      title: "How to Optimize Your JavaScript Code",
      date: "Feb 18, 2025",
    },
  ],
};

export default function MePage() {
  return (
    <div className="max-w-3/4 w-3/4 mx-auto  pt-24 p-6">
      <Card className="bg-[#222725] text-[#fff]">
        <CardHeader className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user.profilePicture} alt={user.name} />
            <AvatarFallback className=" text-gray-500">JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-[#fff]">{user.title}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#fff]">{user.description}</p>
          <Separator className="my-4" />
          <h3 className="text-lg font-semibold">Courses Offered</h3>
          <ul className="list-disc pl-5 text-[#fff]">
            {user.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <Separator className="my-4" />
          <h3 className="text-lg font-semibold">Recent Posts</h3>
          <ul className="text-[#fff]">
            {user.posts.map((post) => (
              <li key={post.id} className="py-2">
                <p className="font-medium">{post.title}</p>
                <p className="text-smtext-[#fff]">{post.date}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
