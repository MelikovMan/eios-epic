export const quiz = {
  "quizTitle": "React - Контрольные вопросы по блокам 1 и 2",
  "quizSynopsis": "Тестирование знаний по современной Frontend-разработке на React, включая хуки, компоненты, состояние, оптимизацию и экосистему React",
  "progressBarColor": "#61dafb",
  "nrOfQuestions": "20",
  "questions": [
    {
      "question": "Что такое JSX в React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Это отдельный язык программирования",
        "Это синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код в JS",
        "Это библиотека для работы с DOM",
        "Это система типов для React"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Верно! JSX - это синтаксическое расширение JavaScript.",
      "messageForIncorrectAnswer": "Неверно. JSX - это синтаксическое расширение JavaScript.",
      "explanation": "JSX (JavaScript XML) позволяет писать HTML-подобный код внутри JavaScript, который затем компилируется в вызовы React.createElement().",
      "point": "5"
    },
    {
      "question": "Что такое props в React компонентах?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Это внутреннее состояние компонента",
        "Это методы жизненного цикла",
        "Это данные, передаваемые от родительского компонента к дочернему",
        "Это DOM элементы компонента"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Правильно! Props - это свойства, передаваемые от родителя к ребенку.",
      "messageForIncorrectAnswer": "Неправильно. Props передаются от родительского компонента к дочернему.",
      "explanation": "Props (properties) - это объект, содержащий данные, передаваемые от родительского компонента к дочернему. Они доступны только для чтения.",
      "point": "5"
    },
    {
      "question": "Для чего используется хук useState?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Для выполнения побочных эффектов",
        "Для работы с контекстом",
        "Для управления состоянием компонента",
        "Для оптимизации производительности"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Верно! useState используется для управления состоянием компонента.",
      "messageForIncorrectAnswer": "Неверно. useState предназначен для управления состоянием.",
      "explanation": "Хук useState позволяет добавлять состояние в функциональные компоненты. Он возвращает массив с текущим значением и функцией для его обновления.",
      "point": "5"
    },
    {
      "question": "Что делает хук useEffect?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Управляет состоянием компонента",
        "Выполняет побочные эффекты в функциональных компонентах",
        "Оптимизирует перерисовки компонентов",
        "Создает ссылки на DOM элементы"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! useEffect выполняет побочные эффекты.",
      "messageForIncorrectAnswer": "Неправильно. useEffect предназначен для побочных эффектов.",
      "explanation": "useEffect заменяет методы жизненного цикла componentDidMount, componentDidUpdate и componentWillUnmount в функциональных компонентах.",
      "point": "5"
    },
    {
      "question": "Какие из перечисленных являются контролируемыми компонентами?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Компоненты, управляемые через state",
        "Компоненты, которые сами управляют своим состоянием",
        "Компоненты, получающие значение через props",
        "Компоненты, которые обновляются через setState"
      ],
      "correctAnswer": [1, 3, 4],
      "messageForCorrectAnswer": "Верно! Контролируемые компоненты управляются через state и props.",
      "messageForIncorrectAnswer": "Не полностью верно. Контролируемые компоненты управляются React.",
      "explanation": "Контролируемые компоненты - это компоненты, которые получают свое текущее значение через props и уведомляют об изменениях через колбэки.",
      "point": "5"
    },
    {
      "question": "Для чего используется хук useContext?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Для управления локальным состоянием",
        "Для доступа к контексту React",
        "Для создания побочных эффектов",
        "Для оптимизации производительности"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! useContext предоставляет доступ к контексту.",
      "messageForIncorrectAnswer": "Неверно. useContext используется для работы с контекстом.",
      "explanation": "useContext позволяет подписаться на контекст React в функциональном компоненте, избегая пропс дриллинга.",
      "point": "5"
    },
    {
      "question": "Какие хуки используются для оптимизации производительности?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "useMemo",
        "useCallback",
        "useState",
        "useEffect"
      ],
      "correctAnswer": [1, 2],
      "messageForCorrectAnswer": "Верно! useMemo и useCallback помогают оптимизировать производительность.",
      "messageForIncorrectAnswer": "Не полностью верно. useMemo и useCallback предназначены для оптимизации.",
      "explanation": "useMemo мемоизирует вычисления, useCallback мемоизирует колбэк-функции, предотвращая ненужные перерисовки.",
      "point": "5"
    },
    {
      "question": "Что такое React.memo?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Это хук для управления памятью",
        "Это高阶-компонент для мемоизации компонентов",
        "Это метод для работы с мемоизированными селекторами",
        "Это утилита для кэширования API запросов"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! React.memo мемоизирует компоненты.",
      "messageForIncorrectAnswer": "Неверно. React.memo - это HOC для мемоизации.",
      "explanation": "React.memo - это высшего порядка компонент, который предотвращает перерисовку компонента, если его props не изменились.",
      "point": "5"
    },
    {
      "question": "Что такое кастомные хуки?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Встроенные хуки React",
        "JavaScript функции, которые используют другие хуки",
        "Специальные хуки для работы с DOM",
        "Хуки для управления маршрутизацией"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Верно! Кастомные хуки - это функции, использующие другие хуки.",
      "messageForIncorrectAnswer": "Неверно. Кастомные хуки создаются разработчиком.",
      "explanation": "Кастомные хуки позволяют извлекать и переиспользовать логику состояния между компонентами, следуя правилам хуков.",
      "point": "5"
    },
    {
      "question": "Для чего используется React Suspense?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Для обработки ошибок",
        "Для ленивой загрузки компонентов",
        "Для управления состоянием приложения",
        "Для работы с формами"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! Suspense используется для ленивой загрузки.",
      "messageForIncorrectAnswer": "Неверно. Suspense предназначен для ленивой загрузки компонентов.",
      "explanation": "React Suspense позволяет компонентам 'ждать' чего-либо перед рендером, в основном используется для ленивой загрузки кода.",
      "point": "5"
    },
    {
      "question": "Что такое Error Boundary в React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Компонент для обработки JavaScript ошибок",
        "Система валидации пропсов",
        "Инструмент для отладки",
        "Метод для обработки API ошибок"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Верно! Error Boundary обрабатывают JavaScript ошибки.",
      "messageForIncorrectAnswer": "Неверно. Error Boundary перехватывают JavaScript ошибки.",
      "explanation": "Error Boundary - это React компоненты, которые перехватывают JavaScript ошибки anywhere в их дочернем дереве компонентов.",
      "point": "5"
    },
    {
      "question": "Какие библиотеки используются для управления состоянием в React?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Redux",
        "Zustand",
        "MobX",
        "React Router"
      ],
      "correctAnswer": [1, 2, 3],
      "messageForCorrectAnswer": "Верно! Redux, Zustand и MobX - популярные стейт-менеджеры.",
      "messageForIncorrectAnswer": "Не полностью верно. React Router - для маршрутизации.",
      "explanation": "Библиотеки управления состоянием помогают управлять глобальным состоянием приложения: Redux, Zustand, MobX, Recoil и другие.",
      "point": "5"
    },
    {
      "question": "Что такое React Server Components?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Компоненты, которые рендерятся только на сервере",
        "Компоненты для SSR",
        "Новый тип компонентов, которые могут выполняться на сервере",
        "Компоненты для статической генерации"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Правильно! RSC выполняются на сервере.",
      "messageForIncorrectAnswer": "Неверно. RSC - это компоненты, выполняемые на сервере.",
      "explanation": "React Server Components позволяют выполнять компоненты на сервере, уменьшая размер клиентского бандла и улучшая производительность.",
      "point": "5"
    },
    {
      "question": "Какие библиотеки роутинга популярны в React?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React Router",
        "Next.js Router",
        "Redux Router",
        "Vue Router"
      ],
      "correctAnswer": [1, 2],
      "messageForCorrectAnswer": "Верно! React Router и Next.js Router - основные решения.",
      "messageForIncorrectAnswer": "Не полностью верно. Vue Router для Vue.js.",
      "explanation": "React Router - самая популярная библиотека для клиентской маршрутизации, Next.js предоставляет встроенный роутер для SSR.",
      "point": "5"
    },
    {
      "question": "Что такое CSS-in-JS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Написание CSS в отдельных .css файлах",
        "Подход, когда CSS пишется непосредственно в JavaScript",
        "Система препроцессоров CSS",
        "Методология именования CSS классов"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! CSS-in-JS - стили в JavaScript.",
      "messageForIncorrectAnswer": "Неверно. CSS-in-JS означает стилизацию через JS.",
      "explanation": "CSS-in-JS - это подход к стилизации, где CSS генерируется из JavaScript, обеспечивая изоляцию стилей и динамические возможности.",
      "point": "5"
    },
    {
      "question": "Какие библиотеки компонентов существуют для React?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Material-UI",
        "Mantine",
        "Ant Design",
        "Bootstrap React"
      ],
      "correctAnswer": [1, 2, 3, 4],
      "messageForCorrectAnswer": "Верно! Все перечисленные - популярные UI библиотеки.",
      "messageForIncorrectAnswer": "Не полностью верно. Все варианты верны.",
      "explanation": "Популярные библиотеки компонентов предоставляют готовые UI элементы: Material-UI, Mantine, Ant Design, Chakra UI, React Bootstrap и другие.",
      "point": "5"
    },
    {
      "question": "Какой хук используется для создания ссылок на DOM элементы?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "useState",
        "useEffect",
        "useRef",
        "useContext"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Правильно! useRef создает ссылки на DOM.",
      "messageForIncorrectAnswer": "Неверно. useRef предназначен для ссылок.",
      "explanation": "useRef возвращает мутабельный ref объект, свойство .current которого инициализируется переданным аргументом.",
      "point": "5"
    },
    {
      "question": "Что такое Virtual DOM в React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Реальный DOM браузера",
        "Легковесная копия реального DOM",
        "Система шаблонизации",
        "Метод кэширования"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Верно! Virtual DOM - легковесная копия реального DOM.",
      "messageForIncorrectAnswer": "Неверно. Virtual DOM - это абстракция над реальным DOM.",
      "explanation": "Virtual DOM - это programming concept где идеальное или 'виртуальное' представление UI хранится в памяти и синхронизируется с реальным DOM.",
      "point": "5"
    },
    {
      "question": "Какие методы жизненного цикла заменяет useEffect?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "componentDidMount",
        "componentDidUpdate",
        "componentWillUnmount",
        "shouldComponentUpdate"
      ],
      "correctAnswer": [1, 2, 3],
      "messageForCorrectAnswer": "Верно! useEffect заменяет эти три метода.",
      "messageForIncorrectAnswer": "Не полностью верно. shouldComponentUpdate заменяется React.memo.",
      "explanation": "useEffect объединяет функциональность componentDidMount, componentDidUpdate и componentWillUnmount в одном хуке.",
      "point": "5"
    },
    {
      "question": "Что такое StrictMode в React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Режим для продакшена",
        "Инструмент для выделения потенциальных проблем",
        "Тип компонента",
        "Система валидации пропсов"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Правильно! StrictMode помогает находить проблемы.",
      "messageForIncorrectAnswer": "Неверно. StrictMode - инструмент разработки.",
      "explanation": "StrictMode - это инструмент для выделения потенциальных проблем в приложении. Он не рендерит видимый UI и активирует дополнительные проверки.",
      "point": "5"
    }
  ]
}