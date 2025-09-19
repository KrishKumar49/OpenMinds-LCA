"use client"

import type React from "react"

import { useState, useRef } from "react"
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
    question: "What type of LCA do you want?",
    hint: 
    "Choose the assessment depth that matches your goal"
    ,
    options: [
      {
        id: "screening",
        text: "Screening",
        icon: <Wrench className="w-6 h-6" />,
        description: "A quick, simplified LCA for early-stage projects or rough estimates, useful when speed matters more than detail.",
        image: "/icon/image.png",
      },
      {
        id: "cradle",
        text: "Detailed cradle-to-gate",
        icon: <Zap className="w-6 h-6" />,
        description: "A thorough analysis covering raw material extraction up to the factory gate, ideal for precise product footprinting.",
        image: "/icon/Screenshot 2025-09-19 010651.png",
      },
      {
        id: "grave",
        text: "Cradle-to-grave",
        icon: <Building className="w-6 h-6" />,
        description: "Covers the full life cycle of a product, from raw materials to disposal, providing the most comprehensive impact assessment.",
        image: "/icon/Screenshot 2025-09-19 011427.png",
      },
      {
        id: "comparison",
        text: "Comparison",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "Evaluates two or more scenarios (e.g., virgin vs. recycled materials) to highlight differences in environmental impacts.",
        image: "/icon/Screenshot 2025-09-19 011831.png",
      },
    ],
  },
  {
    id: 2,
    question: "Which process/ product are you assessing?",
    hint: "Consider the main function or application",
    options: [],
  },
  {
    id: 3,
    question: "Which impacts should be calculated?",
    hint: "Decide which environmental effects matter for your study: carbon footprint, pollution (air, water, soil), human health, or a full standardized set like TRACI.",
    options: [
      {
        id: "climate",
        text: "Climate Change (GWP)",
        icon: <img src="https://img.icons8.com/?size=35&id=sq12QviUTP0G&format=png&color=0000FF" alt="" />,
        description: "Greenhouse gas emissions affecting global warming.",
      },
      {
        id: "acidification",
        text: "Acidification (AP)",
        icon: <img src="https://img.icons8.com/?size=35&id=9J4a9baLpBL7&format=png&color=0000FF" alt="" />,
        description: "Soil and water acidification from emissions.",
      },
      {
        id: "eutrophication",
        text: "Eutrophication",
        icon: <img src="https://img.icons8.com/?size=35&id=BeEur00nh48n&format=png&color=0000FF" alt="" />,
        description: "Nutrient overload in water bodies leading to algal growth.",
      },
      {
        id: "smog",
        text: "Smog formation",
        icon: <img src="https://img.icons8.com/?size=35&id=mhDOqVX0b4ID&format=png&color=0000FF" alt="" />,
        description: "Air quality impacts from ozone and particulate matter.",
      },
      {
        id: "human",
        text: "Human toxicity",
        icon: <img src="https://img.icons8.com/?size=35&id=6qznCUCGwu3i&format=png&color=0000FF" alt="" />,
        description: "Exposure risks to human health from pollutants.",
      },
      {
        id: "depletion",
        text: "Resource depletion",
        icon: <img src="https://img.icons8.com/?size=35&id=-r4KGo880Lo1&format=png&color=0000FF" alt="" />,
        description: "Consumption of non-renewable resources.",
      },
      {
        id: "TRACI",
        text: " All TRACI categories",
        icon: <img src="https://img.icons8.com/?size=35&id=6482&format=png&color=0000FF" alt="" />,
        description: "Covers the full standardized US EPA TRACI set.",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      }
    ],
  },
  {
    id: 4,
    question: "Should recycling or circularity be modeled?",
    hint: "Decide how recycling is treated in the life cycle: virgin-only for baseline, recycled-only for circular scenarios, mix for custom percentages, or AI-estimated rates for realistic averages.",
    options: [
      {
        id: "virgin",
        text: "Virgin-only",
        icon: <img src="https://img.icons8.com/?size=35&id=41303&format=png&color=0000FF" alt="" />,
        description: "Models products made entirely from virgin (new) raw materials without considering recycled content.",
      },
      {
        id: "recycled",
        text: "Recycled-only",
        icon: <RotateCcw className="w-6 h-6" />,
        description: "Used again for same purpose",
      },
      {
        id: "mix",
        text: "Mix (user specifies %)",
        icon: <img src="https://img.icons8.com/?size=35&id=Y0VQUEpYVgSf&format=png&color=0000FF" alt="" />,
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
  {
    id: 5,
    question: "How should missing values be handled?",
    hint: "Decide how to treat incomplete data: ignore it, approximate with proxies, request user input, or let AI suggest values.",
    options: [
      {
        id: "zero",
        text: "Replace with 0",
        icon: <img src="https://img.icons8.com/?size=35&id=116646&format=png&color=0000FF" alt="" />,
        description: "Treats missing data as zero, leading to conservative underestimation of impacts but may oversimplify results.",
      },
      {
        id: "proxy",
        text: "Estimate using proxy process",
        icon: <img src="https://img.icons8.com/?size=35&id=118397&format=png&color=0000FF" alt="" />,
        description: "Fills missing data with a similar process as a proxy, providing approximate but less precise results.",
      },
      {
        id: "manual",
        text: "Ask user for manual input",
        icon: <img src="https://img.icons8.com/?size=35&id=2722&format=png&color=0000FF" alt="" />,
        description: "Prompts the user to provide missing values directly, ensuring accuracy but requiring more effort.",
      },
      {
        id: "ai-decide",
        text: "Let AI Decide",
        icon: <Image src={ai} alt="AI" width={24} height={24} className="object-contain" />,
        description: "AI will analyze and choose the best approach",
      },
    ],
  }
]

export default function NonExpertMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showHint, setShowHint] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [showManualInput, setShowManualInput] = useState(false)
  const [manualInputText, setManualInputText] = useState("")
  const [textAreaInput, setTextAreaInput] = useState("")
  const [showMixInput, setShowMixInput] = useState(false)
  const [virginPercentage, setVirginPercentage] = useState("")
  const [recycledPercentage, setRecycledPercentage] = useState("")
  const mixInputRef = useRef<HTMLDivElement>(null)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (optionId: string) => {
    if (optionId === "manual") {
      setShowManualInput(true)
      return
    }

    if (optionId === "mix") {
      setShowMixInput(true)
      // Scroll to the mix input form after a short delay to ensure it's rendered
      setTimeout(() => {
        mixInputRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      }, 100)
      return
    }

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

  const handleManualInputSubmit = () => {
    if (manualInputText.trim()) {
      const newAnswers = { ...answers, [questions[currentQuestion].id]: `manual: ${manualInputText}` }
      setAnswers(newAnswers)
      setShowManualInput(false)
      setManualInputText("")
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setShowHint(false)
        } else {
          setIsComplete(true)
        }
      }, 500)
    }
  }

  const handleTextAreaSubmit = () => {
    if (textAreaInput.trim()) {
      const newAnswers = { ...answers, [questions[currentQuestion].id]: textAreaInput }
      setAnswers(newAnswers)
      setTextAreaInput("")
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setShowHint(false)
        } else {
          setIsComplete(true)
        }
      }, 500)
    }
  }

  const handleMixSubmit = () => {
    const virgin = parseFloat(virginPercentage)
    const recycled = parseFloat(recycledPercentage)
    
    if (virgin >= 0 && recycled >= 0 && (virgin + recycled) === 100) {
      const newAnswers = { ...answers, [questions[currentQuestion].id]: `mix: ${virgin}% virgin, ${recycled}% recycled` }
      setAnswers(newAnswers)
      setShowMixInput(false)
      setVirginPercentage("")
      setRecycledPercentage("")
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setShowHint(false)
        } else {
          setIsComplete(true)
        }
      }, 500)
    }
  }

  const goBack = () => {
    if (showManualInput) {
      setShowManualInput(false)
      setManualInputText("")
    } else if (showMixInput) {
      setShowMixInput(false)
      setVirginPercentage("")
      setRecycledPercentage("")
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowHint(false)
      setTextAreaInput("")
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

                {question.options.length > 0 ? (
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
                ) : (
                  <div className="mb-8">
                    <Card className="p-6 bg-white border-2 border-slate-200 rounded-xl">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        Please describe the process you want to assess:
                      </h3>
                      <textarea
                        value={textAreaInput}
                        onChange={(e) => setTextAreaInput(e.target.value)}
                        placeholder="e.g., Processing, extraction ..."
                        className="w-full h-32 p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 bg-white"
                      />
                      <div className="flex justify-end mt-4">
                        <Button
                          onClick={handleTextAreaSubmit}
                          disabled={!textAreaInput.trim()}
                          className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}

                {/* Manual Input Modal */}
                {showManualInput && (
                  <div className="mb-8">
                    <Card className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        Please provide your manual input:
                      </h3>
                      <textarea
                        value={manualInputText}
                        onChange={(e) => setManualInputText(e.target.value)}
                        placeholder="Enter your input here..."
                        className="w-full h-32 p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 bg-white"
                      />
                      <div className="flex justify-end space-x-3 mt-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowManualInput(false)
                            setManualInputText("")
                          }}
                          className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleManualInputSubmit}
                          disabled={!manualInputText.trim()}
                          className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Submit
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}

                {/* Mix Percentage Input Modal */}
                {showMixInput && (
                  <div ref={mixInputRef} className="mb-8">
                    <Card className="p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        Specify the percentage mix:
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Virgin materials (%)
                          </label>
                          <input
                            type="number"
                            value={virginPercentage}
                            onChange={(e) => {
                              const value = e.target.value
                              setVirginPercentage(value)
                              if (value) {
                                setRecycledPercentage((100 - parseFloat(value)).toString())
                              }
                            }}
                            placeholder="0-100"
                            min="0"
                            max="100"
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-slate-900 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Recycled materials (%)
                          </label>
                          <input
                            type="number"
                            value={recycledPercentage}
                            onChange={(e) => {
                              const value = e.target.value
                              setRecycledPercentage(value)
                              if (value) {
                                setVirginPercentage((100 - parseFloat(value)).toString())
                              }
                            }}
                            placeholder="0-100"
                            min="0"
                            max="100"
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-slate-900 bg-white"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-slate-600">
                          Total: {(parseFloat(virginPercentage || '0') + parseFloat(recycledPercentage || '0')).toFixed(1)}% 
                          {(parseFloat(virginPercentage || '0') + parseFloat(recycledPercentage || '0')) !== 100 && (
                            <span className="text-red-600 ml-2">
                              (Must equal 100%)
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowMixInput(false)
                            setVirginPercentage("")
                            setRecycledPercentage("")
                          }}
                          className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleMixSubmit}
                          disabled={
                            !virginPercentage || 
                            !recycledPercentage || 
                            (parseFloat(virginPercentage) + parseFloat(recycledPercentage)) !== 100
                          }
                          className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Submit
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}

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
