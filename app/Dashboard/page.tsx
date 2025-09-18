"use client"

import { useState } from "react"
import { Button } from "@/components/ui/buttonDashboard"
import { Card } from "@/components/ui/cardDashboard"
import { Download, Recycle, Globe, TrendingUp, TrendingDown, BarChart3, Activity, Search, Bell, Settings, User, MoreHorizontal, Calendar, ArrowRight, RotateCcw, Trash2, Factory } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {
  PieChart as RechartsPieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

// Data for charts
const inputsData = [
  { name: "Recycled", value: 65, color: "#10b981" },
  { name: "Virgin", value: 35, color: "#ef4444" },
]

const recyclabilityData = [
  { name: "Recyclable", value: 89, color: "#10b981" },
  { name: "Non-recyclable", value: 11, color: "#ef4444" },
]

const traciImpactsData = [
  { category: "Climate Change", impact: 4.2, unit: "kg CO₂ eq" },
  { category: "Acidification", impact: 0.032, unit: "kg SO₂ eq" },
  { category: "Eutrophication", impact: 0.018, unit: "kg PO₄ eq" },
  { category: "Ozone Depletion", impact: 2.1e-7, unit: "kg CFC-11 eq" },
  { category: "Smog Formation", impact: 0.024, unit: "kg NOₓ eq" },
  { category: "Human Health", impact: 1.8e-6, unit: "CTUh" },
]

const contributionData = [
  { phase: "Raw Materials", aluminum: 45, steel: 25, copper: 15, other: 15 },
  { phase: "Manufacturing", aluminum: 35, steel: 30, copper: 20, other: 15 },
  { phase: "Transport", aluminum: 8, steel: 8, copper: 4, other: 5 },
  { phase: "Use Phase", aluminum: 2, steel: 2, copper: 1, other: 2 },
  { phase: "End of Life", aluminum: -5, steel: -3, copper: -2, other: 1 },
]

const radarData = [
  { subject: "Climate Change", A: 120, B: 110, fullMark: 150 },
  { subject: "Acidification", A: 98, B: 130, fullMark: 150 },
  { subject: "Eutrophication", A: 86, B: 130, fullMark: 150 },
  { subject: "Ozone Depletion", A: 99, B: 100, fullMark: 150 },
  { subject: "Smog Formation", A: 85, B: 90, fullMark: 150 },
  { subject: "Human Health", A: 65, B: 85, fullMark: 150 },
]

const comparisonData = [
  { category: "Climate Change", virgin: 8.7, recycled: 4.2, saving: 52 },
  { category: "Energy Use", virgin: 15.2, recycled: 9.8, saving: 36 },
  { category: "Water Use", virgin: 125, recycled: 78, saving: 38 },
  { category: "Waste Gen.", virgin: 2.3, recycled: 0.8, saving: 65 },
]

export default function Dashboard() {
  const [scenario, setScenario] = useState<"linear" | "circular">("circular")
  const [selectedMetal] = useState("aluminum")

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-gradient-to-b from-green-800 to-green-900 text-white min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">CircularLCA</span>
            </div>

            <div className="mb-8">
              <p className="text-xs text-green-200 uppercase tracking-wider mb-4">MENU</p>
              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-white/10 text-white"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Overview</span>
                </Link>
                <Link
                  href="/statistics"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  <span>Statistics</span>
                </Link>
                <Link
                  href="/assessments"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Assessments</span>
                </Link>
                <Link
                  href="/materials"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Recycle className="w-4 h-4" />
                  <span>Materials</span>
                </Link>
                <Link
                  href="/reports"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Reports</span>
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs text-green-200 uppercase tracking-wider mb-4">GENERAL</p>
              <nav className="space-y-2">
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/security"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-green-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Security</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* User Profile */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium">LCA Expert</p>
              <p className="text-xs text-green-200">expert@circularlca.com</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>January 2024 - May 2024</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search anything in CircularLCA..."
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-slate-900"
                  />
                </div>
                <Button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 p-2">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 p-2">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Add new assessment</Button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-green-600 to-green-700 text-white border-green-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Update</span>
                </div>
                <p className="text-sm text-green-100 mb-2">Feb 12th 2024</p>
                <h3 className="text-lg font-semibold mb-1">Circularity increased</h3>
                <p className="text-2xl font-bold mb-2">40% in 1 week</p>
                <Button className="bg-transparent hover:bg-white/20 text-white p-0 h-auto font-normal">
                  See Statistics →
                </Button>
              </Card>

              <Card className="p-6 bg-white border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Net Impact</h3>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-2">4.2</p>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+35% from last month</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">kg CO₂ eq</p>
              </Card>

              <Card className="p-6 bg-white border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Total Recyclability</h3>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-2">89%</p>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+24% from last month</span>
                </div>
              </Card>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Main Charts */}
              <div className="lg:col-span-2 space-y-6">
                {/* Top Section - Inputs & Circularity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Material Inputs Pie Chart */}
                  <Card className="p-6 bg-white border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900">Material Inputs</h3>
                      <MoreHorizontal className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={inputsData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {inputsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                      {inputsData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm text-slate-600">
                            {item.name}: {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Recyclability Potential Gauge */}
                  <Card className="p-6 bg-white border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900">Recyclability Potential</h3>
                      <MoreHorizontal className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="h-48 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-8 border-slate-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">89%</div>
                            <div className="text-sm text-slate-500">Recyclable</div>
                          </div>
                        </div>
                        <div
                          className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-green-600 border-r-transparent border-b-transparent"
                          style={{ transform: "rotate(45deg)" }}
                        />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-slate-600">High recyclability potential</p>
                    </div>
                  </Card>
                </div>

                {/* TRACI Impact Categories Bar Chart */}
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">TRACI Impact Categories</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={traciImpactsData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis type="number" tick={{ fontSize: 12 }} stroke="#6b7280" />
                        <YAxis
                          dataKey="category"
                          type="category"
                          tick={{ fontSize: 12 }}
                          stroke="#6b7280"
                          width={100}
                        />
                        <Tooltip
                          formatter={(value, name, props) => [`${value} ${props.payload.unit}`, "Impact"]}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                          }}
                        />
                        <Bar dataKey="impact" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Contribution Analysis Stacked Bar Chart */}
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Contribution Analysis</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={contributionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="phase" tick={{ fontSize: 12 }} stroke="#6b7280" />
                        <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                          }}
                        />
                        <Bar dataKey="aluminum" stackId="a" fill="#10b981" name="Aluminum" />
                        <Bar dataKey="steel" stackId="a" fill="#3b82f6" name="Steel" />
                        <Bar dataKey="copper" stackId="a" fill="#f59e0b" name="Copper" />
                        <Bar dataKey="other" stackId="a" fill="#ef4444" name="Other" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Material Flow Visualization with Photos and Scenarios */}
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-slate-900">Material Flow Visualization</h3>
                    <div className="flex items-center space-x-2">
                      <Button
                        className={`${
                          scenario === "linear" 
                            ? "bg-red-600 hover:bg-red-700 text-white" 
                            : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                        } px-3 py-1 text-sm`}
                        onClick={() => setScenario("linear")}
                      >
                        Linear
                      </Button>
                      <Button
                        className={`${
                          scenario === "circular" 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                        } px-3 py-1 text-sm`}
                        onClick={() => setScenario("circular")}
                      >
                        Circular
                      </Button>
                    </div>
                  </div>

                  {/* Material Photos */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-slate-700 mb-4">Materials in Analysis</h4>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-lg overflow-hidden bg-slate-100 border-2 border-blue-200">
                          <Image src="/aluminum-ingots-metallic-silver.jpg" alt="Aluminum" width={80} height={80} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">Aluminum</p>
                        <p className="text-xs text-slate-500">65% recycled</p>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-lg overflow-hidden bg-slate-100 border-2 border-slate-300">
                          <Image src="/steel-bars-metallic-gray.jpg" alt="Steel" width={80} height={80} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">Steel</p>
                        <p className="text-xs text-slate-500">45% recycled</p>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-lg overflow-hidden bg-slate-100 border-2 border-orange-200">
                          <Image src="/copper-plumbing.png" alt="Copper" width={80} height={80} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs font-medium text-slate-700">Copper</p>
                        <p className="text-xs text-slate-500">78% recycled</p>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-lg overflow-hidden bg-slate-100 border-2 border-purple-200">
                          <Image
                            src="/mixed-metals-alloy-components.jpg"
                            alt="Other Metals"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs font-medium text-slate-700">Other</p>
                        <p className="text-xs text-slate-500">32% recycled</p>
                      </div>
                    </div>
                  </div>

                  {/* Scenario Visualization */}
                  <div className="relative">
                    {scenario === "linear" ? (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-sm font-medium text-red-800 mb-4 flex items-center">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Linear Economy Model
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
                              <Factory className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-xs font-medium text-red-700">Extract</p>
                            <p className="text-xs text-red-500">Raw Materials</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-red-400" />
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
                              <Settings className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-xs font-medium text-red-700">Make</p>
                            <p className="text-xs text-red-500">Manufacturing</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-red-400" />
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
                              <User className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-xs font-medium text-red-700">Use</p>
                            <p className="text-xs text-red-500">Consumption</p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-red-400" />
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
                              <Trash2 className="w-8 h-8 text-red-600" />
                            </div>
                            <p className="text-xs font-medium text-red-700">Dispose</p>
                            <p className="text-xs text-red-500">Waste</p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-red-100 rounded-lg">
                          <p className="text-xs text-red-700">
                            <strong>Impact:</strong> High resource depletion, maximum waste generation, single-use
                            lifecycle with 8.7 kg CO₂ eq emissions
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-sm font-medium text-green-800 mb-4 flex items-center">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Circular Economy Model
                        </h4>
                        <div className="relative">
                          <div className="flex items-center justify-center mb-6">
                            <div className="relative w-64 h-64">
                              <div className="absolute inset-0 border-4 border-green-300 rounded-full border-dashed"></div>
                              
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                                    <Recycle className="w-6 h-6 text-green-600" />
                                  </div>
                                  <p className="text-xs font-medium text-green-700">Recycle</p>
                                </div>
                              </div>

                              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                                    <Settings className="w-6 h-6 text-green-600" />
                                  </div>
                                  <p className="text-xs font-medium text-green-700">Make</p>
                                </div>
                              </div>

                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                                    <User className="w-6 h-6 text-green-600" />
                                  </div>
                                  <p className="text-xs font-medium text-green-700">Use</p>
                                </div>
                              </div>

                              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-1">
                                    <RotateCcw className="w-6 h-6 text-green-600" />
                                  </div>
                                  <p className="text-xs font-medium text-green-700">Reuse</p>
                                </div>
                              </div>

                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">89%</div>
                                  <div className="text-xs text-green-700">Material Recovery</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-100 rounded-lg">
                          <p className="text-xs text-green-700">
                            <strong>Impact:</strong> Reduced resource extraction, minimized waste, closed-loop system
                            with 4.2 kg CO₂ eq emissions (52% reduction)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Scenario Comparison Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-red-800 mb-2">Linear Scenario</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-xs text-red-600">CO₂ Emissions:</span>
                          <span className="text-xs font-medium text-red-800">8.7 kg CO₂ eq</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-red-600">Energy Use:</span>
                          <span className="text-xs font-medium text-red-800">15.2 MJ</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-red-600">Waste Generated:</span>
                          <span className="text-xs font-medium text-red-800">2.3 kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-red-600">Material Recovery:</span>
                          <span className="text-xs font-medium text-red-800">0%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-green-800 mb-2">Circular Scenario</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-xs text-green-600">CO₂ Emissions:</span>
                          <span className="text-xs font-medium text-green-800">4.2 kg CO₂ eq</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-green-600">Energy Use:</span>
                          <span className="text-xs font-medium text-green-800">9.8 MJ</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-green-600">Waste Generated:</span>
                          <span className="text-xs font-medium text-green-800">0.8 kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-green-600">Material Recovery:</span>
                          <span className="text-xs font-medium text-green-800">89%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Multi-Impact Radar Chart */}
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Multi-Impact Profile</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                        <PolarRadiusAxis tick={{ fontSize: 10 }} />
                        <Radar name="Current" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                        <Radar name="Baseline" dataKey="B" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-slate-600">Current</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm text-slate-600">Baseline</span>
                    </div>
                  </div>
                </Card>

                {/* Virgin vs Recycled Comparison */}
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Virgin vs Recycled</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="space-y-4">
                    {comparisonData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-slate-700">{item.category}</span>
                          <span className="text-sm font-bold text-green-600">-{item.saving}%</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex-1">
                            <div className="text-xs text-slate-500 mb-1">Virgin</div>
                            <div className="h-2 bg-red-200 rounded">
                              <div
                                className="h-2 bg-red-500 rounded"
                                style={{ width: `${(item.virgin / Math.max(item.virgin, item.recycled)) * 100}%` }}
                              />
                            </div>
                            <div className="text-xs text-slate-600 mt-1">{item.virgin}</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-slate-500 mb-1">Recycled</div>
                            <div className="h-2 bg-green-200 rounded">
                              <div
                                className="h-2 bg-green-500 rounded"
                                style={{ width: `${(item.recycled / Math.max(item.virgin, item.recycled)) * 100}%` }}
                              />
                            </div>
                            <div className="text-xs text-slate-600 mt-1">{item.recycled}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Promotional Card */}
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-2xl flex items-center justify-center">
                      <Recycle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      Level up your LCA analysis to the next level.
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      An easy way to manage sustainability with care and precision.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Upgrade to CircularLCA+</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}