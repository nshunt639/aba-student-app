"use client"

import { Plus, Trash2 } from "lucide-react"
import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const behaviorTypes = [
  "Aggression",
  "Self-Injury",
  "Tantrums",
  "Elopement",
  "Stereotypy",
  "Non-compliance",
  "Property Destruction",
]

const sampleBehaviors = [
  { name: "Hitting", type: "Aggression", frequency: 3, lastOccurrence: "2023-06-15" },
  { name: "Head Banging", type: "Self-Injury", frequency: 1, lastOccurrence: "2023-06-14" },
  { name: "Screaming", type: "Tantrums", frequency: 5, lastOccurrence: "2023-06-15" },
  { name: "Running Away", type: "Elopement", frequency: 2, lastOccurrence: "2023-06-13" },
]

const sampleChartData = [
  { date: "2023-06-10", frequency: 4 },
  { date: "2023-06-11", frequency: 3 },
  { date: "2023-06-12", frequency: 5 },
  { date: "2023-06-13", frequency: 2 },
  { date: "2023-06-14", frequency: 1 },
  { date: "2023-06-15", frequency: 3 },
  { date: "2023-06-16", frequency: 0 },
]

export function Behaviors() {
  const [behaviors, setBehaviors] = React.useState(sampleBehaviors)

  const addBehavior = (name: string, type: string) => {
    setBehaviors([...behaviors, { name, type, frequency: 0, lastOccurrence: new Date().toISOString().split("T")[0] }])
  }

  const removeBehavior = (index: number) => {
    setBehaviors(behaviors.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Behavior Tracking</h2>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">Behavior List</TabsTrigger>
          <TabsTrigger value="add">Add Behavior</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {behaviors.map((behavior, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{behavior.name}</CardTitle>
                  <CardDescription>{behavior.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Frequency: {behavior.frequency} times</p>
                  <p>Last Occurrence: {behavior.lastOccurrence}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" size="sm" onClick={() => removeBehavior(index)}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Behavior</CardTitle>
              <CardDescription>Track a new behavior for the client</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  addBehavior(formData.get("name") as string, formData.get("type") as string)
                }}
              >
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Behavior Name</Label>
                    <Input id="name" name="name" placeholder="Enter behavior name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="type">Behavior Type</Label>
                    <Select name="type" defaultValue="select">
                      <SelectTrigger>
                        <SelectValue placeholder="Select behavior type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="select">Select behavior type</SelectItem>
                        {behaviorTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Behavior
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis">
          <Card>
            <CardHeader>
              <CardTitle>Behavior Analysis</CardTitle>
              <CardDescription>Analyze behavior patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sampleChartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Bar dataKey="frequency" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Chart Description</h4>
                <p className="text-sm text-muted-foreground">
                  This chart shows the frequency of the selected behavior over the past week. The x-axis represents the
                  date, and the y-axis shows the number of occurrences. This visual representation helps identify
                  patterns or trends in the behavior over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

