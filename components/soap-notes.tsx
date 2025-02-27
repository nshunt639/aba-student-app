"use client"

import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function SoapNotes() {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">SOAP Notes</h2>
        <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Select defaultValue="morning">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select session" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning Session</SelectItem>
            <SelectItem value="afternoon">Afternoon Session</SelectItem>
            <SelectItem value="evening">Evening Session</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="60">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Session duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30 minutes</SelectItem>
            <SelectItem value="45">45 minutes</SelectItem>
            <SelectItem value="60">60 minutes</SelectItem>
            <SelectItem value="90">90 minutes</SelectItem>
            <SelectItem value="120">120 minutes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Subjective</CardTitle>
          <CardDescription>Client&apos;s mood, behavior, and level of cooperation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Mood</Label>
              <Select defaultValue="happy">
                <SelectTrigger>
                  <SelectValue placeholder="Select mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                  <SelectItem value="anxious">Anxious</SelectItem>
                  <SelectItem value="frustrated">Frustrated</SelectItem>
                  <SelectItem value="tired">Tired</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Cooperation Level</Label>
              <Select defaultValue="good">
                <SelectTrigger>
                  <SelectValue placeholder="Select cooperation level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Textarea
            placeholder="Additional observations about client's behavior and mood..."
            className="min-h-[100px] resize-none"
          />
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Objective</CardTitle>
          <CardDescription>Measurable data, observations, and specific behaviors</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Record specific behaviors, frequency counts, duration data, etc..."
            className="min-h-[150px] resize-none"
          />
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Assessment</CardTitle>
          <CardDescription>Analysis of progress and current status</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Evaluate progress on goals, analyze behavior patterns, identify challenges..."
            className="min-h-[150px] resize-none"
          />
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Plan</CardTitle>
          <CardDescription>Treatment plan updates and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Document treatment modifications, new goals, recommendations..."
            className="min-h-[150px] resize-none"
          />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
        >
          <Save className="mr-2 h-4 w-4" />
          Save SOAP Note
        </Button>
      </div>
    </div>
  )
}

