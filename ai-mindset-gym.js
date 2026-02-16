// AI Mindset Gym - JavaScript file
// Skills data
const skills = [
  {
    id: 1,
    title: 'Постановка задачи',
    icon: 'fas fa-bullseye',
    color: 'blue',
    time: '10м',
    description: 'Формулируем задачу четко',
    inputs: [
      { label: 'Цель', placeholder: 'Увеличить лиды...', type: 'input' },
      { label: 'Метрика', placeholder: '+ 20%', type: 'input' }
    ]
  },
  {
    id: 2,
    title: 'Дизайн системы',
    icon: 'fas fa-project-diagram',
    color: 'purple',
    time: '15м',
    description: 'Проектируем архитектуру',
    inputs: [
      { label: 'Компоненты', placeholder: 'API, БД...', type: 'textarea' }
    ]
  },
  {
    id: 3,
    title: 'Кодирование',
    icon: 'fas fa-code',
    color: 'green',
    time: '20м',
    description: 'Пишем чистый код',
    inputs: [
      { label: 'Язык', placeholder: 'Python', type: 'input' },
      { label: 'Фреймворк', placeholder: 'FastAPI', type: 'input' }
    ]
  }
];

// Leaderboard data
const leaderboard = [
  { name: 'Александр В.', xp: 12450, level: 12, image: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Марина К.', xp: 11200, level: 11, image: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Дмитрий С.', xp: 9800, level: 9, image: 'https://i.pravatar.cc/150?u=3' }
];

// State management
let state = {
  xp: 250,
  level: 1,
  goals: [],
  currentSkill: null
};

// Initialize app
function init() {
  const saved = localStorage.getItem('gym_state');
  if (saved) {
    state = JSON.parse(saved);
  }
  updateUI();
  renderSkills();
}

// Render skills cards
function renderSkills() {
  const container = document.getElementById('skills');
  if (!container) return;
  
  container.innerHTML = '';
  skills.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.onclick = () => showSkill(skill, index);
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold">${skill.title}</h3>
          <p class="text-gray-400 mt-1">${skill.description}</p>
        </div>
        <div class="text-right">
          <div class="bg-${skill.color}-500/20 text-${skill.color}-400 px-3 py-1 rounded-full text-sm">
            ${skill.time}
          </div>
          <i class="${skill.icon} text-3xl text-${skill.color}-400 mt-2"></i>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Show skill view
function showSkill(skill, index) {
  state.currentSkill = skill;
  document.getElementById('dash').classList.add('hidden');
  document.getElementById('sv').classList.remove('hidden');
  
  const skillTitle = document.getElementById('st');
  if (skillTitle) {
    skillTitle.innerHTML = `
      <div class="flex items-center gap-3">
        <i class="${skill.icon} text-3xl text-${skill.color}-400"></i>
        <div>
          <h2 class="text-2xl font-bold">${skill.title}</h2>
          <p class="text-gray-400">${skill.description}</p>
        </div>
      </div>
    `;
  }
  renderForm();
}

// Go back to dashboard
function dash() {
  document.getElementById('dash').classList.remove('hidden');
  document.getElementById('sv').classList.add('hidden');
  renderSkills();
}

// Update UI
function updateUI() {
  const xpDisplay = document.getElementById('xmd');
  const levelDisplay = document.getElementById('lvd');
  const progressBar = document.getElementById('lvp');
  
  if (xpDisplay) xpDisplay.innerText = state.xp;
  if (levelDisplay) levelDisplay.innerText = state.level;
  if (progressBar) {
    progressBar.style.width = ((state.xp % 1000) / 1000 * 100) + '%';
  }
}

// Save state
function save() {
  localStorage.setItem('gym_state', JSON.stringify(state));
}

// Toggle leaderboard
function toggleLeaderboard() {
  const modal = document.getElementById('lm');
  if (!modal) return;
  
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    const list = document.getElementById('ll');
    if (list) {
      list.innerHTML = '';
      leaderboard.forEach((user, index) => {
        list.innerHTML += `
          <div class="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
            <div class="flex items-center gap-3">
              <img src="${user.image}" class="w-12 h-12 rounded-full"/>
              <div>
                <div class="font-semibold">${user.name}</div>
                <div class="text-sm text-gray-400">XP: ${user.xp} | Уровень: ${user.level}</div>
              </div>
            </div>
            <div class="text-2xl font-bold text-purple-400">#${index + 1}</div>
          </div>
        `;
      });
    }
  }
}

// Render form (placeholder)
function renderForm() {
  // Implementation for rendering input form
  console.log('Rendering form for skill:', state.currentSkill);
}

// Run AI function
function runAI() {
  const btn = document.getElementById('runBtn');
  if (!btn) return;
  
  const originalText = btn.innerHTML;
  btn.innerHTML = '⏳ Думает...';
  btn.disabled = true;
  
  setTimeout(() => {
    const advice = document.getElementById('ga');
    if (advice) {
      advice.innerHTML = `🎯 Google подсказывает: попробуйте запросы о похожих задачах. Продолжайте думать самостоятельно!`;
    }
    btn.innerHTML = originalText;
    btn.disabled = false;
    
    // Award XP
    state.xp += 50;
    if (state.xp >= state.level * 1000) {
      state.level++;
      alert('🎉 Уровень ' + state.level + '!');
    }
    updateUI();
    save();
  }, 2000);
}

// Copy text
function copy() {
  const noteContent = document.getElementById('nc');
  if (noteContent) {
    navigator.clipboard.writeText(noteContent.innerText);
    alert('📋 Скопировано!');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
