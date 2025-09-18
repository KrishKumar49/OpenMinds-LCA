"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card-nonexpert"
import { Progress } from "@/components/ui/progress-nonexpert"
import { Badge } from "@/components/ui/badge-Nonexpert"
import ai from "./icons8-quillbot-50.png"
import {
  ArrowLeft,
  Lightbulb,
  CheckCircle,
  Home,
  Wrench,
  Zap,
  Building,
  RotateCcw,
  Clock,
  Calendar,
  CalendarDays,
  Recycle,
  Trash2,
} from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  hint: string
  options: {
    id: string
    text: string
    icon: React.ReactNode
    description: string
    image?: string
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of metal product are you assessing?",
    hint: "Think about the primary metal component in your product",
    options: [
      {
        id: "aluminum",
        text: "Aluminum Products",
        icon: <Wrench className="w-6 h-6" />,
        description: "Cans, foils, automotive parts",
        image: "/aluminum-ingots-metallic-silver.jpg",
      },
      {
        id: "copper",
        text: "Copper Products",
        icon: <Zap className="w-6 h-6" />,
        description: "Wires, pipes, electronics",
        image: "/copper-plumbing.png",
      },
      {
        id: "steel",
        text: "Steel Products",
        icon: <Building className="w-6 h-6" />,
        description: "Construction, machinery, tools",
        image: "/steel-bars-metallic-gray.jpg",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      },
    ],
  },
  {
    id: 2,
    question: "What is the primary use of this product?",
    hint: "Consider the main function or application",
    options: [
      {
        id: "construction",
        text: "Construction",
        icon: <Building className="w-6 h-6" />,
        description: "Buildings, infrastructure",
      },
      {
        id: "automotive",
        text: "Transportation",
        icon: <Wrench className="w-6 h-6" />,
        description: "Cars, trucks, vehicles",
      },
      {
        id: "electronics",
        text: "Electronics",
        icon: <Zap className="w-6 h-6" />,
        description: "Phones, computers, appliances",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      },
    ],
  },
  {
    id: 3,
    question: "How long is the expected lifespan of this product?",
    hint: "Think about how long the product will be used before replacement",
    options: [
      {
        id: "short",
        text: "Short-term",
        icon: <Clock className="w-6 h-6" />,
        description: "Less than 1 year",
      },
      {
        id: "medium",
        text: "Medium-term",
        icon: <Calendar className="w-6 h-6" />,
        description: "1-10 years",
      },
      {
        id: "long",
        text: "Long-term",
        icon: <CalendarDays className="w-6 h-6" />,
        description: "10+ years",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      },
    ],
  },
  {
    id: 4,
    question: "What happens to the product at end of life?",
    hint: "Consider the most likely disposal or recycling method",
    options: [
      {
        id: "recycle",
        text: "Recycled",
        icon: <Recycle className="w-6 h-6" />,
        description: "Processed into new materials",
      },
      {
        id: "reuse",
        text: "Reused",
        icon: <RotateCcw className="w-6 h-6" />,
        description: "Used again for same purpose",
      },
      {
        id: "landfill",
        text: "Disposed",
        icon: <Trash2 className="w-6 h-6" />,
        description: "Sent to landfill or waste",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      },
    ],
  },
]

export default function NonExpertMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showHint, setShowHint] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: optionId }
    setAnswers(newAnswers)

    if (optionId === "ai-decide") {
      setTimeout(() => {
        window.location.href = "/Dashboard"
      }, 500)
      return
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setShowHint(false)
      } else {
        setIsComplete(true)
      }
    }, 500)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowHint(false)
    }
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full">
          <Card className="p-8 text-center bg-white shadow-xl border border-slate-200 rounded-xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-slate-900">Assessment Complete!</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Perfect! We've collected all the information needed to analyze your metal product's environmental impact.
            </p>
            <div className="space-y-3">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="/Dashboard">View Your Results</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-white border-slate-300 text-slate-700 hover:bg-slate-50" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 rounded-full">Guided Assessment</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">LCA Assessment</h1>
            <p className="text-slate-600">Answer a few questions to get your environmental impact analysis</p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-green-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-200" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI Assistant Panel */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white shadow-lg border border-slate-200 rounded-xl sticky top-28">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image src={ai} alt="AI Assistant" width={32} height={32} className="object-contain" />
                  </div>
                  <h3 className="font-semibold text-slate-900">AI Assistant</h3>
                  <p className="text-xs text-slate-500 mt-1">Ready to help</p>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowHint(!showHint)} 
                  className="w-full mb-4 bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  {showHint ? "Hide Hint" : "Need Help?"}
                </Button>

                {showHint && (
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 mb-4">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700 leading-relaxed">{question.hint}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs font-medium text-slate-700 mb-3">Progress:</p>
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          index < currentQuestion
                            ? "bg-green-500"
                            : index === currentQuestion
                              ? "bg-blue-500"
                              : "bg-slate-300"
                        }`}
                      />
                      <span className={`text-xs ${index <= currentQuestion ? "text-slate-700" : "text-slate-400"}`}>
                        Question {index + 1}
                        {index < currentQuestion && <span className="text-green-600 ml-1">✓</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Question Panel */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-white shadow-xl border border-slate-200 rounded-xl">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                      {currentQuestion + 1}
                    </div>
                    <Badge variant="outline" className="text-xs bg-white border-slate-300 text-slate-700">
                      Step {currentQuestion + 1}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight">{question.question}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {question.options.map((option) => (
                    <Card
                      key={option.id}
                      className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-2 group rounded-lg ${
                        option.id === "ai-decide"
                          ? "border-purple-200 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-indigo-50"
                          : "border-slate-200 hover:border-blue-400 bg-white"
                      }`}
                      onClick={() => handleAnswer(option.id)}
                    >
                      <div className="text-center">
                        {option.image ? (
                          <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-slate-200 group-hover:border-blue-300 transition-colors">
                            <Image
                              src={option.image || "/placeholder.svg"}
                              alt={option.text}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-colors ${
                              option.id === "ai-decide"
                                ? "bg-purple-100 text-purple-600 group-hover:bg-purple-200"
                                : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                            }`}
                          >
                            {option.icon}
                          </div>
                        )}
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {option.text}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{option.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                  <Button
                    variant="outline"
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                    className="flex items-center space-x-2 bg-white border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>

                  <div className="text-sm text-slate-500 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Select an option to continue</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
