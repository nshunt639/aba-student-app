"use client"

import { BarChart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const assessmentTypes = [
  { name: "VB-MAPP", description: "Verbal Behavior Milestones Assessment and Placement Program" },
  { name: "ABLLS-R", description: "Assessment of Basic Language and Learning Skills-Revised" },
  { name: "FBA", description: "Functional Behavior Assessment" },
  { name: "ADOS-2", description: "Autism Diagnostic Observation Schedule, Second Edition" },
  { name: "Vineland-3", description: "Vineland Adaptive Behavior Scales, Third Edition" },
]

const sampleAssessments = [
  { name: "VB-MAPP - John Doe", type: "VB-MAPP", status: "In Progress", progress: 65, startDate: "2023-05-01" },
  { name: "ABLLS-R - Jane Smith", type: "ABLLS-R", status: "Completed", progress: 100, startDate: "2023-04-15" },
  { name: "FBA - Aggression", type: "FBA", status: "Not Started", progress: 0, startDate: "2023-06-10" },
  { name: "ADOS-2 - New Client", type: "ADOS-2", status: "Scheduled", progress: 0, startDate: "2023-06-20" },
  {
    name: "Vineland-3 - Quarterly Assessment",
    type: "Vineland-3",
    status: "In Progress",
    progress: 30,
    startDate: "2023-06-01",
  },
]

export function Assessments() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Assessments</h2>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
          <Plus className="mr-2 h-4 w-4" />
          New Assessment
        </Button>
      </div>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Start New Assessment</CardTitle>
          <CardDescription>Choose an assessment type to begin</CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select assessment type" />
            </SelectTrigger>
            <SelectContent>
              {assessmentTypes.map((type) => (
                <SelectItem key={type.name} value={type.name}>
                  {type.name} - {type.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Assessment</Button>
        </CardFooter>
      </Card>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Ongoing and Recent Assessments</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {sampleAssessments.map((assessment, index) => (
          <Card key={index} className="bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{assessment.name}</CardTitle>
              <BarChart className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500 mb-1">{assessment.type}</div>
              <div className="text-xs text-gray-500 mb-2">Started: {assessment.startDate}</div>
              <div className="flex items-center space-x-2">
                <Progress value={assessment.progress} className="flex-1" />
                <span className="text-xs font-medium">{assessment.progress}%</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                {assessment.status === "Completed" ? "View Results" : "Continue Assessment"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

