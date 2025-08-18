"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CustomerServiceTabbed() {
  const [activeTab, setActiveTab] = useState("faq");

  const faqData = [
    {
      question: "제품 주문은 어떻게 하나요?",
      answer: "제품 주문은 전화(032-818-4168) 또는 인스타그램 DM으로 문의해 주시면 됩니다. 상담 후 주문을 도와드리겠습니다."
    },
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "일반적으로 주문 후 1-2일 내에 배송되며, 지역에 따라 1-3일 정도 소요됩니다. 급한 경우 별도 문의해 주세요."
    },
    {
      question: "제품의 유통기한은 어떻게 되나요?",
      answer: "모든 제품은 엄격한 품질관리를 통해 제조되며, 유통기한은 제품별로 다릅니다. 구체적인 유통기한은 제품 상세페이지에서 확인하실 수 있습니다."
    },
    {
      question: "반품/교환이 가능한가요?",
      answer: "제품 하자 시에는 즉시 교환/반품을 도와드립니다. 단순 변심의 경우에는 배송비를 부담해 주셔야 합니다."
    },
    {
      question: "대량 주문도 가능한가요?",
      answer: "네, 대량 주문도 가능합니다. 전화로 문의해 주시면 별도 가격과 배송 조건을 안내해 드리겠습니다."
    }
  ];

  const snsData = [
    {
      platform: "Instagram",
      handle: "@food.healthy_official",
      description: "최신 제품 정보와 건강한 식생활 팁을 확인하세요",
      link: "https://www.instagram.com/food.healthy_official?igsh=aGNheGllcTcwYXI5&utm_source=qr",
      icon: "/insta.svg",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      platform: "Naver Blog",
      handle: "청원농산 블로그",
      description: "제품 사용법과 레시피를 자세히 알아보세요",
      link: "https://blog.naver.com/chungwon2810",
      icon: "/naverblog.svg",
      color: "bg-gradient-to-r from-green-400 to-green-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            고객 지원
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            자주 묻는 질문과 소셜미디어를 통해 더 많은 정보를 얻어보세요
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-[#EFF2F5] rounded-full p-1">
            <TabsTrigger 
              value="faq" 
              className="px-3 sm:px-4 md:px-6 h-[40px] sm:h-[44px] md:h-[48px] rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.01em] transition shadow-none whitespace-nowrap flex-shrink-0 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-[0_2px_0_rgba(0,0,0,0.04)] text-[#2E3A49] hover:text-slate-900"
            >
              자주 묻는 질문
            </TabsTrigger>
            <TabsTrigger 
              value="sns" 
              className="px-3 sm:px-4 md:px-6 h-[40px] sm:h-[44px] md:h-[48px] rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.01em] transition shadow-none whitespace-nowrap flex-shrink-0 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-[0_2px_0_rgba(0,0,0,0.04)] text-[#2E3A49] hover:text-slate-900"
            >
              SNS & 블로그
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="sns" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {snsData.map((sns, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 rounded-full ${sns.color} flex items-center justify-center p-3`}>
                          <Image
                            src={sns.icon}
                            alt={sns.platform}
                            width={32}
                            height={32}
                            className={sns.platform === "Naver Blog" ? "" : "filter brightness-0 invert"}
                          />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{sns.platform}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {sns.handle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">{sns.description}</p>
                      <a
                        href={sns.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        방문하기
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 연락처 정보 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">직접 문의하기</CardTitle>
              <CardDescription className="text-lg">
                전화로 직접 상담받고 싶으시다면 언제든 연락해 주세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Image
                  src="/call.svg"
                  alt="전화"
                  width={48}
                  height={48}
                  className="text-blue-600"
                />
                <div className="text-left">
                  <p className="text-sm text-gray-600">전화번호</p>
                  <p className="text-2xl font-bold text-blue-600">032-818-4168</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>운영시간:</strong> 평일 09:00 - 18:00 (주말 및 공휴일 휴무)
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>상담:</strong> 제품 문의, 주문, 배송, 기타 궁금한 점을 편리하게 상담받으실 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
