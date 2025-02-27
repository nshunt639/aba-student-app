"use client"

import { Plus, Search, Tag, Trash2 } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const noteCategories = [
  "Behavioral Observation",
  "Skill Acquisition",
  "Parent Communication",
  "Team Meeting",
  "Treatment Plan Update",
  "Medication Change",
  "Environmental Factors",
  "Other",
]

type Note = {
  id: string
  title: string
  content: string
  category: string
  date: string
  tags: string[]
}

const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Increased eye contact during morning session",
    content:
      "Client maintained eye contact for longer periods during the morning session. This is a significant improvement from last week.",
    category: "Behavioral Observation",
    date: "2023-06-15",
    tags: ["eye contact", "improvement"],
  },
  {
    id: "2",
    title: "New communication strategy introduced",
    content: "Introduced PECS for requesting preferred items. Client showed interest but needs more practice.",
    category: "Skill Acquisition",
    date: "2023-06-14",
    tags: ["PECS", "communication"],
  },
]

export function Notes() {
  const [notes, setNotes] = React.useState<Note[]>(sampleNotes)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "all" || note.category === selectedCategory),
  )

  const addNote = (newNote: Omit<Note, "id" | "date">) => {
    setNotes([
      ...notes,
      {
        ...newNote,
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
      },
    ])
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Session Notes</h2>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {noteCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Add New Note</CardTitle>
            <CardDescription>Document your observations</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                addNote({
                  title: formData.get("title") as string,
                  content: formData.get("content") as string,
                  category: formData.get("category") as string,
                  tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
                })
                e.currentTarget.reset()
              }}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" name="content" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" defaultValue={noteCategories[0]}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {noteCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input id="tags" name="tags" />
                </div>
                <Button type="submit">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Note
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {filteredNotes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
              <CardDescription>
                {note.category} - {note.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{note.content}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" size="sm" onClick={() => deleteNote(note.id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

