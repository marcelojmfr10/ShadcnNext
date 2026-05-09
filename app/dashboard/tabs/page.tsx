import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab1 } from "./ui/tab1";

export default function Page() {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Tab1 />
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
