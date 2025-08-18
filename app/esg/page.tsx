"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Leaf, 
  Users, 
  Shield, 
  TrendingUp, 
  Award,
  Globe,
  Heart,
  Target,
  CheckCircle,
  AlertCircle
} from "lucide-react"

// ESG Hero 컴포넌트
function ESGHero() {
  return (
    <section className="w-full bg-[#D9DEE6]">
      <div className="mx-auto max-w-[1200px] h-[360px] md:h-[420px] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white/95 text-[28px] md:text-[32px] font-extrabold tracking-[-0.02em]">
          지속가능경영 ESG
        </h1>
        <p className="text-white/95 text-lg md:text-2xl font-light">
          환경(Environment), 사회(Social), 거버넌스(Governance)를 통한 
          지속가능한 미래를 만들어갑니다
        </p>
      </div>
    </section>
  )
}

// ESG 메인 콘텐츠 컴포넌트
function ESGContent() {
  const [environmentalProgress] = useState(85)
  const [socialProgress] = useState(78)
  const [governanceProgress] = useState(92)

  const environmentalMetrics = [
    { name: "탄소배출량 감소", value: "23%", status: "success", icon: Leaf },
    { name: "재생에너지 사용률", value: "45%", status: "progress", icon: Globe },
    { name: "폐기물 재활용률", value: "89%", status: "success", icon: Heart },
    { name: "수자원 절약", value: "31%", status: "progress", icon: Shield }
  ]

  const socialMetrics = [
    { name: "직원 만족도", value: "4.2/5.0", status: "success", icon: Users },
    { name: "지역사회 기여", value: "12개 프로그램", status: "success", icon: Heart },
    { name: "공급망 투명성", value: "87%", status: "progress", icon: Shield },
    { name: "안전사고율", value: "0.02%", status: "success", icon: CheckCircle }
  ]

  const governanceMetrics = [
    { name: "이사회 독립성", value: "100%", status: "success", icon: Shield },
    { name: "윤리경영 준수", value: "A등급", status: "success", icon: Award },
    { name: "정보공개 투명성", value: "95%", status: "success", icon: Target },
    { name: "리스크 관리", value: "우수", status: "success", icon: CheckCircle }
  ]

  const recentAchievements = [
    {
      title: "친환경 인증 획득",
      description: "ISO 14001 환경경영시스템 인증",
      date: "2024.01",
      category: "환경"
    },
    {
      title: "사회공헌상 수상",
      description: "지역사회 발전 기여 공로 인정",
      date: "2024.02",
      category: "사회"
    },
    {
      title: "ESG 평가 A등급",
      description: "한국기업지배구조원 ESG 평가",
      date: "2024.03",
      category: "거버넌스"
    }
  ]

  const upcomingGoals = [
    {
      title: "탄소중립 2050",
      description: "2050년까지 탄소중립 달성",
      target: "2025년까지 로드맵 수립",
      icon: Target
    },
    {
      title: "100% 재생에너지",
      description: "2030년까지 재생에너지 100% 전환",
      target: "2026년까지 60% 달성",
      icon: Globe
    },
    {
      title: "공급망 ESG 관리",
      description: "전 공급망 ESG 기준 적용",
      target: "2025년까지 95% 적용",
      icon: Shield
    }
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24">
        {/* ESG 점수 개요 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-green-800 text-lg">
                <Leaf className="w-6 h-6 mr-3" />
                환경 (E)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-800 mb-3">{environmentalProgress}점</div>
              <Progress value={environmentalProgress} className="h-3 bg-green-100 mb-3" />
              <p className="text-sm text-green-600">탄소중립 및 친환경 경영</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-blue-800 text-lg">
                <Users className="w-6 h-6 mr-3" />
                사회 (S)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-800 mb-3">{socialProgress}점</div>
              <Progress value={socialProgress} className="h-3 bg-blue-100 mb-3" />
              <p className="text-sm text-blue-600">사회적 가치 창출</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-purple-800 text-lg">
                <Shield className="w-6 h-6 mr-3" />
                거버넌스 (G)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-800 mb-3">{governanceProgress}점</div>
              <Progress value={governanceProgress} className="h-3 bg-purple-100 mb-3" />
              <p className="text-sm text-purple-600">투명하고 윤리적인 경영</p>
            </CardContent>
          </Card>
        </div>

        {/* 상세 지표 */}
        <Tabs defaultValue="environmental" className="mb-12 sm:mb-16">
          <TabsList className="grid w-full grid-cols-3 h-14">
            <TabsTrigger value="environmental" className="text-base font-semibold">환경 (E)</TabsTrigger>
            <TabsTrigger value="social" className="text-base font-semibold">사회 (S)</TabsTrigger>
            <TabsTrigger value="governance" className="text-base font-semibold">거버넌스 (G)</TabsTrigger>
          </TabsList>

          <TabsContent value="environmental" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {environmentalMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-6 h-6 text-green-600" />
                      <Badge 
                        variant={metric.status === "success" ? "default" : "secondary"}
                        className={metric.status === "success" ? "bg-green-100 text-green-800 border-green-200" : "bg-yellow-100 text-yellow-800 border-yellow-200"}
                      >
                        {metric.status === "success" ? "달성" : "진행중"}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {socialMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-6 h-6 text-blue-600" />
                      <Badge 
                        variant={metric.status === "success" ? "default" : "secondary"}
                        className={metric.status === "success" ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-yellow-100 text-yellow-800 border-yellow-200"}
                      >
                        {metric.status === "success" ? "달성" : "진행중"}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="governance" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {governanceMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <metric.icon className="w-6 h-6 text-purple-600" />
                      <Badge 
                        variant={metric.status === "success" ? "default" : "secondary"}
                        className={metric.status === "success" ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-yellow-100 text-yellow-800 border-yellow-200"}
                      >
                        {metric.status === "success" ? "달성" : "진행중"}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 최근 성과 및 향후 목표 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* 최근 성과 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-gray-900 text-xl">
                <Award className="w-6 h-6 mr-3 text-yellow-600" />
                최근 성과
              </CardTitle>
              <CardDescription className="text-base">ESG 관련 주요 성과 및 인증</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <Badge variant="outline" className="text-xs border-gray-300">
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    <p className="text-xs text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 향후 목표 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-gray-900 text-xl">
                <Target className="w-6 h-6 mr-3 text-blue-600" />
                향후 목표
              </CardTitle>
              <CardDescription className="text-base">ESG 중장기 목표 및 로드맵</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingGoals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                  <goal.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{goal.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                    <div className="flex items-center text-sm text-blue-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {goal.target}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* ESG 비전 */}
        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-0 shadow-lg">
          <CardContent className="p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ESG를 통한 지속가능한 미래
            </h3>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              청원농산은 환경 보호, 사회적 책임, 윤리적 경영을 통해 
              미래 세대를 위한 지속가능한 가치를 창출합니다. 
              우리의 모든 활동이 지구와 사회에 긍정적인 영향을 미치도록 
              끊임없이 노력하고 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ESGDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ESGHero />
      <ESGContent />
      <Footer />
    </div>
  )
}