'use client';

import { FoodItem, INITIAL_FOOD_LIST, INITIAL_DRIP_LIST } from '../constants/food';

export const getRandomItem = <T>(items: T[]): T => {
  if (!items || items.length === 0) {
    // 아이템 목록이 비어있을 경우를 대비하여 기본값 또는 오류 처리
    // 여기서는 간단하게 첫 번째 아이템을 반환하거나, 특정 기본값을 설정할 수 있습니다.
    // 혹은, 실제 사용 사례에 따라 Error를 throw 할 수도 있습니다.
    // throw new Error('아이템 목록이 비어있습니다.');
    // 이 예제에서는 빈 배열이 들어올 경우를 명시적으로 처리하지 않지만,
    // 실제 프로덕션 코드에서는 이러한 경우를 고려해야 합니다.
    // 일단은 타입스크립트가 items.length > 0 일때만 동작하도록 하고,
    // 호출하는 쪽에서 빈 배열을 넘기지 않도록 주의합니다.
    if (items.length === 0) {
        // 적절한 기본값 또는 오류 처리
        // 예: throw new Error('아이템 목록이 비어있으면 안됩니다.');
        // 여기서는 any 타입으로 임시 반환하여 컴파일 오류를 피합니다.
        // 실제로는 이 상황이 발생하지 않도록 호출하는 쪽에서 보장해야 합니다.
        return null as any; 
    }
  }
  return items[Math.floor(Math.random() * items.length)];
};

export const getRandomFood = (category?: string): FoodItem => {
  let availableFoods = INITIAL_FOOD_LIST;
  if (category) {
    availableFoods = INITIAL_FOOD_LIST.filter((food) => food.category === category);
  }
  if (availableFoods.length === 0) {
    return {
      id: 'fallback',
      name: '이런, 메뉴가 없네요! 다른 걸 찾아볼까요?',
      category: '없음',
      imagePlaceholder: 'https://picsum.photos/seed/empty/600/400',
    };
  }
  return getRandomItem(availableFoods);
};

export const getRandomDrip = (): string => {
  if (INITIAL_DRIP_LIST.length === 0) {
    return "오늘 드립은 쉽니다..."; // 드립 목록이 비었을 경우 기본 메시지
  }
  return getRandomItem(INITIAL_DRIP_LIST);
}; 