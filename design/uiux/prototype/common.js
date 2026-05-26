/* ============================================================
   QaAgent 프로토타입 — 공통 JavaScript
   ============================================================ */

/* ── 화면 목록 ─────────────────────────────────────────── */
const SCREENS = [
  { num: '01', name: '로그인',        file: '01-로그인.html' },
  { num: '02', name: '회원가입',      file: '02-회원가입.html' },
  { num: '03', name: '메인대시보드',  file: '03-메인대시보드.html' },
  { num: '04', name: '에이전트목록',  file: '04-에이전트목록.html' },
  { num: '05', name: '에이전트등록',  file: '05-에이전트등록.html' },
  { num: '06', name: '에이전트상세설정', file: '06-에이전트상세설정.html' },
  { num: '07', name: '테스트셋관리',  file: '07-테스트셋관리.html' },
  { num: '08', name: '평가실행',      file: '08-평가실행.html' },
  { num: '09', name: '평가결과',      file: '09-평가결과.html' },
  { num: '10', name: '평가이력',      file: '10-평가이력.html' },
  { num: '11', name: '알림이력',      file: '11-알림이력.html' },
  { num: '12', name: '브리핑설정',    file: '12-브리핑설정.html' },
  { num: '13', name: '브리핑이력',    file: '13-브리핑이력.html' },
  { num: '14', name: '게이트설정',    file: '14-게이트설정.html' },
  { num: '15', name: '게이트결과',    file: '15-게이트결과.html' },
  { num: '16', name: '위젯설정',      file: '16-위젯설정.html' },
  { num: '17', name: '위젯공개조회',  file: '17-위젯공개조회.html' },
];

/* ── 샘플 데이터 ─────────────────────────────────────── */
const SAMPLE = {
  user: { name: '홍길동', role: 'ML엔지니어', email: 'hong@company.ai' },

  agents: [
    {
      id: 'agnt-001', name: '챗봇-A', type: 'RAG',
      status: 'normal', statusLabel: '정상',
      endpoint: 'https://chat-api.company.ai/v1',
      model: 'gpt-4o',
      lastEval: '2시간 전', lastEvalAt: '2026-05-26 12:00',
      faithfulness: 0.82, answerRelevancy: 0.79, contextRecall: 0.71,
      threshold: { f: 0.80, ar: 0.80, cr: 0.70 },
      responseTime: 320,
    },
    {
      id: 'agnt-002', name: 'RAG-B', type: 'RAG',
      status: 'warning', statusLabel: '경고',
      endpoint: 'https://rag-api.company.ai/v1',
      model: 'claude-sonnet-4-6',
      lastEval: '1일 전', lastEvalAt: '2026-05-25 09:00',
      faithfulness: 0.75, answerRelevancy: 0.80, contextRecall: 0.68,
      threshold: { f: 0.75, ar: 0.75, cr: 0.70 },
      responseTime: 510,
    },
    {
      id: 'agnt-003', name: '검색-C', type: '검색증강',
      status: 'inactive', statusLabel: '비활성',
      endpoint: 'https://search-api.company.ai/v1',
      model: 'gpt-4o-mini',
      lastEval: '5일 전', lastEvalAt: '2026-05-21 15:30',
      faithfulness: null, answerRelevancy: null, contextRecall: null,
      threshold: { f: 0.70, ar: 0.70, cr: 0.65 },
      responseTime: null,
    },
  ],

  testsets: [
    { id: 'ts-001', name: 'testset-v2.csv',  count: 150, format: 'CSV',  uploadedAt: '어제',   status: 'ok' },
    { id: 'ts-002', name: 'testset-v1.json', count: 80,  format: 'JSON', uploadedAt: '3일 전', status: 'ok' },
  ],

  evalHistory: [
    { id: 'eval-101', agent: '챗봇-A', testset: 'testset-v2.csv', date: '2026-05-26', mode: '전체', f: 0.82, ar: 0.79, cr: 0.71 },
    { id: 'eval-100', agent: 'RAG-B',  testset: 'testset-v1.json', date: '2026-05-25', mode: '경량', f: 0.75, ar: 0.80, cr: 0.68 },
    { id: 'eval-099', agent: '챗봇-A', testset: 'testset-v2.csv', date: '2026-05-23', mode: '전체', f: 0.79, ar: 0.84, cr: 0.73 },
    { id: 'eval-098', agent: '챗봇-A', testset: 'testset-v2.csv', date: '2026-05-20', mode: '전체', f: 0.85, ar: 0.81, cr: 0.76 },
    { id: 'eval-097', agent: 'RAG-B',  testset: 'testset-v1.json', date: '2026-05-18', mode: '경량', f: 0.77, ar: 0.78, cr: 0.70 },
  ],

  notifications: [
    { id: 'ntf-001', agent: '챗봇-A', metric: 'ContextRecall', severity: 'danger',  severityLabel: '긴급', date: '2026-05-26 14:32', slack: true,  email: true  },
    { id: 'ntf-002', agent: 'RAG-B',  metric: 'AnswerRelevancy', severity: 'warning', severityLabel: '경고', date: '2026-05-25 09:15', slack: false, email: true  },
    { id: 'ntf-003', agent: '챗봇-A', metric: 'Faithfulness',   severity: 'warning', severityLabel: '경고', date: '2026-05-23 11:00', slack: true,  email: true  },
  ],

  gateResults: [
    { id: 'gate-201', pr: '124', commit: 'b2c3d4e', result: 'pass', agent: '챗봇-A', date: '2026-05-26 15:00', elapsed: '1분 42초' },
    { id: 'gate-200', pr: '123', commit: 'a1b2c3d', result: 'fail', agent: '챗봇-A', date: '2026-05-26 14:20', elapsed: '2분 15초',
      violations: [{ metric: 'Faithfulness', current: 0.74, threshold: 0.80, prev: 0.82 }] },
    { id: 'gate-199', pr: '122', commit: 'f9e8d7c', result: 'pass', agent: 'RAG-B',  date: '2026-05-25 10:00', elapsed: '1분 58초' },
  ],

  briefings: [
    { id: 'br-001', date: '2026-05-19 (월)', channels: 'Slack / 이메일', recipients: 3, status: 'success', statusLabel: '발송 성공' },
    { id: 'br-002', date: '2026-05-12 (월)', channels: 'Slack · 실패 후 재발송', recipients: 3, status: 'retry', statusLabel: '재발송 성공 (화요일)' },
    { id: 'br-003', date: '2026-05-05 (월)', channels: 'Slack / 이메일', recipients: 2, status: 'success', statusLabel: '발송 성공' },
  ],

  /* 차트 데이터 (최근 10회) */
  chartData: [
    { date: '5/10', f: 0.85, ar: 0.84, cr: 0.76 },
    { date: '5/12', f: 0.83, ar: 0.82, cr: 0.75 },
    { date: '5/14', f: 0.86, ar: 0.81, cr: 0.77 },
    { date: '5/16', f: 0.84, ar: 0.83, cr: 0.74 },
    { date: '5/18', f: 0.81, ar: 0.85, cr: 0.73 },
    { date: '5/20', f: 0.85, ar: 0.81, cr: 0.76 },
    { date: '5/22', f: 0.80, ar: 0.78, cr: 0.72 },
    { date: '5/23', f: 0.79, ar: 0.84, cr: 0.73 },
    { date: '5/25', f: 0.75, ar: 0.80, cr: 0.68 },
    { date: '5/26', f: 0.82, ar: 0.79, cr: 0.71 },
  ],
};

/* ── 프로토타입 네비게이션 렌더링 ─────────────────────── */
function renderProtoNav(currentFile) {
  const nav = document.getElementById('protoNav');
  if (!nav) return;
  const label = document.createElement('span');
  label.className = 'proto-nav-label';
  label.textContent = '화면:';
  nav.appendChild(label);
  SCREENS.forEach(s => {
    const btn = document.createElement('a');
    btn.className = 'proto-btn' + (currentFile === s.file ? ' active' : '');
    btn.href = s.file;
    btn.textContent = s.num + ' ' + s.name;
    nav.appendChild(btn);
  });
}

/* ── 토스트 ───────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const frame = document.querySelector('.phone-frame') || document.body;
  const existing = frame.querySelector('.toast');
  if (existing) existing.remove();

  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  frame.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ── 모달 제어 ────────────────────────────────────────── */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('open');
    el.addEventListener('click', function closeOnBg(e) {
      if (e.target === el) { closeModal(id); el.removeEventListener('click', closeOnBg); }
    });
  }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

/* ── 탭 초기화 ────────────────────────────────────────── */
function initTabs(containerId) {
  const container = document.getElementById(containerId) || document;
  const btns   = container.querySelectorAll('.tab-btn');
  const panels = container.querySelectorAll('.tab-panel');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels[i].classList.add('active');
    });
  });
}

/* ── 토글 초기화 ──────────────────────────────────────── */
function initToggle(el, onChange) {
  el.addEventListener('click', () => {
    el.classList.toggle('on');
    if (onChange) onChange(el.classList.contains('on'));
  });
}
function initAllToggles() {
  document.querySelectorAll('.toggle[data-toggle]').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('on'));
  });
}

/* ── 슬라이더 값 동기화 ───────────────────────────────── */
function initSlider(sliderId, valueId) {
  const slider = document.getElementById(sliderId);
  const valueEl = document.getElementById(valueId);
  if (!slider || !valueEl) return;
  const update = () => { valueEl.textContent = parseFloat(slider.value).toFixed(2); };
  slider.addEventListener('input', update);
  update();
}

/* ── 복사 버튼 ────────────────────────────────────────── */
function initCopyBtns() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.copy);
      const text = target ? target.textContent : btn.dataset.copyText || '';
      navigator.clipboard.writeText(text).then(() => showToast('클립보드에 복사됨'));
    });
  });
}

/* ── Bottom Nav ───────────────────────────────────────── */
function initBottomNav(activeIndex) {
  const items = document.querySelectorAll('.nav-item');
  items.forEach((item, i) => {
    if (i === activeIndex) item.classList.add('active');
  });
}

/* ── 유틸리티 ─────────────────────────────────────────── */
function statusBadgeHtml(status) {
  const map = {
    normal:   { cls: 'badge-green',  dot: 'dot-green',  label: '정상' },
    warning:  { cls: 'badge-yellow', dot: 'dot-yellow', label: '경고' },
    danger:   { cls: 'badge-red',    dot: 'dot-red',    label: '위험' },
    inactive: { cls: 'badge-gray',   dot: 'dot-gray',   label: '비활성' },
  };
  const s = map[status] || map.inactive;
  return `<span class="badge ${s.cls}"><span class="badge-dot ${s.dot}"></span>${s.label}</span>`;
}

function agentStatusClass(status) {
  return { normal: 'dot-green', warning: 'dot-yellow', danger: 'dot-red', inactive: 'dot-gray' }[status] || 'dot-gray';
}

function metricClass(val, threshold) {
  if (val === null) return 'normal';
  if (val < threshold * 0.9) return 'danger';
  if (val < threshold) return 'warning';
  return 'normal';
}

/* ── DOM 준비 후 공통 초기화 ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initAllToggles();
  initCopyBtns();
});
