'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Heart, 
  Zap, 
  Users, 
  Target, 
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface AboutPageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function AboutPage(props: AboutPageProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const features = [
    {
      icon: Zap,
      title: 'AI 추천 시스템',
      description: '머신러닝을 활용한 개인화된 음식 추천',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Heart,
      title: '사용자 중심 디자인',
      description: '직관적이고 재미있는 사용자 경험',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Target,
      title: '정확한 매칭',
      description: '취향과 상황에 맞는 정확한 추천',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  const team = [
    {
      name: '김개발',
      role: 'Frontend Developer',
      description: '사용자 인터페이스와 경험을 디자인합니다.',
      emoji: '👨‍💻',
    },
    {
      name: '이디자인',
      role: 'UI/UX Designer',
      description: '아름답고 직관적인 디자인을 만듭니다.',
      emoji: '🎨',
    },
    {
      name: '박데이터',
      role: 'Data Scientist',
      description: 'AI 추천 알고리즘을 개발합니다.',
      emoji: '🧠',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            🍽️ 우리의 이야기
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            결정장애로 고민하는 모든 사람들을 위해 만들어진 
            <span className="text-orange-600 font-semibold"> AI 음식 추천 서비스</span>입니다.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-2xl md:text-3xl flex items-center">
              <Target className="w-8 h-8 mr-3" />
              우리의 미션
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              "오늘 뭐 먹지?"라는 일상의 작은 고민을 해결하여, 
              사람들이 더 많은 시간을 중요한 일에 집중할 수 있도록 돕는 것입니다. 
              AI 기술을 통해 개인의 취향과 상황을 고려한 맞춤형 음식 추천으로 
              더 나은 식사 경험을 제공합니다.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ✨ 주요 기능
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
                  <CardHeader className={`${feature.bgColor} border-b`}>
                    <CardTitle className="flex items-center space-x-3">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            👥 팀 소개
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:animate-bounce">
                    {member.emoji}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ❓ 자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {[
              {
                id: 'faq1',
                question: '어떻게 AI가 음식을 추천하나요?',
                answer: '사용자의 이전 선택, 현재 시간, 날씨, 인기 트렌드 등을 종합적으로 분석하여 최적의 음식을 추천합니다.'
              },
              {
                id: 'faq2',
                question: '추천 결과가 마음에 들지 않으면?',
                answer: '"다시!" 버튼을 눌러 새로운 추천을 받을 수 있습니다. 더 많이 사용할수록 더 정확한 추천을 받을 수 있어요!'
              },
              {
                id: 'faq3',
                question: '개인정보는 안전한가요?',
                answer: '사용자의 개인정보는 암호화되어 안전하게 보관되며, 오직 더 나은 추천을 위해서만 사용됩니다.'
              }
            ].map((faq) => (
              <Card key={faq.id} className="overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full p-6 justify-between text-left hover:bg-orange-50"
                  onClick={() => toggleSection(faq.id)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {expandedSection === faq.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Button>
                {expandedSection === faq.id && (
                  <CardContent className="p-6 pt-0 bg-orange-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              지금 바로 시작해보세요! 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90">
              AI가 추천하는 맛있는 음식으로 오늘의 식사를 특별하게 만들어보세요.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-orange-600 hover:text-orange-700 transform hover:scale-105 transition-all"
              onClick={() => window.location.href = '/'}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              음식 추천 받기
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 