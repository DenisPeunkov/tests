export interface MenuItem {
  title: string;
  route: string;
}

export const menuItems: MenuItem[] = [
  { title: 'Все формы', route: 'all-forms' },
  { title: 'Форма "Вход в систему"', route: 'first-form' },
  { title: 'Форма "Оставить отзыв"', route: 'second-form' },
  { title: 'Форма с кастомными полями', route: 'custom-form' },
];
