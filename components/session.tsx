"use client"

import { ChevronDown, MoreVertical } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function Session() {
  const [isTargetsActive, setIsTargetsActive] = React.useState(true)

  return (
    <>
      {/* Left Sidebar */}
      <div className="w-80 border-r bg-white">
        <div className="p-4">
          <Input type="search" placeholder="Search..." className="mb-4" />
          <div className="mb-4 flex rounded-lg border p-1">
            <Button
              variant={isTargetsActive ? "secondary" : "ghost"}
              className="flex-1"
              onClick={() => setIsTargetsActive(true)}
            >
              Targets
            </Button>
            <Button
              variant={!isTargetsActive ? "secondary" : "ghost"}
              className="flex-1"
              onClick={() => setIsTargetsActive(false)}
            >
              Programs
            </Button>
          </div>
        </div>

        <div className="px-4">
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
              <span className="text-sm font-medium">INTERVAL SCHEDULES</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2">{/* Interval content */}</CollapsibleContent>
          </Collapsible>

          <Collapsible className="mt-2">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
              <span className="text-sm font-medium">02-M RESPONDS TO HEARING HIS OWN NAME 5 TIMES</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-2">
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-700">2-M Responds to hearing his own name 5 times_Copy</span>
                  <span className="text-sm font-medium">0/5</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Targets</h2>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Target</h3>
          <p className="text-lg text-gray-800">2-M Responds to hearing his own name 5 times_Copy</p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-gray-500">Program</h3>
          <p className="text-lg text-gray-800">02-M Responds to hearing his own name 5 times</p>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Target Instructions</h3>
          <p className="mb-2">PRT Setting Examples:</p>
          <p className="text-gray-600">...</p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <Label>Prompt Delay</Label>
            <p className="text-lg text-gray-800">0 seconds</p>
          </div>
          <div>
            <Label>Previous Trial</Label>
            <p className="text-lg text-gray-800">yes</p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <Label>yes</Label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <Label>Gestural Prompt</Label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <Label>Vocal Prompt</Label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <Label>Positional Prompt</Label>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-4 shadow-sm">
            <div className="mb-2 text-purple-700">Aggression Towards Others</div>
            <div className="text-2xl font-semibold text-purple-900">0</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-4 shadow-sm">
            <div className="mb-2 text-purple-700">biting</div>
            <div className="text-2xl font-semibold text-purple-900">0</div>
          </div>
        </div>
      </div>
    </>
  )
}

