'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock,
  MessageCircle,
  Star
} from 'lucide-react';
import { z } from 'zod';

interface ContactPageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}

const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  subject: z.string().min(5, '제목은 5자 이상 입력해주세요'),
  message: z.string().min(10, '메시지는 10자 이상 입력해주세요'),
  rating: z.number().min(1).max(5),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage(props: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', { ...data, rating: selectedRating });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setSelectedRating(0);
    
    // 3초 후 성공 메시지 숨기기
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    setValue('rating', rating);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      content: 'contact@foodai.kr',
      description: '언제든 문의주세요',
    },
    {
      icon: Phone,
      title: '전화번호',
      content: '02-1234-5678',
      description: '평일 09:00-18:00',
    },
    {
      icon: MapPin,
      title: '주소',
      content: '서울시 강남구 테헤란로 123',
      description: '스타트업 캠퍼스 5층',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center shadow-2xl transform animate-bounce">
          <CardContent className="p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              메시지가 전송되었습니다! 🎉
            </h2>
            <p className="text-gray-600">
              빠른 시일 내에 답변드리겠습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            📬 연락하기
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            궁금한 점이나 제안사항이 있으시면 
            <span className="text-blue-600 font-semibold"> 언제든 연락주세요</span>!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  연락처 정보
                </CardTitle>
                <CardDescription className="text-blue-100">
                  다양한 방법으로 소통할 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className="p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg text-gray-700 mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Clock className="w-5 h-5 mr-2" />
                  운영 시간
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>월-금</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일</span>
                    <span className="text-red-500">휴무</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">메시지 보내기</CardTitle>
              <CardDescription>
                언제든 문의하세요. 최대한 빠르게 답변드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name">이름 *</Label>
                  <input
                    id="name"
                    type="text"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="이름을 입력해주세요"
                    {...register('name', { required: '이름을 입력해주세요' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email">이메일 *</Label>
                  <input
                    id="email"
                    type="email"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="이메일을 입력해주세요"
                    {...register('email', { required: '이메일을 입력해주세요' })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="subject">제목 *</Label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="제목을 입력해주세요"
                    {...register('subject', { required: '제목을 입력해주세요' })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Rating */}
                <div>
                  <Label>서비스 만족도</Label>
                  <div className="flex items-center space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-all ${
                          star <= (hoverRating || selectedRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRatingClick(star)}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {selectedRating > 0 && `${selectedRating}/5`}
                    </span>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message">메시지 *</Label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="메시지를 입력해주세요"
                    {...register('message', { required: '메시지를 입력해주세요' })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      메시지 보내기
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 