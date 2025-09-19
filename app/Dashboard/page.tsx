"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/cardDashboard"
import { Badge } from "@/components/ui/badge-home"
import {
  TrendingUp,
  TrendingDown,
  Search,
  Bell,
  Settings,
  MoreHorizontal,
  Calendar,
  ArrowRight,
  RotateCcw,
  Trash2,
  Factory,
  User,
  Recycle,
} from "lucide-react"
import { PieChart as RechartsPieChart, Cell, Pie, ResponsiveContainer, Tooltip } from "recharts"
import { DashboardSidebar } from "@/components/dashboard-ui/dashboardsidebarFix"


// Import Google Fonts
import { Cinzel, Oswald, Didact_Gothic, Roboto_Mono, Merriweather } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})


const inputsData = [
  { name: "Recycled", value: 52, color: "#10b981" },
  { name: "Virgin", value: 48, color: "#ef4444" },
]

export default function Dashboard() {
  const [scenario, setScenario] = useState<"linear" | "circular">("circular")

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <DashboardSidebar />

        {/* Main Content Area */}
        <div className="ml-64 min-h-screen flex flex-col flex-1">
          {/* Sticky Header */}
          <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
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

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Net Impact</h3>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="mb-3">
                    <p className="text-3xl font-bold text-slate-900 mb-1">4.2</p>
                    <p className="text-sm text-slate-600 mb-3">kg CO₂ eq</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Previous</span>
                      <span className="text-xs font-medium text-slate-700">6.5 kg CO₂ eq</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Improvement</span>
                      <div className="flex items-center space-x-1">
                        <TrendingDown className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-medium text-green-600">35% reduction</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Recycle className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Total Recyclability</h3>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="mb-3">
                    <p className="text-3xl font-bold text-slate-900 mb-1">89%</p>
                    <p className="text-sm text-slate-600 mb-3">Material Recovery Rate</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Previous Period</span>
                      <span className="text-xs font-medium text-slate-700">72%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Growth</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-medium text-green-600">+24% increase</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">Material Inputs</h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="h-24 flex items-center justify-center mb-3">
                    <ResponsiveContainer width="80%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={inputsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={25}
                          outerRadius={40}
                          paddingAngle={2}
                          dataKey="value"
                          cursor="pointer"
                        >
                          {inputsData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color}
                              className="hover:opacity-80 transition-opacity duration-200"
                            />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            fontSize: '12px'
                          }}
                          formatter={(value, name) => [`${value}%`, name]}
                          labelStyle={{ color: '#334155', fontWeight: '500' }}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center space-x-3">
                    {inputsData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs text-slate-600 font-medium">
                          {item.name}: {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Material Flow Visualization */}
              <Card className="p-6 bg-white border border-slate-200 mb-6">
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
                        <strong>Impact:</strong> High resource depletion, maximum waste generation, single-use lifecycle
                        with 8.7 kg CO₂ eq emissions
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-green-800 mb-4 flex items-center">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Circular Economy Model
                    </h4>
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
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-xs text-green-700">
                        <strong>Impact:</strong> Reduced resource extraction, minimized waste, closed-loop system with
                        4.2 kg CO₂ eq emissions (52% reduction)
                      </p>
                    </div>
                  </div>
                )}
              </Card>

              {/* Recent Activity */}
              <Card className="p-6 bg-white border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Recent Activity</h3>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">New assessment completed</p>
                      <p className="text-xs text-slate-500">Aluminum recycling process - 2 hours ago</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">Report generated</p>
                      <p className="text-xs text-slate-500">Q1 2024 Sustainability Report - 4 hours ago</p>
                    </div>
                    <Badge variant="outline">Generated</Badge>
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
