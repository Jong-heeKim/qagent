# AI Agent 품질 검증 플랫폼 — 스타일 가이드

**버전**: 2.0  
**작성일**: 2026-05-26  
**레퍼런스**: 뤼튼 (wwit.design/2024/12/24/wrtn/) — 단계적 온보딩, 명확한 설정 UI, 모바일 네이티브 인터랙션의 한국 대표 AI 서비스  
**관련 문서**: [UI/UX 설계서](uiux.md)

---

## 목차

1. [브랜드 아이덴티티](#1-브랜드-아이덴티티)
2. [디자인 원칙](#2-디자인-원칙)
3. [컬러 시스템](#3-컬러-시스템)
4. [타이포그래피](#4-타이포그래피)
5. [간격 시스템](#5-간격-시스템)
6. [컴포넌트 스타일](#6-컴포넌트-스타일)
7. [반응형 브레이크포인트](#7-반응형-브레이크포인트)
8. [서비스 특화 컴포넌트](#8-서비스-특화-컴포넌트)
9. [인터랙션 패턴](#9-인터랙션-패턴)
10. [변경 이력](#10-변경-이력)

---

## 1. 브랜드 아이덴티티

### 1.1 서비스 포지셔닝

**QaAgent**는 AI Agent의 응답 품질을 측정하고 개선하는 B2B 플랫폼입니다. 주요 사용자는 ML 엔지니어와 AI 품질 엔지니어로, 복잡한 품질 지표 데이터를 신속하게 파악하고 신뢰할 수 있는 결과를 기반으로 의사결정을 내립니다.

| 속성 | 정의 |
|------|------|
| 키워드 | 신뢰, 정밀, 명확, 즉각 |
| 톤 | 전문적이지만 이해하기 쉬운 |
| 핵심 가치 | 데이터 신뢰성, 빠른 이상 감지, 직관적 조작 |

### 1.2 서비스 아이콘 방향

- **형태**: 품질 체크마크(✓) + 그래프 조합
- **컬러**: Primary Blue (#2563EB) 단색 또는 Blue-Green 그라디언트
- **스타일**: 라운드 처리(border-radius 22%), 간결한 선 아이콘
- **크기**: 앱 아이콘(1024px), 파비콘(32px), 인라인(24px, 20px, 16px)

---

## 2. 디자인 원칙

### 2.1 Mobile First

모바일 화면(390px)을 기준으로 설계하고, 태블릿·데스크톱으로 점진적으로 확장합니다.

```
모바일(390px) → 태블릿(768px) → 데스크톱(1024px+)
하단 탭 바     → 아이콘 사이드바 → 텍스트 사이드바
```

- 터치 타겟 최소 크기: 44×44px (iOS HIG 기준)
- 한 손 조작 가능한 핵심 액션 배치 (화면 하단 1/3 우선)
- 스크롤 방향: 단방향(세로) 원칙, 가로 스크롤 최소화

### 2.2 Data First

품질 지표 숫자와 상태가 항상 가장 먼저 눈에 들어와야 합니다.

- 지표 점수: 큰 폰트 + 상태 컬러로 즉각 인지
- 신호등 시스템(Traffic Light): 색상 + 텍스트 레이블 병행 (색각 이상 대응)
- 추이 그래프: 임계값 기준선을 항상 표시하여 맥락 제공

### 2.3 Trust Signal

사용자가 플랫폼의 데이터를 신뢰할 수 있도록 명확한 시각적 피드백을 제공합니다.

- 모든 상태 변화에 즉각적인 피드백 (로딩, 성공, 에러)
- 에러 메시지는 원인과 해결 방법을 함께 제공
- 임계값 위반 시 구체적인 수치와 위반 정도 표시

### 2.4 Progressive Disclosure

복잡한 설정은 단계적으로 노출합니다. (뤼튼 온보딩 참조)

- 에이전트 등록: Step1(기본 정보) → Step2(연결 테스트) → Step3(임계값·알림) 순서
- 기본값 자동 적용 후 선택적 상세 설정 제공
- 고급 옵션은 접힌 상태로 기본 표시

---

## 3. 컬러 시스템

### 3.1 Primary (브랜드 블루)

| 이름 | 헥스 | 용도 |
|------|------|------|
| Blue 700 (Dark) | `#1D4ED8` | Active, pressed 상태 |
| Blue 600 (Main) | `#2563EB` | 주요 버튼, 링크, 강조 |
| Blue 500 (Light) | `#3B82F6` | Hover 상태, 아이콘 |
| Blue 100 (Pale) | `#DBEAFE` | Focus ring, 배경 강조 |
| Blue 50 (Ghost) | `#EFF6FF` | 선택된 항목 배경 |

```css
--color-primary-dark:  #1D4ED8;
--color-primary:       #2563EB;
--color-primary-light: #3B82F6;
--color-primary-pale:  #DBEAFE;
--color-primary-ghost: #EFF6FF;
```

### 3.2 Status Colors (신호등 시스템)

B2B 품질 플랫폼의 핵심: 색상만이 아닌 텍스트 레이블을 반드시 병행 표시합니다.

| 상태 | 배경(뱃지) | 텍스트 | 닷(•) | 의미 |
|------|-----------|--------|-------|------|
| 정상 (Normal) | `#DCFCE7` | `#15803D` | `#22C55E` | 임계값 충족, 정상 운영 |
| 경고 (Warning) | `#FEF3C7` | `#92400E` | `#FBBF24` | 임계값 근접, 주의 필요 |
| 위험 (Danger) | `#FEE2E2` | `#991B1B` | `#EF4444` | 임계값 위반, 즉각 조치 |
| 비활성 (Inactive) | `#F1F5F9` | `#64748B` | `#94A3B8` | 연결 안됨, 비활성 |

```css
/* 정상 */
--color-success:      #22C55E;
--color-success-bg:   #DCFCE7;
--color-success-text: #15803D;

/* 경고 */
--color-warning:      #FBBF24;
--color-warning-bg:   #FEF3C7;
--color-warning-text: #92400E;

/* 위험 */
--color-danger:       #EF4444;
--color-danger-bg:    #FEE2E2;
--color-danger-text:  #991B1B;

/* 비활성 */
--color-inactive:     #94A3B8;
--color-inactive-bg:  #F1F5F9;
--color-inactive-text:#64748B;
```

### 3.3 Neutral (Slate 계열)

| 이름 | 헥스 | 용도 |
|------|------|------|
| Slate 50 | `#F8FAFC` | 페이지 배경 |
| Slate 100 | `#F1F5F9` | 섹션 배경, 비활성 입력 |
| Slate 200 | `#E2E8F0` | 구분선, 테두리 |
| Slate 300 | `#CBD5E1` | 비활성 컨트롤 |
| Slate 400 | `#94A3B8` | 플레이스홀더 |
| Slate 500 | `#64748B` | 보조 텍스트 |
| Slate 600 | `#475569` | 본문 텍스트(라이트) |
| Slate 700 | `#334155` | 본문 텍스트 |
| Slate 800 | `#1E293B` | 헤딩 |
| Slate 900 | `#0F172A` | 강조 헤딩, 다크 배경 텍스트 |

### 3.4 Chart Colors (지표 그래프)

| 지표 | 컬러 | 헥스 |
|------|------|------|
| Faithfulness | Blue | `#2563EB` |
| AnswerRelevancy | Purple | `#7C3AED` |
| ContextRecall | Emerald | `#059669` |
| 임계값 기준선 | Orange (dashed) | `#F97316` |

---

## 4. 타이포그래피

### 4.1 폰트 패밀리

```css
/* 본문/UI 텍스트 */
font-family: -apple-system, BlinkMacSystemFont, "Noto Sans KR", 
             "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;

/* 코드, ID, 점수 숫자 */
font-family: "JetBrains Mono", "Fira Code", "SF Mono", 
             "Consolas", monospace;
```

한국어 렌더링: `word-break: keep-all` 적용으로 자연스러운 줄바꿈

### 4.2 텍스트 스케일

| 이름 | 크기 | 줄높이 | 웨이트 | 용도 |
|------|------|--------|--------|------|
| xs | 12px | 1.4 | 400 | 태그, 타임스탬프 |
| sm | 14px | 1.5 | 400 | 보조 텍스트, 레이블 |
| base | 16px | 1.6 | 400 | 본문 |
| lg | 18px | 1.5 | 500 | 강조 본문, 카드 제목 |
| xl | 20px | 1.4 | 600 | 섹션 소제목 |
| 2xl | 24px | 1.3 | 600 | 화면 제목 |
| 3xl | 30px | 1.2 | 700 | 대형 숫자, 점수 |
| 4xl | 36px | 1.1 | 700 | 히어로 숫자 |

### 4.3 특수 텍스트 스타일

```css
/* 점수 숫자 — 임계값 미달 시 위험 컬러 적용 */
.score-number {
  font-size: 30px;
  font-weight: 700;
  font-family: "JetBrains Mono", monospace;
  line-height: 1.2;
}

/* 변화율 표시 */
.score-delta {
  font-size: 12px;
  font-weight: 500;
}
.score-delta--up   { color: #15803D; }
.score-delta--down { color: #991B1B; }

/* 에이전트 ID, API 엔드포인트 */
.mono-id {
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: #64748B;
}
```

---

## 5. 간격 시스템

### 5.1 기본 단위: 4px 배수

```
4px → 8px → 12px → 16px → 20px → 24px → 32px → 40px → 48px → 64px
```

| 토큰 | 값 | 주요 용도 |
|------|----|----------|
| space-1 | 4px | 아이콘↔텍스트 간격 |
| space-2 | 8px | 내부 padding (compact) |
| space-3 | 12px | 인라인 요소 간격 |
| space-4 | 16px | 컴포넌트 내부 padding 기본 |
| space-5 | 20px | 카드 내부 padding |
| space-6 | 24px | 섹션 간격 |
| space-8 | 32px | 주요 컨텐츠 블록 간격 |
| space-10 | 40px | 화면 상하 padding |
| space-12 | 48px | 내비게이션 바 높이 |
| space-16 | 64px | 사이드바 너비(아이콘), 섹션 대간격 |

### 5.2 Border Radius

| 이름 | 값 | 용도 |
|------|----|------|
| radius-sm | 4px | 태그, 인라인 뱃지 |
| radius-md | 8px | 버튼, 입력 필드, 작은 카드 |
| radius-lg | 12px | 카드, 모달 |
| radius-xl | 16px | 대형 패널, 바텀시트 상단 |
| radius-full | 9999px | 원형 뱃지, 토글, 아바타 |

### 5.3 Shadow

```css
/* 뤼튼 참조: 0 2px 5px 1.5px rgba(0,0,0,0.08) */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);   /* 카드 기본 */
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);  /* 모달, 드롭다운 */
--shadow-xl: 0 8px 32px rgba(0, 0, 0, 0.16);  /* 오버레이 패널 */
```

---

## 6. 컴포넌트 스타일

### 6.1 버튼

뤼튼 참조: 큰 패딩, 명확한 배경색, 충분한 둥근 모서리.

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
  white-space: nowrap;
  min-height: 40px;        /* 기본 높이 */
  padding: 0 16px;
}

/* 사이즈 */
.btn--sm { min-height: 32px; padding: 0 12px; font-size: 13px; }
.btn--md { min-height: 40px; padding: 0 16px; }
.btn--lg { min-height: 48px; padding: 0 24px; font-size: 16px; }

/* 모바일 주요 액션: full-width */
.btn--full { width: 100%; }

/* Primary */
.btn--primary {
  background: #2563EB;
  color: #fff;
  border: none;
}
.btn--primary:hover  { background: #1D4ED8; }
.btn--primary:active { background: #1E40AF; }

/* Secondary */
.btn--secondary {
  background: #fff;
  color: #334155;
  border: 1px solid #E2E8F0;
}
.btn--secondary:hover { background: #F8FAFC; border-color: #CBD5E1; }

/* Danger */
.btn--danger {
  background: #EF4444;
  color: #fff;
  border: none;
}
.btn--danger:hover { background: #DC2626; }

/* Ghost */
.btn--ghost {
  background: transparent;
  color: #64748B;
  border: none;
}
.btn--ghost:hover { background: #F1F5F9; color: #334155; }

/* 로딩 상태 */
.btn--loading { opacity: 0.7; pointer-events: none; }
.btn--loading::after {
  content: '';
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}
```

### 6.2 입력 필드

```css
/* 뤼튼 참조: 모바일 최소 44px 터치 영역 */
.input {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: #fff;
  font-size: 16px;         /* iOS 자동 확대 방지 */
  color: #334155;
  transition: border-color 150ms, box-shadow 150ms;
  -webkit-appearance: none;
}

.input::placeholder { color: #94A3B8; }

.input:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px #DBEAFE;
}

.input--error {
  border-color: #EF4444;
  background: #FFF5F5;
}

.input--error:focus { box-shadow: 0 0 0 3px #FEE2E2; }

/* 에러 메시지 */
.input-error-msg {
  margin-top: 4px;
  font-size: 12px;
  color: #EF4444;
}

/* URL 입력 필드 (API 엔드포인트) */
.input--mono {
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
}
```

### 6.3 카드

```css
/* 기본 카드 */
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: box-shadow 150ms;
}

.card:hover { box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12); }

/* 에이전트 목록 카드 */
.agent-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  background: #fff;
}

/* 요약 지표 카드 (대시보드) */
.metric-summary-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  border-left: 4px solid currentColor;  /* 상태 컬러 반영 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### 6.4 상태 뱃지 (Traffic Light Badge)

```css
/* 뱃지 공통 */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}

/* 상태별 */
.badge--normal  { background: #DCFCE7; color: #15803D; }
.badge--warning { background: #FEF3C7; color: #92400E; }
.badge--danger  { background: #FEE2E2; color: #991B1B; }
.badge--inactive{ background: #F1F5F9; color: #64748B; }

/* 상태 점(dot) */
.badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.badge--normal  .badge-dot { background: #22C55E; }
.badge--warning .badge-dot { background: #FBBF24; }
.badge--danger  .badge-dot { background: #EF4444; }
.badge--inactive.badge-dot { background: #94A3B8; }
```

### 6.5 슬라이더 (임계값 설정 — 뤼튼 참조)

뤼튼 개인화 설정 화면의 슬라이더 UI를 임계값 설정에 적용합니다.

```css
/* 슬라이더 컨테이너 */
.threshold-slider {
  position: relative;
  padding: 16px 0;
}

.threshold-slider__track {
  height: 4px;
  border-radius: 2px;
  background: #E2E8F0;
  position: relative;
}

.threshold-slider__fill {
  height: 100%;
  border-radius: 2px;
  background: #2563EB;
}

/* Native input 커스터마이징 */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(to right, #2563EB var(--fill), #E2E8F0 var(--fill));
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #2563EB;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
  cursor: pointer;
}

/* 현재값 레이블 */
.slider-value-label {
  position: absolute;
  top: -28px;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  color: #2563EB;
  white-space: nowrap;
}

/* 구간 레이블 */
.slider-range-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 11px;
  color: #94A3B8;
}
```

### 6.6 토글 스위치 (알림 설정 — 뤼튼 참조)

```css
/* 뤼튼 알림 설정 화면 토글 참조 */
.toggle {
  position: relative;
  width: 44px; height: 24px;
  border-radius: 12px;
  background: #CBD5E1;
  cursor: pointer;
  transition: background 200ms;
  flex-shrink: 0;
}

.toggle.is-on { background: #2563EB; }

.toggle__thumb {
  position: absolute;
  top: 2px; left: 2px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: transform 200ms;
}

.toggle.is-on .toggle__thumb { transform: translateX(20px); }
```

### 6.7 목록 항목 (설정 화면 — 뤼튼 참조)

뤼튼 설정 화면의 "아이콘 + 레이블 + 우측 컨트롤" 패턴을 설정 화면에 적용합니다.

```css
/* 설정 항목 */
.setting-item {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;        /* 충분한 터치 영역 */
  padding: 0 16px;
  border-bottom: 1px solid #F1F5F9;
  background: #fff;
}

.setting-item:last-child { border-bottom: none; }

.setting-item__icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: #EFF6FF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #2563EB;
}

.setting-item__label {
  flex: 1;
  font-size: 15px;
  color: #334155;
}

.setting-item__value {
  font-size: 14px;
  color: #64748B;
}

.setting-item__chevron {
  color: #CBD5E1;
  font-size: 20px;
}
```

### 6.8 Step Indicator (에이전트 등록 — 뤼튼 온보딩 참조)

뤼튼의 단계별 진행 UI를 에이전트 등록 플로우에 적용합니다.

```css
/* 스텝 인디케이터 */
.step-indicator {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 16px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.step__circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

/* 상태별 */
.step--done    .step__circle { background: #2563EB; color: #fff; }
.step--active  .step__circle { background: #2563EB; color: #fff; box-shadow: 0 0 0 4px #DBEAFE; }
.step--pending .step__circle { background: #F1F5F9; color: #94A3B8; }

.step__label {
  font-size: 11px;
  color: #94A3B8;
}
.step--active .step__label { color: #2563EB; font-weight: 600; }
.step--done   .step__label { color: #64748B; }

/* 연결선 */
.step-connector {
  flex: 1;
  height: 1px;
  background: #E2E8F0;
  margin-bottom: 18px;    /* label 높이 보정 */
}
.step-connector--done { background: #2563EB; }
```

### 6.9 Toast 알림

```css
.toast {
  position: fixed;
  bottom: calc(80px + env(safe-area-inset-bottom)); /* Bottom Nav 위 (아이폰 홈바 대응) */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  z-index: 9999;
  animation: toastIn 200ms ease, toastOut 200ms ease 2.8s forwards;
  white-space: nowrap;
}

.toast--success { background: #1E293B; color: #fff; }
.toast--error   { background: #EF4444; color: #fff; }
.toast--warning { background: #F59E0B; color: #fff; }

@keyframes toastIn {
  from { opacity: 0; transform: translateX(-50%) translateY(8px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes toastOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
```

---

## 7. 반응형 브레이크포인트

### 7.1 브레이크포인트 정의

```css
/* Mobile First */
/* xs: 기본 — 320px~ */

/* sm: 소형 모바일 이상 — 390px~ */
@media (min-width: 390px) { }

/* md: 태블릿 — 768px~ */
@media (min-width: 768px) { }

/* lg: 데스크톱 — 1024px~ */
@media (min-width: 1024px) { }

/* xl: 와이드 데스크톱 — 1280px~ */
@media (min-width: 1280px) { }
```

### 7.2 레이아웃 변화

| 요소 | 모바일 (< 768px) | 태블릿 (768~1023px) | 데스크톱 (≥ 1024px) |
|------|----------------|-------------------|------------------|
| 내비게이션 | 하단 탭 바 (64px) | 아이콘 사이드바 (64px) | 텍스트 사이드바 (240px) |
| 콘텐츠 최대 폭 | 100% | calc(100% - 64px) | calc(100% - 240px) |
| 카드 레이아웃 | 1열 세로 스택 | 2열 그리드 | 2~3열 그리드 |
| 모달 | 바텀시트 | 중앙 다이얼로그 | 중앙 다이얼로그 |
| 그래프 | 320px 고정 | 자동 폭 | 자동 폭 |
| 헤더 | 화면 상단, 타이틀+아이콘 | 화면 상단, 타이틀+액션 | 사이드바 통합 |

```css
/* 예시: 카드 그리드 */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;         /* 모바일: 1열 */
  gap: 12px;
}

@media (min-width: 768px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }  /* 태블릿: 2열 */
}

@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }  /* 데스크톱: 3열 */
}
```

### 7.3 내비게이션 반응형

```css
/* 모바일: Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 64px;
  background: #fff;
  border-top: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 100;
}

/* 태블릿: 아이콘 사이드바로 전환 */
@media (min-width: 768px) {
  .bottom-nav { display: none; }
  .side-rail   { display: flex; width: 64px; }
}

/* 데스크톱: 텍스트 포함 사이드바 */
@media (min-width: 1024px) {
  .side-rail   { display: none; }
  .side-drawer { display: flex; width: 240px; }
}
```

---

## 8. 서비스 특화 컴포넌트

### 8.1 TrafficLightBadge (신호등 상태 뱃지)

모든 상태 표시에 공통 적용. 색상 + 텍스트 반드시 병행.

```html
<!-- 사용 예 -->
<span class="badge badge--normal">
  <span class="badge-dot"></span>
  정상
</span>

<span class="badge badge--warning">
  <span class="badge-dot"></span>
  경고
</span>

<span class="badge badge--danger">
  <span class="badge-dot"></span>
  위험
</span>
```

**사용 위치**: 에이전트 목록 카드, 대시보드 헤더, 알림 항목, 평가 결과 요약

### 8.2 QualityScoreCard (품질 점수 카드)

```html
<!-- 단일 지표 점수 카드 -->
<div class="score-card score-card--normal">
  <div class="score-card__label">Faithfulness</div>
  <div class="score-card__value">0.87</div>
  <div class="score-card__delta score-delta--up">▲ 2.3%</div>
  <div class="score-card__threshold">임계값: 0.70</div>
</div>
```

```css
.score-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  border-left: 4px solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.score-card--normal  { border-color: #22C55E; }
.score-card--warning { border-color: #FBBF24; }
.score-card--danger  { border-color: #EF4444; }

.score-card__label { font-size: 12px; color: #64748B; margin-bottom: 4px; }
.score-card__value { font-size: 30px; font-weight: 700; font-family: "JetBrains Mono", monospace; }
.score-card__threshold { font-size: 11px; color: #94A3B8; margin-top: 4px; }

/* 첫 평가(이전 데이터 없음): delta 숨기고 "첫 평가" 표시 */
.score-delta--first {
  font-size: 11px;
  color: #94A3B8;
  font-style: italic;
}
```

### 8.3 MetricChart (지표 라인 차트)

```
차트 구성 요소:
┌─────────────────────────────┐
│  1.0 ─────────────────────  │ ← 최대값
│  0.8 ──╮     ╭──────────   │
│  0.7 - - - - - - - - - - - │ ← 임계값 (주황 점선)
│  0.6   ╰────╯              │
│  0.4                        │
│       1/1  1/7  1/14  1/21  │ ← X축: 날짜
└─────────────────────────────┘
  ■ Faithfulness  ■ AnswerRelevancy  ■ ContextRecall
  — — 임계값 기준선
```

- SVG 기반 구현 (반응형, 서버 렌더링 가능)
- 임계값 기준선: 주황(#F97316), stroke-dasharray: "4 4"
- 데이터 포인트: 원형 마커, hover 시 툴팁 표시
- 모바일: 320px 고정, 스크롤 가능한 가로 컨테이너

```css
.chart-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.chart-svg {
  min-width: 320px;
  width: 100%;
  height: auto;
}

/* 임계값 점선 */
.threshold-line {
  stroke: #F97316;
  stroke-width: 1.5;
  stroke-dasharray: 4 4;
}
```

### 8.4 AgentCard (에이전트 목록 카드)

```
┌──────────────────────────────┐
│ [아이콘] 고객상담 AI    [●정상] │  ← 이름 + 상태 뱃지
│          GPT-4o · chat.api.com│  ← 모델명 + 엔드포인트
│ ─────────────────────────── │
│ F: 0.87  AR: 0.91  CR: 0.78  │  ← 최신 지표 3개
│ 마지막 평가: 2시간 전          │  ← 타임스탬프
│ [평가 실행]        [상세 보기] │  ← 액션 버튼
└──────────────────────────────┘
```

```css
.agent-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  overflow: hidden;
}

.agent-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px 10px;
}

.agent-card__metrics {
  display: flex;
  gap: 16px;
  padding: 10px 16px;
  background: #F8FAFC;
  border-top: 1px solid #F1F5F9;
}

.agent-metric {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.agent-metric__label { font-size: 10px; color: #94A3B8; }
.agent-metric__value { font-size: 15px; font-weight: 700; font-family: "JetBrains Mono", monospace; }

.agent-card__footer {
  display: flex;
  gap: 8px;
  padding: 10px 16px 14px;
}
```

### 8.5 EvaluationProgressBar (평가 진행 상태)

```
평가 실행 중  ████████████░░░░░░░  60%
              케이스 12/20 처리 중
```

```css
.eval-progress {
  padding: 16px;
  background: #EFF6FF;
  border-radius: 12px;
  border: 1px solid #DBEAFE;
}

.progress-bar {
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
}

.progress-bar__fill {
  height: 100%;
  background: linear-gradient(90deg, #2563EB, #3B82F6);
  border-radius: 4px;
  transition: width 300ms ease;
}

/* 취소 버튼 */
.eval-progress__cancel {
  color: #64748B;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  display: inline-block;
}
```

### 8.6 ThresholdSlider (임계값 설정 — 뤼튼 개인화 슬라이더 참조)

```
Faithfulness 임계값
정상 최소: 0.70  경고 기준: 0.60  위험 기준: 0.50

  ○────────●────────●──────────
 0.0      0.50    0.60    1.0
           위험   경고   ▲ 정상 기준: 0.70
```

- 3개 핸들(min/warn/danger) 또는 단일 핸들 + 수동 입력
- 구간별 배경색: 위험(빨강) / 경고(노랑) / 정상(초록) 그라디언트
- 뤼튼 참조: 슬라이더 아래 단계 레이블, 현재값 상단 표시

---

## 9. 인터랙션 패턴

### 9.1 전환 애니메이션 (뤼튼 참조)

뤼튼 케이스스터디 CSS에서 확인된 `fadeInUp` 패턴을 서비스에 적용합니다.

```css
/* 화면 진입: 아래에서 위로 fade-in (뤼튼 0.8s 참조, QaAgent는 0.3s로 단축) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 화면 전환: 단순 fade */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* 카드 진입 */
.card-appear { animation: fadeInUp 300ms ease-out; }

/* 화면 전환 */
.page-enter  { animation: fadeIn 200ms ease; }
```

### 9.2 로딩 상태

| 상황 | 처리 방법 |
|------|----------|
| 초기 데이터 로딩 | 스켈레톤 카드 (pulse 애니메이션) |
| 평가 실행 중 | EvaluationProgressBar (실시간 퍼센트) |
| 버튼 클릭 후 | 버튼 내 스피너 + 비활성화 |
| 목록 새로고침 | 상단 로딩 인디케이터 (선 형태) |

```css
/* 스켈레톤 카드 */
.skeleton {
  background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 9.3 피드백 패턴

| 이벤트 | 피드백 방식 | 지속 시간 |
|--------|------------|---------|
| 에이전트 등록 성공 | 초록 Toast | 3초 |
| 연결 테스트 성공 | 인라인 성공 메시지 + 체크 | 영구(다음 액션까지) |
| 연결 테스트 실패 | 인라인 에러 + 원인/해결방법 | 영구(수정까지) |
| 평가 완료 | 초록 Toast + 뱃지 업데이트 | 3초 |
| 임계값 위반 | 빨간 Toast + 알림 아이콘 뱃지 | 5초 |
| 입력 오류 | 인라인 에러 메시지 | 수정까지 |

### 9.4 제스처 (모바일)

| 제스처 | 동작 |
|--------|------|
| 스와이프 다운 | 바텀시트 닫기 |
| 당겨서 새로고침 (Pull-to-refresh) | 평가 이력, 알림 목록 갱신 |
| 길게 탭 (Long Press) | 에이전트 카드 옵션 메뉴 |
| 수평 스와이프 | 설정 항목 삭제 액션 (위험 액션: 빨간 배경) |

### 9.5 실시간 업데이트

```
평가 진행 중:
  WebSocket/SSE → 진행률 실시간 반영 (300ms 간격)
  
점수 표시:
  0 → 최종값 카운팅 애니메이션 (800ms, easeOut)

상태 뱃지 전환:
  정상→경고: 배경색 crossfade (300ms)
  경고→위험: 배경색 crossfade + pulse 2회
```

```css
/* 숫자 카운팅 (JS와 조합) */
.score-counting {
  transition: color 300ms;
}

/* 위험 상태 강조 pulse */
@keyframes dangerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.4); }
  50%       { box-shadow: 0 0 0 6px rgba(239,68,68,0); }
}
.badge--danger { animation: dangerPulse 1.5s ease 2; }
```

### 9.6 접근성 (Accessibility)

- 포커스 스타일: `outline: 2px solid #2563EB; outline-offset: 2px;`
- 키보드 내비게이션: Tab 순서 논리적 배치
- ARIA 레이블: 상태 뱃지에 `aria-label="품질 상태: 정상"` 형식
- 색각 이상 대응: 신호등 상태에 텍스트 레이블 필수 병행
- 터치 타겟: 모든 인터랙티브 요소 최소 44×44px

---

## 10. 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 2.0 | 2026-05-26 | 픽셀(정유진) | 뤼튼 레퍼런스 기반 전면 재작성. 슬라이더·토글·설정목록 컴포넌트 추가. 서비스 특화 컴포넌트 6종 상세화. 접근성 항목 추가 |
| 1.0 | 2026-05-20 | 픽셀(정유진) | 삼쩜삼 레퍼런스 기반 초안 작성 |
