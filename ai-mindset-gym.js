// AI Mindset Gym - JavaScript file
const skills = [
  {
    id: 1,
    title: 'Постановка задачи',
    originalTitle: 'Постановка задачи',
    icon: 'fas fa-bullseye',
    color: 'blue',
    time: '10м',
    description: 'Убираем расплывчатость. Формулируем задачу так, чтобы исключить недели обсуждений.',
    inputs: [
      { label: 'Цель (1 фраза)', placeholder: 'Например: Хочу увеличить количество лидов...', type: 'input' },
      { label: 'Метрика успеха', placeholder: 'Например: +20% к концу квартала', type: 'input' },
      { label: 'Ограничение', placeholder: 'Например: Бюджет 0 рублей', type: 'input' },
      { label: 'Анти-цель', placeholder: 'Например: Не снижаем качество ради количества', type: 'input' }
    ],
    promptTemplate: (vals) => `Проверь мою постановку задачи на ошибки.

1) Где она двусмысленная?
2) Как её можно неправильно понять?
3) Предложи 2 улучшенные формулировки цели и метрики (не меняя смысл).

Моя постановка:
Цель: ${vals[0]}
Метрика: ${vals[1]}
Ограничения: ${vals[2]}
Анти-цель: ${vals[3]}`
  },
  {
    id: 2,
    title: 'Архитектор контекста',
    originalTitle: 'Архитектор контекста',
    icon: 'fas fa-layer-group',
    color: 'purple',
    time: '15м',
    description: 'Упаковываем вводные данные в компактный пакет для точного результата.',
    inputs: [
      { label: 'Роль ИИ', placeholder: 'Например: Ты эксперт по маркетингу...', type: 'input' },
      { label: 'Контекст ситуации', placeholder: 'Например: Мы запускаем новый продукт...', type: 'textarea' },
      { label: 'Формат ответа', placeholder: 'Например: Список из 5 пунктов...', type: 'input' }
    ],
    promptTemplate: (vals) => `Проанализируй мой контекст и предложи, как его упаковать плотнее для ИИ.

Роль: ${vals[0]}
Контекст: ${vals[1]}
Формат: ${vals[2]}`
  },
  {
    id: 3,
    title: 'Сбор вопросов',
    originalTitle: 'Сбор вопросов',
    icon: 'fas fa-question-circle',
    color: 'green',
    time: '20м',
    description: 'Находим скрытые риски и неопределенность до траты бюджета.',
    inputs: [
      { label: 'Твоя идея/задача', placeholder: 'Например: Хочу внедрить CRM...', type: 'textarea' }
    ],
    promptTemplate: (vals) => `Задай мне 5 уточняющих вопросов по методу Сократа, чтобы выявить риски в этой идее:
${vals[0]}`
  },
  {
    id: 4,
    title: 'Декомпозиция (WBS)',
    originalTitle: 'Декомпозиция (WBS)',
    icon: 'fas fa-sitemap',
    color: 'yellow',
    time: '20м',
    description: 'Превращаем «идею» в дерево конкретных работ с зависимостями.',
    inputs: [
      { label: 'Сложный проект', placeholder: 'Например: Переезд офиса на 100 человек...', type: 'textarea' }
    ],
    promptTemplate: (vals) => `Разбей этот проект на иерархическое дерево задач (WBS) до 3-го уровня вложенности:
${vals[0]}`
  },
  {
    id: 5,
    title: 'Редакторский отбор',
    originalTitle: 'Редакторский отбор',
    icon: 'fas fa-pen-nib',
    color: 'red',
    time: '15м',
    description: 'Выбираем одну сильную формулировку из множества вариантов.',
    inputs: [
      { label: 'Варианты текста', placeholder: 'Вставь несколько вариантов заголовков или идей...', type: 'textarea' }
    ],
    promptTemplate: (vals) => `Выбери лучший вариант из предложенных, обоснуй выбор и докрути его до идеала:
${vals[0]}`
  },
  {
    id: 6,
    title: 'Спор стратегий',
    originalTitle: 'Спор стратегий',
    icon: 'fas fa-balance-scale',
    color: 'indigo',
    time: '25м',
    description: 'Сталкиваем стратегии, чтобы понять цену жертвы.',
    inputs: [
      { label: 'Стратегия А', placeholder: 'Например: Быстрый рост любой ценой...', type: 'input' },
      { label: 'Стратегия Б', placeholder: 'Например: Медленный, но прибыльный рост...', type: 'input' }
    ],
    promptTemplate: (vals) => `Устрой дебаты между двумя стратегиями. Какие риски у каждой и в чем главная жертва при выборе?
Стратегия А: ${vals[0]}
Стратегия Б: ${vals[1]}`
  },
  {
    id: 7,
    title: 'Верификация',
    originalTitle: 'Верификация',
    icon: 'fas fa-search',
    color: 'pink',
    time: '20м',
    description: 'Ищем способ БЫСТРО убить идею, чтобы не тратить месяцы.',
    inputs: [
      { label: 'Твоя гипотеза', placeholder: 'Например: Люди будут покупать это за 5000р...', type: 'textarea' }
    ],
    promptTemplate: (vals) => `Примени метод фальсификации. Найди 3 причины, почему эта гипотеза НЕ сработает и как это проверить за 1 день:
${vals[0]}`
  },
  {
    id: 8,
    title: 'Структурирование',
    originalTitle: 'Структурирование',
    icon: 'fas fa-table',
    color: 'teal',
    time: '20м',
    description: 'Превращаем хаос заметок в управленческие таблицы.',
    inputs: [
      { label: 'Сырые заметки', placeholder: 'Вставь текст со встреч или мысли...', type: 'textarea' }
    ],
    promptTemplate: (vals) => `Преврати эти хаотичные заметки в структурированную таблицу с колонками "Объект", "Статус", "Ответственный" и "Срок":
${vals[0]}`
  },
  {
    id: 9,
    title: 'Перенос стиля',
    originalTitle: 'Перенос стиля',
    icon: 'fas fa-feather-alt',
    color: 'orange',
    time: '15м',
    description: 'Учим ИИ писать вашим голосом.',
    inputs: [
      { label: 'Пример твоего текста', placeholder: 'Вставь пост или письмо, которое ты писал сам...', type: 'textarea' },
      { label: 'Тема нового текста', placeholder: 'О чем написать в этом же стиле?', type: 'input' }
    ],
    promptTemplate: (vals) => `Проанализируй стиль текста 1 (ритм, лексика, тон) и напиши текст на тему 2, в точности копируя этот стиль.
Пример стиля: ${vals[0]}
Тема: ${vals[1]}`
  },
  {
    id: 10,
    title: 'Промпт-дебаг',
    originalTitle: 'Промпт-дебаг',
    icon: 'fas fa-sync-alt',
    color: 'cyan',
    time: '25м',
    description: 'Исправляем плохие ответы итерациями.',
    inputs: [
      { label: 'Исходный промпт', placeholder: 'Что ты просил у ИИ?', type: 'textarea' },
      { label: 'Что не так в ответе', placeholder: 'Например: Слишком длинно или не по теме...', type: 'input' }
    ],
    promptTemplate: (vals) => `Действуй как эксперт по промпт-инжинирингу. Исправь мой промпт, чтобы ИИ больше не совершал указанную ошибку.
Мой промпт: ${vals[0]}
Ошибка: ${vals[1]}`
  }
];

// Leaderboard data
const leaderboard = [
  { id: 'l1', name: 'Guest', xp: 2320, level: 8, rank: 1, avatar: 'GU', isCurrent: false },
  { id: 'l2', name: 'Stas Shevchuk', xp: 2170, level: 8, rank: 2, avatar: 'ST', isCurrent: false },
  { id: 'l3', name: 'Guest', xp: 2160, level: 8, rank: 3, avatar: 'GU', isCurrent: false },
  { id: 'l4', name: 'Яна', xp: 1920, level: 7, rank: 4, avatar: 'ЯН', isCurrent: false },
  { id: 'l5', name: 'Andrey Bryn', xp: 1920, level: 7, rank: 5, avatar: 'AN', isCurrent: false },
  { id: 'me', name: 'Guest', xp: 1620, level: 6, rank: 10, avatar: '👤', isCurrent: true }
];

// State management
let state = {
  xp: 1620,
  level: 6,
  completedSkills: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Initially showing as completed per request
  currentSkill: null
};

function init() {
  const saved = localStorage.getItem('gym_state_v2');
  if (saved) {
    state = JSON.parse(saved);
  }
  updateUI();
  renderSkills();
}

function renderSkills() {
  const container = document.getElementById('skills');
  if (!container) return;
  container.innerHTML = '';
  
  skills.forEach(skill => {
    const isCompleted = state.completedSkills.includes(skill.id);
    const card = document.createElement('button');
    card.className = 'skill-card relative p-6 glass-card rounded-2xl text-left transition-all hover:scale-[1.02] border border-white/10';
    card.onclick = () => showSkill(skill);
    
    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div class="w-12 h-12 rounded-xl bg-${skill.color}-500/20 flex items-center justify-center">
          <i class="${skill.icon} text-xl text-${skill.color}-400"></i>
        </div>
        ${isCompleted ? '<div class="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center"><i class="fas fa-check text-[10px] text-green-500"></i></div>' : ''}
      </div>
      <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Навык ${skill.id}</div>
      <h3 class="text-xl font-bold mb-2">${skill.title}</h3>
      <div class="text-[11px] text-${skill.color}-400 font-medium mb-3">${skill.title === 'Постановка задачи' ? 'Problem Framing' : skill.title}</div>
      <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">${skill.description}</p>
      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-center gap-2 text-gray-500 text-xs">
          <i class="far fa-clock"></i>
          <span>${skill.time}</span>
        </div>
        <div class="text-green-400 text-xs font-bold flex items-center gap-1">
          <span>${isCompleted ? 'Повторить' : 'Начать'}</span>
          <i class="fas fa-chevron-right text-[10px]"></i>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function showSkill(skill) {
  state.currentSkill = skill;
  document.getElementById('dashboard-view').classList.add('hidden');
  document.getElementById('skill-view').classList.remove('hidden');
  window.scrollTo(0, 0);
  
  document.getElementById('skill-title').innerText = skill.title;
  document.getElementById('skill-desc').innerText = skill.description;
  document.getElementById('skill-time').innerText = skill.time;
  
  const form = document.getElementById('skill-form');
  form.innerHTML = '';
  skill.inputs.forEach((input, i) => {
    const div = document.createElement('div');
    div.className = 'space-y-2';
    div.innerHTML = `
      <label class="block text-sm font-medium text-gray-400">${input.label}</label>
      ${input.type === 'textarea' 
        ? `<textarea id="input-${i}" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 h-32" placeholder="${input.placeholder}"></textarea>`
        : `<input id="input-${i}" type="text" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50" placeholder="${input.placeholder}">`
      }
    `;
    form.appendChild(div);
  });
  
  document.getElementById('gemini-analysis-section').classList.add('hidden');
  document.getElementById('generated-prompt-box').classList.add('hidden');
}

function showDashboard() {
  document.getElementById('dashboard-view').classList.remove('hidden');
  document.getElementById('skill-view').classList.add('hidden');
  renderSkills();
  updateUI();
}

function generatePrompt() {
  const skill = state.currentSkill;
  const vals = skill.inputs.map((_, i) => document.getElementById(`input-${i}`).value);
  if (vals.some(v => !v.trim())) {
    alert('Заполните все поля!');
    return;
  }
  
  const prompt = skill.promptTemplate(vals);
  document.getElementById('prompt-text').innerText = prompt;
  document.getElementById('generated-prompt-box').classList.remove('hidden');
}

async function runGemini() {
  const btn = document.getElementById('run-gemini-btn');
  const prompt = document.getElementById('prompt-text').innerText;
  
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Думает...';
  
  document.getElementById('gemini-analysis-section').classList.remove('hidden');
  const content = document.getElementById('analysis-content');
  content.innerHTML = '<div class="flex items-center gap-3 text-blue-400"><i class="fas fa-sparkles animate-pulse"></i><span>Нейросеть анализирует ваш промпт...</span></div>';
  
  // Real logic would call Gemini API. For this copy, we simulate a very smart response.
  setTimeout(() => {
    content.innerHTML = `
      <div class="space-y-4">
        <p class="text-white font-medium italic">"Как твой ментор, я сразу отмечу: постановка требует доработки. Она нарушает базовый принцип SMART — измеримость и конкретика."</p>
        <div class="h-px bg-white/5 my-4"></div>
        <h4 class="text-blue-400 font-bold">Разбор по пунктам:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Двусмысленность:</strong> Понятие "лиды" не определено (SQL, MQL?).</li>
          <li><strong>Риски:</strong> ИИ может предложить дешевый трафик низкого качества.</li>
        </ul>
        <h4 class="text-green-400 font-bold">Улучшенный вариант:</h4>
        <div class="bg-black/30 p-4 rounded-lg border border-green-500/20 text-sm text-gray-200">
          Масштабировать лидогенерацию через бесплатные инструменты (SEO, контент), обеспечив +20% к количеству квалифицированных заявок в CRM без потери текущего LTV.
        </div>
      </div>
    `;
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-magic"></i> Прогнать через Gemini';
    
    // Award XP and complete
    if (!state.completedSkills.includes(state.currentSkill.id)) {
      state.completedSkills.push(state.currentSkill.id);
      state.xp += 150;
      if (state.xp >= 2000) state.level = 7;
      save();
      updateUI();
    }
  }, 2500);
}

function updateUI() {
  document.getElementById('xp-display').innerText = state.xp;
  document.getElementById('level-number').innerText = state.level;
  const progress = (state.completedSkills.length / 10) * 100;
  document.getElementById('overall-progress').innerText = Math.round(progress) + '%';
  document.getElementById('level-progress').style.width = (state.xp % 1000 / 10) + '%';
}

function save() {
  localStorage.setItem('gym_state_v2', JSON.stringify(state));
}

function toggleLeaderboard() {
  const modal = document.getElementById('leaderboard-modal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = leaderboard.map(user => `
      <div class="flex items-center justify-between p-4 ${user.isCurrent ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/5'} rounded-2xl">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold border border-white/10">
            ${user.avatar}
          </div>
          <div>
            <div class="text-sm font-bold flex items-center gap-2">
              ${user.name} ${user.isCurrent ? '<span class="text-[8px] bg-blue-500 px-1 rounded text-white uppercase">Вы</span>' : ''}
            </div>
            <div class="text-[10px] text-gray-500">Lvl ${user.level} • Master</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-xs font-bold text-white">${user.xp} XP</div>
          <div class="text-[10px] text-gray-500">#${user.rank}</div>
        </div>
      </div>
    `).join('');
  }
}

function copyPrompt() {
  const text = document.getElementById('prompt-text').innerText;
  navigator.clipboard.writeText(text);
  alert('Промпт скопирован!');
}

init();
