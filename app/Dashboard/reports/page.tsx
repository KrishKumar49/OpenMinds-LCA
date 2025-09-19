"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card-homepage"
import { Download, Search, Bell, Settings, Calendar, BarChart3, FileText, PieChart, Globe } from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard-ui/dashboardsidebarFix"

export default function Reports() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <DashboardSidebar />

        <div className="ml-64 min-h-screen flex flex-col flex-1">
          <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
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
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Add new assessment</Button>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle>Generate New Report</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <FileText className="w-4 h-4 mr-2" />
                      Sustainability Report
                    </Button>
                    <Button variant="outline" className="w-full bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Impact Assessment Report
                    </Button>
                    <Button variant="outline" className="w-full bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                      <PieChart className="w-4 h-4 mr-2" />
                      Material Analysis Report
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Recent Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-sm text-slate-900">Q1 2024 Report</p>
                            <p className="text-xs text-slate-600">Generated 2 days ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-sm text-slate-900">Material Analysis</p>
                            <p className="text-xs text-slate-600">Generated 1 week ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-slate-900">Report Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-slate-200 rounded-lg text-center bg-slate-50">
                      <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium mb-1 text-slate-900">Executive Summary</h3>
                      <p className="text-xs text-slate-600 mb-3">High-level overview for stakeholders</p>
                      <Button size="sm" variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                        Use Template
                      </Button>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg text-center bg-slate-50">
                      <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium mb-1 text-slate-900">Technical Report</h3>
                      <p className="text-xs text-slate-600 mb-3">Detailed analysis and methodology</p>
                      <Button size="sm" variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                        Use Template
                      </Button>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg text-center bg-slate-50">
                      <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium mb-1 text-slate-900">Compliance Report</h3>
                      <p className="text-xs text-slate-600 mb-3">Regulatory compliance documentation</p>
                      <Button size="sm" variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                        Use Template
                      </Button>
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
