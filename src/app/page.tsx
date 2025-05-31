'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FoodItem } from '@/features/food/constants/food'; // INITIAL_FOOD_LIST는 직접 사용 안함
import { getRandomFood, getRandomDrip } from '@/features/food/lib/foodUtils';
import { Smile, RefreshCw, Utensils, Lightbulb } from 'lucide-react';

interface LandingPageProps {
  // params: Promise<{ [key: string]: string | string[] | undefined }> // 가이드라인에 따르지만 현재 사용 X
}

export default function HomePage(props: LandingPageProps) {
  const [recommendedFood, setRecommendedFood] = useState<FoodItem | null>(null);
  const [drip, setDrip] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true); // 초기 로딩 상태 true
  const [rollCount, setRollCount] = useState<number>(0);

  const handleRecommendation = () => {
    setIsLoading(true);
    setRollCount((prev) => prev + 1);

    setTimeout(() => {
      const food = getRandomFood();
      const newDrip = getRandomDrip();
      setRecommendedFood(food);

      if (rollCount >= 2 && food.name !== '굶기 (농담입니다😋)') {
        setDrip(
          `결정장애 ${rollCount + 1}스택째! 오늘은 제가 강추하는 ${food.name} 드셔보세요! 🚀`,
        );
      } else {
        setDrip(newDrip);
      }
      setIsLoading(false);
    }, 700);
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 첫 추천 실행
    handleRecommendation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 최초 1회 실행

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center select-none">
        <main className="flex flex-col items-center justify-center w-full flex-1">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              🍽️ 랜덤슐랭 AI
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              결정장애 미식가를 위한 맛집 추천 서비스
            </p>
          </div>

          <Card className="w-full max-w-md shadow-2xl bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-orange-500 text-white p-6">
              <CardTitle className="text-3xl md:text-4xl font-bold flex items-center justify-center">
                <Utensils className="w-8 h-8 md:w-10 md:h-10 mr-2 drop-shadow-md" />
                오늘 뭐 먹지?
              </CardTitle>
              <CardDescription className="text-orange-100 text-sm md:text-base pt-1">
                AI가 추천하는 맛있는 선택!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-6 min-h-[350px] md:min-h-[400px] flex flex-col justify-center items-center">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center text-orange-600">
                  <RefreshCw className="w-12 h-12 md:w-16 md:h-16 animate-spin" />
                  <p className="mt-4 text-lg font-semibold">
                    랜덤슐랭 맛집 찾는 중...
                  </p>
                </div>
              ) : recommendedFood ? (
                <div className="space-y-4 md:space-y-5 w-full">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    오늘의 AI 추천 메뉴는...
                  </h2>
                  <p className="text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight">
                    {recommendedFood.name}
                  </p>
                  {recommendedFood.imagePlaceholder && (
                    <div className="overflow-hidden rounded-lg shadow-lg aspect-video w-full max-w-sm mx-auto border-4 border-orange-200 hover:border-orange-400 transition-all">
                      <Image
                        src={recommendedFood.imagePlaceholder}
                        alt={recommendedFood.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                        priority // LCP(Largest Contentful Paint) 이미지이므로 우선순위 적용
                        unoptimized // picsum.photos 사용 시 외부 URL 최적화 회피
                      />
                    </div>
                  )}
                  <p className="text-base md:text-lg italic text-gray-600 flex items-center justify-center px-2">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 mr-2 text-yellow-500 flex-shrink-0" />
                    <span className="leading-relaxed">{drip}</span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <Smile className="w-12 h-12 md:w-16 md:h-16 mb-4" />
                  <p className="text-lg font-semibold">
                    버튼을 눌러 추천 받아보세요!
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3 md:gap-4 p-6 bg-gray-50 border-t">
              <Button
                onClick={handleRecommendation}
                className="w-full text-base md:text-lg py-5 md:py-6 bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-200 ease-in-out transform hover:scale-102 active:scale-95 shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center"
                disabled={isLoading}
                size="lg"
              >
                <RefreshCw
                  className={`w-5 h-5 md:w-6 md:h-6 mr-2 ${isLoading ? 'animate-spin' : ''}`}
                />
                {isLoading ? '고민 중...' : '랜덤슐랭! 굴려줘!'}
              </Button>
              {recommendedFood && !isLoading && (
                <Button
                  onClick={handleRecommendation}
                  variant="outline"
                  className="w-full text-sm md:text-base py-4 md:py-5 border-orange-500 text-orange-500 hover:bg-orange-100 hover:text-orange-600 font-semibold transition-all duration-200 ease-in-out transform hover:scale-102 active:scale-95 shadow-md hover:shadow-lg rounded-lg"
                  disabled={isLoading}
                >
                  에이, 이건 좀... 다시!
                </Button>
              )}
            </CardFooter>
          </Card>
        </main>
        
        <footer className="py-6 text-center text-xs md:text-sm text-white/80">
          <p>
            &copy; {new Date().getFullYear()} 오늘 뭐 먹지? AI. 맛있게 드세요! 😋
          </p>
          <p className="mt-1">
            이 프로젝트는 "바이브 코딩"과 함께 성장합니다. 여러분의 아이디어를
            기다립니다!
          </p>
        </footer>
      </div>
    </div>
  );
} 