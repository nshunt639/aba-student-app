"use client"

import { FileVideo, Search, Tag, Trash2, Upload } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const videoCategories = [
  "Baseline Assessment",
  "Intervention Session",
  "Skill Demonstration",
  "Behavior Incident",
  "Parent Training",
  "Team Meeting",
  "Other",
]

type Video = {
  id: string
  title: string
  description: string
  category: string
  date: string
  tags: string[]
  url: string
}

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Baseline assessment - Communication skills",
    description: "Initial assessment of client's communication skills before intervention.",
    category: "Baseline Assessment",
    date: "2023-06-01",
    tags: ["baseline", "communication"],
    url: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "PECS training session",
    description: "Client practicing use of PECS for requesting preferred items.",
    category: "Intervention Session",
    date: "2023-06-10",
    tags: ["PECS", "communication", "intervention"],
    url: "/placeholder.svg?height=200&width=300",
  },
]

export function Videos() {
  const [videos, setVideos] = React.useState<Video[]>(sampleVideos)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredVideos = videos.filter(
    (video) =>
      (video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "all" || video.category === selectedCategory),
  )

  const addVideo = (newVideo: Omit<Video, "id" | "date" | "url">) => {
    setVideos([
      ...videos,
      {
        ...newVideo,
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
        url: "/placeholder.svg?height=200&width=300", // In a real app, this would be the uploaded video URL
      },
    ])
  }

  const deleteVideo = (id: string) => {
    setVideos(videos.filter((video) => video.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Session Videos</h2>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search videos..."
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
            {videoCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Upload New Video</CardTitle>
          <CardDescription>Add a new session video</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              addVideo({
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                tags: (formData.get("tags") as string)
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean),
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
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={videoCategories[0]}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {videoCategories.map((category) => (
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
              <div className="space-y-2">
                <Label htmlFor="video">Video File</Label>
                <Input id="video" name="video" type="file" accept="video/*" required />
              </div>
              <Button type="submit">
                <Upload className="mr-2 h-4 w-4" />
                Upload Video
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video) => (
          <Card key={video.id}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
              <CardDescription>
                {video.category} - {video.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <img
                  src={video.url || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600">{video.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {video.tags.map((tag) => (
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
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <FileVideo className="mr-2 h-4 w-4" />
                View
              </Button>
              <Button variant="destructive" size="sm" onClick={() => deleteVideo(video.id)}>
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

