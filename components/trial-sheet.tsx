"use client"

import { PlusCircle } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function TrialSheet() {
  const [trials, setTrials] = React.useState([
    {
      id: 1,
      target: "Responds to name",
      result: "success",
      promptLevel: "independent",
      notes: "",
    },
  ])

  const addTrial = () => {
    setTrials([
      ...trials,
      {
        id: trials.length + 1,
        target: "",
        result: "",
        promptLevel: "",
        notes: "",
      },
    ])
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Trial Sheet</h2>
          <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
        </div>
        <div className="flex gap-4">
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
          <Button onClick={addTrial}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Trial
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {trials.map((trial, index) => (
          <Card key={trial.id} className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-gray-800">
                Trial {index + 1}
                <span className="text-sm font-normal text-muted-foreground">{new Date().toLocaleTimeString()}</span>
              </CardTitle>
              <CardDescription>Record trial data and observations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Select defaultValue={trial.target}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select target" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Responds to name">Responds to name</SelectItem>
                        <SelectItem value="Makes eye contact">Makes eye contact</SelectItem>
                        <SelectItem value="Follows one-step directions">Follows one-step directions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select defaultValue={trial.result}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select result" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="success">Success ✓</SelectItem>
                        <SelectItem value="partial">Partial ～</SelectItem>
                        <SelectItem value="failure">Failure ✗</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Select defaultValue={trial.promptLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select prompt level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="independent">Independent</SelectItem>
                        <SelectItem value="gestural">Gestural Prompt</SelectItem>
                        <SelectItem value="verbal">Verbal Prompt</SelectItem>
                        <SelectItem value="physical">Physical Prompt</SelectItem>
                        <SelectItem value="full">Full Physical Prompt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    placeholder="Add notes about the trial..."
                    value={trial.notes}
                    onChange={(e) => {
                      const newTrials = [...trials]
                      newTrials[index].notes = e.target.value
                      setTrials(newTrials)
                    }}
                    className="min-h-[100px] resize-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

