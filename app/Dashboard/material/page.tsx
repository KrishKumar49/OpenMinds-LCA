"use client"

import { Button } from "@/components/expert ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/expert ui/card"
import { Badge } from "@/components/expert ui/badge"
import { Search, Bell, Settings, Calendar, Database } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-ui/dashboardsidebarFix"

export default function Materials() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <DashboardSidebar />

        <div className="ml-64 min-h-screen flex flex-col flex-1">
          <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-slate-900">Materials</h1>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>August 2025 - September 2025</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search materials..."
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-slate-900"
                  />
                </div>
                <Button variant="outline" size="sm" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button className="bg-green-600 text-white hover:bg-green-700">Add Material</Button>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-slate-900">
                      Aluminum
                      <Badge variant="secondary">65% Recycled</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Carbon Footprint:</span>
                        <span className="font-medium text-slate-900">4.2 kg CO₂ eq</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Recyclability:</span>
                        <span className="font-medium text-green-600">High</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Availability:</span>
                        <span className="font-medium text-slate-900">In Stock</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-slate-900">
                      Steel
                      <Badge variant="secondary">45% Recycled</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Carbon Footprint:</span>
                        <span className="font-medium text-slate-900">6.8 kg CO₂ eq</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Recyclability:</span>
                        <span className="font-medium text-green-600">High</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Availability:</span>
                        <span className="font-medium text-slate-900">In Stock</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-slate-900">
                      Copper
                      <Badge variant="secondary">78% Recycled</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Carbon Footprint:</span>
                        <span className="font-medium text-slate-900">3.1 kg CO₂ eq</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Recyclability:</span>
                        <span className="font-medium text-green-600">Very High</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Availability:</span>
                        <span className="font-medium text-slate-900">Limited</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Material Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50">
                      <div className="flex items-center space-x-4">
                        <Database className="w-8 h-8 text-green-600" />
                        <div>
                          <h3 className="font-medium text-slate-900">Comprehensive Material Library</h3>
                          <p className="text-sm text-slate-600">Access to 500+ materials with LCA data</p>
                        </div>
                      </div>
                      <Button variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">Browse Library</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
