import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SubscriptionPage() {
  return (
    <div className="max-w-2xl mx-auto pt-24  p-6 text-center">
      <Card className="bg-[#222725] text-[#fff]">
        <CardHeader>
          <h2 className="text-xl font-bold">Premium Version Coming Soon!</h2>
        </CardHeader>
        <CardContent>
          <p className="text-[#fff]">
            We are working on a premium version where tutors can set their own
            course prices, and students will have the option to subscribe
            monthly. With this subscription, students can request sessions
            without limitations.
          </p>
          <p className="mt-4 font-semibold">Stay tuned for updates!</p>
          <Button className="mt-6" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
