import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const notifications = [
  {
    id: 1,
    message: "New comment on your post",
    type: "comment",
    date: "Feb 27, 2025",
  },
  {
    id: 2,
    message: "Your course has been approved",
    type: "course",
    date: "Feb 26, 2025",
  },
  {
    id: 3,
    message: "New follower: Jane Doe",
    type: "follower",
    date: "Feb 25, 2025",
  },
  {
    id: 4,
    message: "Your post was reposted",
    type: "repost",
    date: "Feb 24, 2025",
  },
  {
    id: 5,
    message: "Upcoming session: Advanced JavaScript",
    type: "upcoming session",
    date: "Feb 28, 2025",
  },
  {
    id: 6,
    message: "Session request from John Smith",
    type: "session request",
    date: "Feb 23, 2025",
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-2xl pt-24 w-3/4  mx-auto p-6">
      <Card className="bg-[#222725] text-[#fff]">
        <CardHeader>
          <h2 className="text-xl font-bold">Notifications</h2>
        </CardHeader>
        <CardContent>
          {notifications.map((notification, index) => (
            <div key={notification.id} className="py-3">
              <p className="font-medium">{notification.message}</p>
              <p className="text-sm text-[#fff]">{notification.date}</p>
              <Badge className="mt-2">{notification.type}</Badge>
              {index < notifications.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
