# 🍽️ 오늘 뭐 먹지? AI - Product Requirements Document (PRD)

## 📋 제품 개요 (Product Overview)

### 제품 정의
**"오늘 뭐 먹지? AI"**는 결정장애로 고민하는 사용자들을 위한 AI 기반 음식 추천 웹 애플리케이션입니다. 랜덤 알고리즘을 활용하여 다양한 음식 옵션을 제공하고, 사용자의 고민을 해결해주는 인터랙티브한 웹 서비스입니다.

### 대상 사용자 그룹
- **주 타겟**: 20-40대 직장인 및 대학생
- **부 타겟**: 음식 선택에 어려움을 겪는 모든 연령대
- **사용자 페르소나**:
  - 매일 점심/저녁 메뉴 선택에 고민하는 직장인
  - 다양한 음식을 시도해보고 싶어하는 미식가
  - 빠른 의사결정을 원하는 바쁜 현대인

### 핵심 목적
1. **결정 피로도 감소**: "오늘 뭐 먹지?" 고민 시간 단축
2. **음식 다양성 제공**: 평소 시도하지 않았던 새로운 음식 발견
3. **사용자 경험 향상**: 재미있고 직관적인 인터페이스 제공
4. **접근성**: 언제 어디서나 쉽게 사용할 수 있는 웹 기반 서비스

---

## 🎯 프로젝트 목표 (Project Goals)

### 단기 목표 (3개월)
- ✅ **다중 페이지 웹사이트 구축** 완료
- ✅ **기본 AI 음식 추천 시스템** 구현
- ✅ **반응형 UI/UX 디자인** 적용
- ✅ **사용자 피드백 수집 시스템** 구축 (연락 폼)

### 중기 목표 (6개월)
- 🔄 **사용자 개인화 추천 시스템** 도입
- 🔄 **음식 데이터베이스 확장** (100+ 메뉴)
- 🔄 **모바일 앱 최적화** 및 PWA 구현
- 🔄 **사용자 선호도 학습 알고리즘** 개발

### 장기 목표 (1년)
- 📈 **월 활성 사용자 10,000명** 달성
- 📈 **지역별 맛집 정보 연동** 기능 추가
- 📈 **소셜 기능** (음식 추천 공유) 구현
- 📈 **파트너십** (음식 배달 서비스 연동)

---

## ⭐ 기능 목록 (Feature List)

### 🔴 Must-have (필수 기능)
1. **홈 페이지 - AI 음식 추천**
   - ✅ 랜덤 음식 추천 버튼
   - ✅ 로딩 애니메이션 및 상태 표시
   - ✅ 음식 이미지 및 설명 표시
   - ✅ 재추천 기능 ("다시!" 버튼)
   - ✅ 결정장애 카운터 및 특별 메시지

2. **네비게이션 시스템**
   - ✅ 반응형 상단 네비게이션
   - ✅ 현재 페이지 하이라이트
   - ✅ 부드러운 페이지 전환

3. **소개 페이지**
   - ✅ 서비스 미션 및 비전 소개
   - ✅ 주요 기능 설명
   - ✅ 팀 소개 섹션
   - ✅ FAQ 아코디언 (인터랙티브)

4. **연락처 페이지**
   - ✅ 연락처 정보 표시
   - ✅ 문의 폼 (이름, 이메일, 제목, 메시지)
   - ✅ 실시간 폼 검증
   - ✅ 별점 평가 시스템
   - ✅ 제출 완료 알림

### 🟡 Should-have (권장 기능)
1. **사용자 개인화**
   - 🔄 사용자 선호도 저장 (로컬 스토리지)
   - 🔄 최근 추천 기록 저장
   - 🔄 즐겨찾는 음식 목록

2. **고급 추천 시스템**
   - 🔄 시간대별 추천 (아침/점심/저녁)
   - 🔄 날씨 기반 추천
   - 🔄 카테고리별 필터링 (한식, 중식, 양식 등)

3. **소셜 기능**
   - 🔄 추천 결과 공유하기
   - 🔄 리뷰 및 평점 시스템
   - 🔄 사용자 커뮤니티

### 🟢 Could-have (선택적 기능)
1. **외부 연동**
   - 🔄 배달 앱 연동 (배달의민족, 요기요)
   - 🔄 지도 서비스 연동 (주변 맛집 찾기)
   - 🔄 카카오톡 봇 연동

2. **데이터 분석**
   - 🔄 사용자 행동 분석 대시보드
   - 🔄 인기 음식 트렌드 분석
   - 🔄 A/B 테스트 시스템

---

## 🛠️ 기술 및 디자인 요구사항 (Technical and Design Requirements)

### 기술 스택
#### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **State Management**: React Hooks (useState, useEffect)
- **Form Handling**: React Hook Form + Zod Validation
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

#### Backend (향후 확장)
- **Runtime**: Node.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **API**: RESTful API
- **File Storage**: Supabase Storage

#### DevOps & Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel
- **Analytics**: Google Analytics (향후)

### UI/UX 가이드라인
#### 디자인 시스템
- **색상 팔레트**: 
  - Primary: Orange (#f97316, #ea580c)
  - Secondary: Red (#dc2626)
  - Accent: Yellow (#eab308)
  - Neutral: Gray scale
- **타이포그래피**: Inter font family, 계층적 크기 구조
- **컴포넌트**: shadcn/ui 기반 일관된 디자인
- **애니메이션**: Smooth transitions, transform effects

#### 인터랙션 원칙
- **응답성**: 모든 버튼 클릭에 즉각적인 피드백
- **직관성**: 명확한 아이콘과 레이블 사용
- **접근성**: WCAG 2.1 AA 수준 준수
- **일관성**: 페이지 간 동일한 패턴 유지

#### 반응형 디자인
- **Mobile First**: 모바일 우선 설계
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **터치 친화적**: 44px 이상 터치 타겟

### 외부 시스템 연동 요구사항
#### 현재 연동
- **Picsum Photos**: 음식 이미지 플레이스홀더
  - API: `https://picsum.photos/600/400?random=ID`
  - 용도: 음식 추천 시 랜덤 이미지 제공

#### 향후 연동 계획
1. **음식 정보 API**
   - OpenFoodFacts API
   - Edamam Recipe Search API
   - 한국 음식 데이터베이스

2. **지도 및 위치 서비스**
   - Google Maps API
   - 카카오 맵 API

3. **배달 서비스 연동**
   - 배달의민족 API (파트너십)
   - 요기요 API (파트너십)

4. **소셜 로그인**
   - Google OAuth
   - 카카오 로그인
   - 네이버 로그인

---

## 🗓️ 마일스톤 (Milestones)

### Phase 1: MVP 구축 (완료) ✅
**기간**: 2주
**목표**: 기본적인 다중 페이지 웹사이트 구현
- ✅ 홈, 소개, 연락처 페이지 구축
- ✅ 기본 AI 음식 추천 기능
- ✅ 반응형 UI/UX 구현
- ✅ 인터랙티브 요소 구현

### Phase 2: 기능 개선 (진행 예정) 🔄
**기간**: 4주
**목표**: 사용자 경험 개선 및 기능 확장
- 🔄 음식 데이터베이스 확장 (50+ 메뉴)
- 🔄 사용자 선호도 저장 기능
- 🔄 카테고리별 필터링
- 🔄 성능 최적화 및 SEO 개선

### Phase 3: 백엔드 연동 (계획) 📋
**기간**: 6주
**목표**: 데이터베이스 및 사용자 시스템 구축
- 📋 Supabase 백엔드 설정
- 📋 사용자 회원가입/로그인 시스템
- 📋 사용자 데이터 분석 시스템
- 📋 관리자 대시보드 구축

### Phase 4: 고급 기능 (계획) 📋
**기간**: 8주
**목표**: AI 개선 및 외부 서비스 연동
- 📋 머신러닝 기반 개인화 추천
- 📋 지도 서비스 연동
- 📋 배달 서비스 API 연동
- 📋 모바일 앱 최적화 (PWA)

### Phase 5: 확장 및 런칭 (계획) 📋
**기간**: 4주
**목표**: 서비스 안정화 및 마케팅
- 📋 베타 테스트 진행
- 📋 사용자 피드백 반영
- 📋 공식 런칭 준비
- 📋 마케팅 및 홍보 활동

---

## 📊 성공 지표 (Success Metrics)

### 사용자 지표
- **일 활성 사용자 (DAU)**: 목표 500명 (3개월 후)
- **월 활성 사용자 (MAU)**: 목표 5,000명 (6개월 후)
- **평균 세션 시간**: 목표 2분 이상
- **재방문율**: 목표 30% 이상

### 기능 지표
- **추천 클릭률**: 목표 80% 이상
- **폼 완성률**: 목표 60% 이상
- **페이지 로딩 시간**: 목표 3초 이하
- **모바일 사용률**: 목표 70% 이상

### 비즈니스 지표
- **고객 만족도**: 목표 4.5/5.0 이상
- **추천 의향**: 목표 70% 이상
- **서비스 재사용률**: 목표 50% 이상

---

## 🔒 제약사항 및 위험요소 (Constraints and Risks)

### 기술적 제약사항
- **예산**: 초기 무료 서비스로 운영
- **서버 비용**: Vercel 무료 플랜 사용
- **API 제한**: 외부 API 호출 횟수 제한
- **데이터**: 초기에는 정적 데이터 사용

### 잠재적 위험요소
- **확장성**: 사용자 증가 시 서버 성능 이슈
- **경쟁**: 유사 서비스 출현 가능성
- **법적 이슈**: 음식 이미지 저작권 문제
- **기술적 부채**: 빠른 개발로 인한 코드 품질 저하

### 대응 방안
- **모니터링**: 성능 및 사용자 행동 지속 관찰
- **점진적 개선**: 단계별 기능 추가 및 최적화
- **법적 검토**: 이미지 및 콘텐츠 사용권 확보
- **코드 품질**: 정기적인 리팩토링 및 테스트 코드 작성

---

## 📞 연락처 및 팀 정보

### 프로젝트 팀
- **프로젝트 매니저**: 김개발 (Frontend Developer)
- **UI/UX 디자이너**: 이디자인
- **데이터 사이언티스트**: 박데이터

### 연락처
- **이메일**: contact@foodai.kr
- **전화**: 02-1234-5678
- **주소**: 서울시 강남구 테헤란로 123, 스타트업 캠퍼스 5층

---

*마지막 업데이트: 2024년 12월*
*다음 리뷰 예정일: 2024년 1월* 