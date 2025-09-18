"use client"

import { useState } from "react"
import { Button } from "@/components/expert ui/button"
import { Card } from "@/components/expert ui/card"
import { Label } from "@/components/expert ui/label"
import { Slider } from "@/components/expert ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/expert ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/expert ui/tabs"
import { Badge } from "@/components/expert ui/badge"
import { ArrowLeft, ArrowRight, Settings, Zap, Truck, Recycle, Home, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

interface FormData {
  process: {
    metalType: string
    purity: number[]
    productionMethod: string
    energySource: string
    efficiency: number[]
  }
  energy: {
    electricityConsumption: number[]
    heatConsumption: number[]
    renewablePercentage: number[]
    gridEmissionFactor: number[]
  }
  transport: {
    rawMaterialDistance: number[]
    distributionDistance: number[]
    transportMode: string
    fuelType: string
    loadFactor: number[]
  }
  endOfLife: {
    recyclingRate: number[]
    landfillRate: number[]
    incinerationRate: number[]
    reuseRate: number[]
    collectionEfficiency: number[]
  }
}

export default function ExpertMode() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("process")
  const [isComplete, setIsComplete] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    process: {
      metalType: "",
      purity: [95],
      productionMethod: "",
      energySource: "",
      efficiency: [85],
    },
    energy: {
      electricityConsumption: [1500],
      heatConsumption: [800],
      renewablePercentage: [30],
      gridEmissionFactor: [0.5],
    },
    transport: {
      rawMaterialDistance: [500],
      distributionDistance: [200],
      transportMode: "",
      fuelType: "",
      loadFactor: [80],
    },
    endOfLife: {
      recyclingRate: [75],
      landfillRate: [15],
      incinerationRate: [5],
      reuseRate: [5],
      collectionEfficiency: [90],
    },
  })

  const updateFormData = (section: keyof FormData, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const tabs = [
    { id: "process", label: "Process", icon: Settings, color: "text-green-600" },
    { id: "energy", label: "Energy", icon: Zap, color: "text-yellow-600" },
    { id: "transport", label: "Transport", icon: Truck, color: "text-blue-600" },
    { id: "endOfLife", label: "End-of-Life", icon: Recycle, color: "text-purple-600" },
  ]

  const handleComplete = () => {
    // Redirect directly to dashboard
    router.push('/Dashboard')
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center border-2 border-green-200 bg-white shadow-xl">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-slate-900">Expert Analysis Complete!</h1>
          <p className="text-slate-600 mb-8 text-pretty">
            Your comprehensive LCA parameters have been processed. The advanced analysis is ready with detailed insights
            and technical recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg" asChild>
              <Link href="/dashboard">View Advanced Results</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50" asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-slate-200 backdrop-blur-sm bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Badge variant="outline" className="px-4 py-2 border-green-500 text-green-700 bg-green-50">
              Expert Mode
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">Advanced LCA Configuration</h1>
            <p className="text-slate-600 text-lg">
              Configure detailed parameters for comprehensive life cycle assessment
            </p>
          </div>

          {/* Form Wizard */}
          <Card className="p-8 border-2 border-slate-200 bg-white shadow-xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-100">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {/* Process Tab */}
              <TabsContent value="process" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="metalType" className="text-base font-semibold text-slate-900">
                        Metal Type
                      </Label>
                      <Select
                        value={formData.process.metalType}
                        onValueChange={(value) => updateFormData("process", "metalType", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select metal type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aluminum">Aluminum</SelectItem>
                          <SelectItem value="copper">Copper</SelectItem>
                          <SelectItem value="steel">Steel</SelectItem>
                          <SelectItem value="titanium">Titanium</SelectItem>
                          <SelectItem value="zinc">Zinc</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Metal Purity (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.process.purity}
                          onValueChange={(value) => updateFormData("process", "purity", value)}
                          max={100}
                          min={50}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>50%</span>
                          <span className="font-medium text-green-600">{formData.process.purity[0]}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="productionMethod" className="text-base font-semibold text-slate-900">
                        Production Method
                      </Label>
                      <Select
                        value={formData.process.productionMethod}
                        onValueChange={(value) => updateFormData("process", "productionMethod", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select production method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary Production</SelectItem>
                          <SelectItem value="secondary">Secondary Production (Recycled)</SelectItem>
                          <SelectItem value="hybrid">Hybrid Process</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Process Efficiency (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.process.efficiency}
                          onValueChange={(value) => updateFormData("process", "efficiency", value)}
                          max={100}
                          min={60}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>60%</span>
                          <span className="font-medium text-yellow-600">{formData.process.efficiency[0]}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Energy Tab */}
              <TabsContent value="energy" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Electricity Consumption (kWh/kg)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.energy.electricityConsumption}
                          onValueChange={(value) => updateFormData("energy", "electricityConsumption", value)}
                          max={3000}
                          min={500}
                          step={50}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>500</span>
                          <span className="font-medium text-yellow-600">
                            {formData.energy.electricityConsumption[0]} kWh/kg
                          </span>
                          <span>3000</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Heat Consumption (MJ/kg)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.energy.heatConsumption}
                          onValueChange={(value) => updateFormData("energy", "heatConsumption", value)}
                          max={1500}
                          min={200}
                          step={25}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>200</span>
                          <span className="font-medium text-yellow-600">{formData.energy.heatConsumption[0]} MJ/kg</span>
                          <span>1500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Renewable Energy (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.energy.renewablePercentage}
                          onValueChange={(value) => updateFormData("energy", "renewablePercentage", value)}
                          max={100}
                          min={0}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>0%</span>
                          <span className="font-medium text-green-600">{formData.energy.renewablePercentage[0]}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Grid Emission Factor (kg CO₂/kWh)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.energy.gridEmissionFactor}
                          onValueChange={(value) => updateFormData("energy", "gridEmissionFactor", value)}
                          max={1.0}
                          min={0.1}
                          step={0.05}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>0.1</span>
                          <span className="font-medium text-yellow-600">
                            {formData.energy.gridEmissionFactor[0]} kg CO₂/kWh
                          </span>
                          <span>1.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Transport Tab */}
              <TabsContent value="transport" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Raw Material Transport Distance (km)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.transport.rawMaterialDistance}
                          onValueChange={(value) => updateFormData("transport", "rawMaterialDistance", value)}
                          max={2000}
                          min={50}
                          step={50}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>50 km</span>
                          <span className="font-medium text-blue-600">
                            {formData.transport.rawMaterialDistance[0]} km
                          </span>
                          <span>2000 km</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="transportMode" className="text-base font-semibold text-slate-900">
                        Primary Transport Mode
                      </Label>
                      <Select
                        value={formData.transport.transportMode}
                        onValueChange={(value) => updateFormData("transport", "transportMode", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select transport mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="rail">Rail</SelectItem>
                          <SelectItem value="ship">Ship</SelectItem>
                          <SelectItem value="multimodal">Multimodal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Distribution Distance (km)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.transport.distributionDistance}
                          onValueChange={(value) => updateFormData("transport", "distributionDistance", value)}
                          max={1000}
                          min={25}
                          step={25}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>25 km</span>
                          <span className="font-medium text-blue-600">
                            {formData.transport.distributionDistance[0]} km
                          </span>
                          <span>1000 km</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Load Factor (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.transport.loadFactor}
                          onValueChange={(value) => updateFormData("transport", "loadFactor", value)}
                          max={100}
                          min={40}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>40%</span>
                          <span className="font-medium text-blue-600">{formData.transport.loadFactor[0]}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* End-of-Life Tab */}
              <TabsContent value="endOfLife" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Recycling Rate (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.endOfLife.recyclingRate}
                          onValueChange={(value) => updateFormData("endOfLife", "recyclingRate", value)}
                          max={100}
                          min={0}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>0%</span>
                          <span className="font-medium text-purple-600">{formData.endOfLife.recyclingRate[0]}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Landfill Rate (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.endOfLife.landfillRate}
                          onValueChange={(value) => updateFormData("endOfLife", "landfillRate", value)}
                          max={50}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>0%</span>
                          <span className="font-medium text-red-600">{formData.endOfLife.landfillRate[0]}%</span>
                          <span>50%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-semibold text-slate-900">Reuse Rate (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.endOfLife.reuseRate}
                          onValueChange={(value) => updateFormData("endOfLife", "reuseRate", value)}
                          max={30}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>0%</span>
                          <span className="font-medium text-green-600">{formData.endOfLife.reuseRate[0]}%</span>
                          <span>30%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-semibold text-slate-900">Collection Efficiency (%)</Label>
                      <div className="mt-4 space-y-2">
                        <Slider
                          value={formData.endOfLife.collectionEfficiency}
                          onValueChange={(value) => updateFormData("endOfLife", "collectionEfficiency", value)}
                          max={100}
                          min={50}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                          <span>50%</span>
                          <span className="font-medium text-purple-600">
                            {formData.endOfLife.collectionEfficiency[0]}%
                          </span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
              <div className="text-sm text-slate-500">Configure all parameters for comprehensive analysis</div>
              <Button onClick={handleComplete} size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg">
                Generate Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
