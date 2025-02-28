import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, UserPlus, Link } from "lucide-react";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

const user = {
  name: "Jane Doe",
  title: "Full-Stack Developer",
  description: "Passionate about coding and mentoring new developers.",
  profilePicture: "https://via.placeholder.com/150",
  role: "Tutor",
  posts: [
    { id: 1, title: "Building a REST API with Node.js", date: "Feb 20, 2025" },
    {
      id: 2,
      title: "Understanding React Server Components",
      date: "Feb 18, 2025",
    },
  ],
  courses: [
    { id: 1, name: "Intro to JavaScript", students: 50 },
    { id: 2, name: "Advanced React", students: 30 },
  ],
  achievements: [
    { id: 1, title: "Certified JavaScript Developer", date: "Jan 10, 2024" },
    { id: 2, title: "React Mastery Certificate", date: "Dec 15, 2023" },
  ],
};

export default function UserDetailPage() {
  const { userId } = useParams();

  return (
    <div className="max-w-2xl w-3/4 pt-24 mx-auto p-6">
      <Card className="bg-[#222725] text-[#fff]">
        <CardHeader className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user.profilePicture} alt={user.name} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-[#fff]">{user.title}</p>
          </div>
          <div className="flex gap-6 w-full justify-center ml-auto">
            <Button variant="ghost" size="icon">
              <MessageCircle size={5} className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserPlus className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Link className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#fff]">{user.description}</p>
          <Separator className="my-4" />
          <h3 className="text-lg font-semibold">Posts</h3>
          <Carousel>
            {user.posts.map((post) => (
              <CarouselItem key={post.id} className="p-4 text-[#fff]">
                <p className="font-medium">{post.title}</p>
                <p className="text-sm">{post.date}</p>
              </CarouselItem>
            ))}
          </Carousel>
          {user.role === "Tutor" && (
            <>
              <Separator className="my-4" />
              <h3 className="text-lg font-semibold">Courses Offered</h3>
              <Carousel>
                {user.courses.map((course) => (
                  <CarouselItem key={course.id} className="p-4 text-[#fff]">
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm">
                      Students enrolled: {course.students}
                    </p>
                  </CarouselItem>
                ))}
              </Carousel>
            </>
          )}
          <Separator className="my-4" />
          <h3 className="text-lg font-semibold">Achievements</h3>
          <Carousel>
            {user.achievements.map((achievement) => (
              <CarouselItem key={achievement.id} className="p-4 text-[#fff]">
                <p className="font-medium">{achievement.title}</p>
                <p className="text-sm">{achievement.date}</p>
              </CarouselItem>
            ))}
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}
