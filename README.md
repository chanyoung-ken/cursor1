# 🍽️ 오늘 뭐 먹지? AI - Multi-Page Website

결정장애 미식가를 위한 AI 랜덤슐랭 가이드! 이 프로젝트는 Next.js와 TypeScript로 구축된 반응형 다중 페이지 웹사이트입니다.

## 🌟 주요 기능

### 📱 **다중 페이지 구조**
- **홈 페이지** (`/`): AI 음식 추천 기능
- **소개 페이지** (`/about`): 서비스 소개 및 팀 정보
- **연락처 페이지** (`/contact`): 연락 정보 및 문의 폼

### 🎯 **인터랙티브 기능**
1. **AI 음식 추천 시스템** (홈 페이지)
   - 랜덤 음식 추천 버튼
   - 로딩 애니메이션
   - 이미지 호버 효과
   - 재추천 기능

2. **FAQ 아코디언** (소개 페이지)
   - 클릭으로 섹션 확장/축소
   - 부드러운 전환 애니메이션

3. **인터랙티브 연락 폼** (연락처 페이지)
   - 실시간 폼 검증
   - 별점 평가 시스템 (호버/클릭)
   - 로딩 상태 표시
   - 성공 메시지 애니메이션

### 🎨 **UI/UX 기능**
- **반응형 네비게이션**: 현재 페이지 하이라이트
- **호버 효과**: 버튼, 카드, 링크에 부드러운 전환
- **애니메이션**: 
  - Transform 효과 (scale, translate)
  - 로딩 스피너
  - 바운스 애니메이션
- **그라데이션 배경**: 각 페이지별 다른 색상 테마
- **shadcn/ui 컴포넌트**: 일관된 디자인 시스템

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (네비게이션 포함)
│   ├── page.tsx           # 홈 페이지 (음식 추천)
│   ├── about/
│   │   └── page.tsx       # 소개 페이지
│   └── contact/
│       └── page.tsx       # 연락처 페이지
├── components/
│   └── ui/                # shadcn/ui 컴포넌트
│       ├── navigation.tsx # 네비게이션 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── features/
│   └── food/              # 음식 추천 기능
└── lib/
    └── utils.ts           # 유틸리티 함수
```

## 🎯 주요 인터랙티브 요소

### 1. 음식 추천 시스템 (홈 페이지)
- **버튼 클릭**: 랜덤 음식 추천
- **로딩 상태**: 스피너 애니메이션
- **이미지 호버**: Scale 효과
- **결정장애 카운터**: 다중 클릭 시 특별 메시지

### 2. 네비게이션
- **현재 페이지 하이라이트**: 활성 링크 표시
- **호버 효과**: Scale 및 색상 변경
- **반응형**: 모바일에서 텍스트 숨김

### 3. FAQ 아코디언 (소개 페이지)
- **클릭 토글**: 섹션 확장/축소
- **아이콘 변경**: ChevronDown/Up 전환
- **부드러운 전환**: CSS 트랜지션

### 4. 연락 폼 (연락처 페이지)
- **실시간 검증**: 입력 시 오류 메시지
- **별점 시스템**: 호버 및 클릭 인터랙션
- **제출 처리**: 로딩 → 성공 메시지
- **폼 리셋**: 성공 후 자동 초기화

## 🎨 디자인 특징

- **일관된 색상 팔레트**: 오렌지/레드 기반
- **그라데이션**: 각 페이지별 고유 배경
- **카드 기반 레이아웃**: 콘텐츠 구조화
- **타이포그래피**: 계층적 폰트 크기
- **반응형**: 모바일 우선 디자인

## 📱 반응형 디자인

- **Desktop**: 전체 기능 및 레이아웃
- **Tablet**: 그리드 조정
- **Mobile**: 
  - 네비게이션 텍스트 숨김
  - 폰트 크기 조정
  - 터치 친화적 버튼 크기

## 🚀 배포

이 프로젝트는 Vercel, Netlify, 또는 기타 Next.js 호스팅 플랫폼에 배포할 수 있습니다.

```bash
# Vercel CLI 사용
npx vercel

# 또는 GitHub 연동으로 자동 배포
```

## 🤝 기여하기

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the MIT License.

---

**Made with ❤️ using Next.js + TypeScript + TailwindCSS**
