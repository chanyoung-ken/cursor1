'use client';

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  imagePlaceholder: string; // picsum.photos URL 또는 로컬 경로
}

export const INITIAL_FOOD_LIST: FoodItem[] = [
  {
    id: '1',
    name: '김치찌개',
    category: '한식',
    imagePlaceholder: 'https://picsum.photos/seed/kimchi_jjigae/600/400',
  },
  {
    id: '2',
    name: '돈까스',
    category: '일식',
    imagePlaceholder: 'https://picsum.photos/seed/tonkatsu/600/400',
  },
  {
    id: '3',
    name: '파스타',
    category: '양식',
    imagePlaceholder: 'https://picsum.photos/seed/pasta/600/400',
  },
  {
    id: '4',
    name: '햄버거',
    category: '양식',
    imagePlaceholder: 'https://picsum.photos/seed/hamburger/600/400',
  },
  {
    id: '5',
    name: '초밥',
    category: '일식',
    imagePlaceholder: 'https://picsum.photos/seed/sushi/600/400',
  },
  {
    id: '6',
    name: '떡볶이',
    category: '분식',
    imagePlaceholder: 'https://picsum.photos/seed/tteokbokki/600/400',
  },
  {
    id: '7',
    name: '쌀국수',
    category: '아시안',
    imagePlaceholder: 'https://picsum.photos/seed/pho/600/400',
  },
  {
    id: '8',
    name: '굶기 (농담입니다😋)',
    category: '유머',
    imagePlaceholder: 'https://picsum.photos/seed/hungry/600/400',
  },
];

export const INITIAL_DRIP_LIST: string[] = [
  '오늘은 이 느끼함에 빠져보는 건 어떠신가요?',
  '다이어트는 내일부터! 가즈아!',
  '이거 먹고 힘내서 코딩해야죠! 🔥',
  '고민할 시간에 한 젓가락 더!',
  '이 메뉴는 못 참지!',
  '오늘의 행복은 이 음식으로부터!',
  "Let's get this bread! (이 빵을 먹자는 뜻은 아닙니다)",
  'AI도 추천하는 맛! (아마도)',
  '쩝쩝박사님도 인정할 메뉴!',
  '이걸 선택한 당신, 이미 미식가.',
]; 