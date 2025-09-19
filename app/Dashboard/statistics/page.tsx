"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card-homepage"
import { Search, Bell, Settings, Calendar, MoreHorizontal } from "lucide-react"
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { DashboardSidebar } from "@/components/dashboard-ui/dashboardsidebarFix"

const traciImpactsData = [
  { category: "Climate", impact: 36.58, originalValue: 0.3658, unit: "", displayValue: "0.3658 Kg CO₂ eq/Kg" },
  { category: "Acidification", impact: 0.5, originalValue: 0.0005, unit: "", displayValue: `0.0005 SO₂ eq/kg`},
  { category: "Eutrophication", impact: 0.1, originalValue: 0, unit: "", displayValue: "0 Kg PO₄ eq/Kg" },
  { category: "Ozone", impact: 0.1, originalValue: 0, unit: "", displayValue: "0 Kg C₂H₄ eq/Kg" },
  { category: "Photochemical", impact: 9.89, originalValue: 0.0989, unit: "", displayValue: "0.0989 Kg C₂H₄ eq/Kg" },
  { category: "Health", impact: 3.54, originalValue: 0.0354, unit: "", displayValue: "0.0354 Kg PM10 eq/Kg" },
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

export default function Statistics() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <DashboardSidebar />

        <div className="ml-64 min-h-screen flex flex-col flex-1">
          <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-slate-900">Statistics</h1>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>August 2025 - September 2025</span>
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

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Recyclability Potential</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-8 border-slate-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">20%</div>
                          <div className="text-sm text-slate-500">Recyclable</div>
                        </div>
                      </div>
                      <svg className="absolute top-0 left-0 w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#10b981"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 56 * 0.2} ${2 * Math.PI * 56 * 0.8}`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-slate-600">low recyclability potential</p>
                  </div>
                </Card>

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

                <Card className="p-6 bg-white border border-slate-200 lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">TRACI Impact Categories</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={traciImpactsData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis 
                          dataKey="category"
                          tick={{ fontSize: 12 }} 
                          stroke="#6b7280"
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis
                          tick={{ fontSize: 12 }}
                          stroke="#6b7280"
                          domain={[0, 40]}
                          label={{ value: 'Impact × 100', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' } }}
                        />
                        <Tooltip
                          formatter={(value, name, props) => [`${props.payload.displayValue}`, "Actual Impact"]}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            fontSize: "12px",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                          labelStyle={{ color: "#374151", fontWeight: "500" }}
                        />
                        <Line 
                          type="monotone"
                          dataKey="impact" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: "#10b981", strokeWidth: 2, fill: "#ffffff" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-slate-500 text-center">
                      Impact values scaled for visibility. Hover for actual values.
                    </p>
                  </div>
                </Card>

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
                                style={{ width: `${(item.virgin / (item.virgin + item.recycled)) * 100}%` }}
                              />
                            </div>
                            <div className="text-xs text-slate-600 mt-1">{item.virgin}</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-slate-500 mb-1">Recycled</div>
                            <div className="h-2 bg-green-200 rounded">
                              <div
                                className="h-2 bg-green-500 rounded"
                                style={{ width: `${(item.recycled / (item.virgin + item.recycled)) * 100}%` }}
                              />
                            </div>
                            <div className="text-xs text-slate-600 mt-1">{item.recycled}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

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
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-slate-600">Aluminum</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-600">Steel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="text-sm text-slate-600">Copper</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm text-slate-600">Other</span>
                    </div>
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
