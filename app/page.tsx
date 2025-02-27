"use client"

import {
  ArrowLeft,
  RotateCcw,
  User,
  LayoutDashboard,
  PlayCircle,
  ActivitySquare,
  ClipboardList,
  FileText,
  FolderOpen,
  LineChart,
  StickyNote,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Assessments } from "@/components/assessments"
import { Behaviors } from "@/components/behaviors"
import { Dashboard } from "@/components/dashboard"
import { Documents } from "@/components/documents"
import { Notes } from "@/components/notes"
import { Session } from "@/components/session"
import { SoapNotes } from "@/components/soap-notes"
import { TrialSheet } from "@/components/trial-sheet"
import { Videos } from "@/components/videos"

export default function Page() {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-2">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">ABA Therapy Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <RotateCcw className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-center text-sm font-medium leading-8 text-white">
              AB
            </div>
          </Button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="flex h-14 justify-start gap-4 rounded-none border-b bg-white px-4">
          <TabsTrigger value="dashboard" className="text-sm flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            DASHBOARD
          </TabsTrigger>
          <TabsTrigger value="session" className="text-sm flex items-center gap-2">
            <PlayCircle className="h-4 w-4" />
            SESSION
          </TabsTrigger>
          <TabsTrigger value="behaviors" className="text-sm flex items-center gap-2">
            <ActivitySquare className="h-4 w-4" />
            BEHAVIORS
          </TabsTrigger>
          <TabsTrigger value="trial-sheet" className="text-sm flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            TRIAL SHEET
          </TabsTrigger>
          <TabsTrigger value="soap-notes" className="text-sm flex items-center gap-2">
            <FileText className="h-4 w-4" />
            SOAP NOTES
          </TabsTrigger>
          <TabsTrigger value="documents" className="text-sm flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            DOCUMENTS
          </TabsTrigger>
          <TabsTrigger value="assessments" className="text-sm flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            ASSESSMENTS
          </TabsTrigger>
          <TabsTrigger value="notes" className="text-sm flex items-center gap-2">
            <StickyNote className="h-4 w-4" />
            NOTES
          </TabsTrigger>
          <TabsTrigger value="videos" className="text-sm flex items-center gap-2">
            <Video className="h-4 w-4" />
            VIDEOS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="m-0 border-0">
          <Dashboard />
        </TabsContent>

        <TabsContent value="session" className="m-0 flex border-0">
          <Session />
        </TabsContent>

        <TabsContent value="behaviors" className="m-0 border-0">
          <Behaviors />
        </TabsContent>

        <TabsContent value="trial-sheet" className="m-0 border-0 p-6">
          <TrialSheet />
        </TabsContent>

        <TabsContent value="soap-notes" className="m-0 border-0 p-6">
          <SoapNotes />
        </TabsContent>

        <TabsContent value="documents" className="m-0 border-0">
          <Documents />
        </TabsContent>

        <TabsContent value="assessments" className="m-0 border-0">
          <Assessments />
        </TabsContent>

        <TabsContent value="notes" className="m-0 border-0">
          <Notes />
        </TabsContent>

        <TabsContent value="videos" className="m-0 border-0">
          <Videos />
        </TabsContent>
      </Tabs>
    </div>
  )
}

