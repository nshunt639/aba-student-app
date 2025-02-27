"use client"

import { FileText, Search, Upload } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const documentCategories = [
  "Treatment Plans",
  "Progress Reports",
  "Consent Forms",
  "Behavior Intervention Plans",
  "Session Notes",
  "Discharge Summaries",
]

const sampleDocuments = [
  { name: "Initial Treatment Plan.pdf", category: "Treatment Plans", date: "2023-05-15" },
  { name: "Quarterly Progress Report Q2.docx", category: "Progress Reports", date: "2023-06-30" },
  { name: "Informed Consent.pdf", category: "Consent Forms", date: "2023-04-01" },
  { name: "Behavior Intervention Plan - Aggression.pdf", category: "Behavior Intervention Plans", date: "2023-05-20" },
  { name: "Session Notes - Week 23.docx", category: "Session Notes", date: "2023-06-07" },
  { name: "Discharge Summary - John Doe.pdf", category: "Discharge Summaries", date: "2023-06-15" },
]

export function Documents() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("")

  const filteredDocuments = sampleDocuments.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || doc.category === selectedCategory),
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Documents</h2>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <Card className="mb-6 bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
          <CardDescription>Find documents by name or category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {documentCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc, index) => (
          <Card key={index} className="bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{doc.name}</CardTitle>
              <FileText className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">{doc.category}</div>
              <div className="text-xs text-gray-500">{doc.date}</div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View Document
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

