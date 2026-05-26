# AI Agent 품질 측정 플랫폼 — 스타일 가이드

**버전**: 1.0  
**작성일**: 2026-05-20  
**레퍼런스**: 삼쩜삼 (wwit.design/2024/11/03/3o3/) — 복잡한 데이터를 누구나 이해할 수 있는 UI로 전환한 한국 대표 핀테크 앱  
**연계 문서**: design/uiux/uiux.md, design/userstory.md

---

## 목차

1. [브랜드 아이덴티티](#1-브랜드-아이덴티티)
2. [디자인 원칙](#2-디자인-원칙)
3. [컬러 시스템](#3-컬러-시스템)
4. [타이포그래피](#4-타이포그래피)
5. [간격 시스템](#5-간격-시스템)
6. [컴포넌트 스타일](#6-컴포넌트-스타일)
7. [반응형 브레이크포인트](#7-반응형-브레이크포인트)
8. [대상 서비스 특화 컴포넌트](#8-대상-서비스-특화-컴포넌트)
9. [인터랙션 패턴](#9-인터랙션-패턴)
10. [변경 이력](#10-변경-이력)

---

## 1. 브랜드 아이덴티티

### 1.1 디자인 컨셉

> **"복잡한 AI 품질 데이터를, 모든 역할이 즉시 이해하는 언어로"**

삼쩜삼이 복잡한 세금 환급 계산을 "56,045원 돌려받을 수 있습니다"로 단순화했듯,  
이 플랫폼은 Faithfulness 0.73 같은 기술 지표를 "업계 상위 35% · 정상 ●"으로 변환한다.

**3가지 핵심 감성**:

| 감성 | 의미 | 시각 표현 |
|------|------|----------|
| **Trust (신뢰)** | 데이터가 정확하고 믿을 수 있다 | Blue Primary, 정돈된 여백, 일관된 레이아웃 |
| **Clarity (명확함)** | 한눈에 이해된다 | 신호등 색상, 굵은 수치, 간결한 라벨 |
| **Continuity (지속성)** | 항상 모니터링되고 있다 | 타임스탬프, 추이 그래프, 자동화 표시 |

### 1.2 로고 가이드라인

- **형태**: 텍스트 로고 또는 아이콘(품질 신호등 모티프) + 텍스트 조합
- **최소 크기**: 24px 높이
- **여백(Clear Space)**: 로고 높이의 50% 이상
- **사용 금지**:
  - 배경색과 대비 부족한 위치에 사용 금지
  - 비율 변형 금지
  - 그림자 효과 추가 금지

### 1.3 보이스 & 톤

| 상황 | 톤 | 예시 |
|------|-----|------|
| 정상 상태 | 안정적·긍정적 | "이번 주도 품질이 안정적으로 유지되고 있습니다." |
| 경고 상태 | 명확·중립적 | "Faithfulness 지표가 기준에 근접하고 있습니다." |
| 긴급 상태 | 명확·신속 | "품질 이상이 감지되었습니다. 즉시 확인이 필요합니다." |
| 성공 피드백 | 간결·확인 | "연결 성공! 응답시간 320ms" |
| 오류 피드백 | 구체적·해결 중심 | "API 키 인증에 실패했습니다. 키를 확인 후 다시 시도하세요." |

---

## 2. 디자인 원칙

### 원칙 1: 데이터 우선 (Data First)
수치와 상태를 가장 크고 명확하게 표시한다. 부가 정보(타임스탬프, 설명)는 시각적으로 종속시킨다.  
→ 삼쩜삼의 "56,045원" 처럼, 품질 점수 0.82를 가장 크게 표시

### 원칙 2: 상태 즉시 인식 (Immediate State Recognition)
신호등 색상 + 텍스트 조합으로 어떤 상황인지 0.3초 안에 파악 가능해야 한다.  
→ 색상 단독 사용 금지. 색상 + 아이콘 또는 텍스트 필수 병행

### 원칙 3: 역할별 언어 분리 (Role-Based Language)
- 기술 직군 화면 (에이전트설정, 평가결과): 지표명(Faithfulness) 그대로 사용
- 비기술 직군 화면 (위젯, 브리핑): 기술 지표명 완전 비노출, 비즈니스 언어만 사용

### 원칙 4: 모바일 우선 점진적 향상 (Mobile First Progressive Enhancement)
모바일에서 완전히 동작하는 경험을 먼저 설계하고, 더 넓은 화면에서 밀도를 높인다.

### 원칙 5: 피드백 지연 없음 (Zero Feedback Delay)
모든 사용자 액션에 100ms 이내 시각적 반응을 제공한다.  
→ 버튼 클릭: 즉시 눌림 효과, API 응답 대기: 즉시 로딩 스피너

---

## 3. 컬러 시스템

### 3.1 Primary — Blue

| 토큰 | 색상 코드 | 사용처 |
|------|-----------|--------|
| `blue-50` | `#EFF6FF` | 배경 강조, 선택 상태 배경 |
| `blue-100` | `#DBEAFE` | 뱃지 배경, hover 배경 |
| `blue-500` | `#3B82F6` | 링크, 아이콘 |
| `blue-600` | `#2563EB` | **Primary 버튼, 포커스 링, 강조** |
| `blue-700` | `#1D4ED8` | Primary 버튼 hover |
| `blue-800` | `#1E40AF` | Active 상태 |

### 3.2 신호등 (Traffic Light) — 핵심 상태 표현

| 상태 | 토큰 | 색상 코드 | 사용처 |
|------|------|-----------|--------|
| 정상 | `traffic-green` | `#22C55E` | 신호등 원형, 성공 아이콘 |
| 경고 | `traffic-yellow` | `#FBBF24` | 신호등 원형, 경고 배지 |
| 긴급 | `traffic-red` | `#EF4444` | 신호등 원형, 긴급 배지 |

> **사용 규칙**: 신호등 색상은 반드시 텍스트(정상/경고/긴급) 또는 아이콘(●)과 함께 사용.  
> 색상 단독 사용 시 색맹 사용자가 구분 불가.

### 3.3 Semantic — 의미 기반 색상

| 토큰 | 색상 코드 | 배경 | 테두리 | 텍스트 | 사용처 |
|------|-----------|------|--------|--------|--------|
| `success` | `#16A34A` | `#F0FDF4` | `#22C55E` | `#166534` | 연결 성공, Pass 판정 |
| `warning` | `#D97706` | `#FFFBEB` | `#F59E0B` | `#92400E` | 경고 알림, 경고 임계값 |
| `danger` | `#DC2626` | `#FEF2F2` | `#EF4444` | `#991B1B` | 긴급 알림, Fail 판정, 오류 |
| `info` | `#2563EB` | `#EFF6FF` | `#3B82F6` | `#1E40AF` | 안내 메시지, 진행 중 |

### 3.4 Neutral — 회색 스케일

| 토큰 | 색상 코드 | 주요 사용처 |
|------|-----------|------------|
| `slate-50` | `#F8FAFC` | 페이지 배경 |
| `slate-100` | `#F1F5F9` | 섹션 구분 배경, 비활성 버튼 |
| `slate-200` | `#E2E8F0` | 테두리, 구분선 |
| `slate-300` | `#CBD5E1` | Placeholder 아이콘 |
| `slate-400` | `#94A3B8` | Placeholder 텍스트, 비활성 텍스트 |
| `slate-500` | `#64748B` | 보조 텍스트, 캡션 |
| `slate-700` | `#334155` | 서브 헤딩 |
| `slate-900` | `#0F172A` | 기본 텍스트 (본문, 제목) |

### 3.5 차트 색상 (색맹 안전 팔레트)

Deuteranopia(적록 색맹) 기준으로도 구분 가능한 색상:

| 용도 | 색상 코드 | 이름 |
|------|-----------|------|
| Faithfulness 라인 | `#2563EB` | Blue |
| AnswerRelevancy 라인 | `#F59E0B` | Amber |
| ContextRecall 라인 | `#8B5CF6` | Violet |
| 임계값 기준선 | `#94A3B8` | Slate (점선) |

---

## 4. 타이포그래피

### 4.1 폰트 스택

```css
/* 한국어 + 영문 */
font-family: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', sans-serif;

/* 코드, 수치, API 키, YAML */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

### 4.2 타입 스케일

| 레벨 | 토큰 | 크기 | 행간 | 굵기 | 사용처 |
|------|------|------|------|------|--------|
| Display | `text-display` | 32px | 40px | 700 | 공개 위젯 점수, 랜딩 히어로 |
| H1 | `text-h1` | 24px | 32px | 700 | 페이지 제목 |
| H2 | `text-h2` | 20px | 28px | 600 | 섹션 제목 |
| H3 | `text-h3` | 18px | 26px | 600 | 카드 제목, 서브 섹션 |
| H4 | `text-h4` | 16px | 24px | 600 | 그룹 레이블 |
| Body L | `text-body-l` | 16px | 24px | 400 | 주요 본문 |
| Body M | `text-body-m` | 14px | 22px | 400 | **기본 본문** |
| Body S | `text-body-s` | 13px | 20px | 400 | 보조 설명 |
| Caption | `text-caption` | 12px | 18px | 400 | 타임스탬프, 부연 설명 |
| Label | `text-label` | 12px | 16px | 500 | 폼 레이블, 뱃지 텍스트 |
| Code | `text-code` | 13px | 20px | 400 | YAML, API 키, 코드 스니펫 |

### 4.3 수치 강조 (삼쩜삼 참조)

품질 점수처럼 핵심 수치는 별도 스타일 적용:

```css
/* 품질 점수 수치 — QualityScoreCard에서 사용 */
.metric-value {
  font-size: 36px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;  /* 자릿수 정렬 */
  letter-spacing: -0.02em;
}

/* 변화율 (△+0.03 / ▼-0.08) */
.metric-delta {
  font-size: 13px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
```

### 4.4 텍스트 색상 조합

| 역할 | 색상 | 배경 | 대비비 |
|------|------|------|--------|
| 기본 텍스트 | `#0F172A` | `#FFFFFF` | 19.7:1 ✅ |
| 보조 텍스트 | `#64748B` | `#FFFFFF` | 5.7:1 ✅ |
| 비활성 텍스트 | `#94A3B8` | `#FFFFFF` | 3.2:1 (Large만) |
| White on Primary | `#FFFFFF` | `#2563EB` | 5.5:1 ✅ |
| 긴급 텍스트 | `#991B1B` | `#FEF2F2` | 6.8:1 ✅ |

---

## 5. 간격 시스템

### 5.1 Spacer 토큰

4px 기반 시스템:

| 토큰 | 크기 | 사용처 |
|------|------|--------|
| `space-1` | 4px | 아이콘-텍스트 간격, 인라인 미세 여백 |
| `space-2` | 8px | 관련 요소 내부 간격 |
| `space-3` | 12px | 작은 컴포넌트 내부 padding |
| `space-4` | 16px | **기본 padding (모바일 카드, 컨테이너)** |
| `space-5` | 20px | 카드 내부 padding (데스크탑) |
| `space-6` | 24px | 섹션 내 요소 간 간격 |
| `space-8` | 32px | 섹션 간 간격 |
| `space-10` | 40px | 페이지 섹션 대간격 |
| `space-12` | 48px | 큰 섹션 구분 |
| `space-16` | 64px | 최대 여백 |

### 5.2 반응형 컨테이너 패딩

| 디바이스 | 좌우 padding | 섹션 gap |
|---------|-------------|----------|
| Mobile (< 768px) | 16px | 24px |
| Tablet (768–1024px) | 24px | 32px |
| Desktop (> 1024px) | 32px | 40px |

### 5.3 컴포넌트 내부 간격

| 컴포넌트 | 모바일 padding | 데스크탑 padding |
|---------|--------------|----------------|
| 카드 | 16px | 20px |
| 버튼 (수평) | 16px | 20px |
| 입력 필드 | 12px 16px | 12px 16px |
| 테이블 셀 | 12px 16px | 14px 20px |
| 모달 | 20px | 32px |

### 5.4 Z-Index 레이어

| 레이어 | 값 | 사용처 |
|--------|-----|--------|
| Base | 0 | 기본 콘텐츠 |
| Card | 10 | 카드 hover 효과 |
| Sticky Header | 50 | 테이블 헤더 고정 |
| Dropdown | 100 | 드롭다운 메뉴 |
| Sidebar | 150 | 모바일 사이드바 오버레이 |
| Modal Backdrop | 200 | 모달 배경 dim |
| Modal | 300 | 모달 콘텐츠 |
| Toast | 400 | 토스트 알림 |

---

## 6. 컴포넌트 스타일

### 6.1 Button

#### 기본 규칙
- 최소 높이: **48px** (모바일 터치 기준 44px 초과)
- 최소 너비: 80px
- 모바일 전체 너비(full-width) 권장 (삼쩜삼 CTA 패턴)
- 아이콘 있는 버튼: 아이콘 16px + 텍스트 간격 8px

#### 변형별 스타일

```css
/* Primary */
.btn-primary {
  background: #2563EB;
  color: #FFFFFF;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: background 150ms, transform 100ms;
}
.btn-primary:hover  { background: #1D4ED8; }
.btn-primary:active { transform: scale(0.97); }

/* Secondary */
.btn-secondary {
  background: #FFFFFF;
  color: #2563EB;
  border: 1.5px solid #2563EB;
  border-radius: 10px;
}
.btn-secondary:hover { background: #EFF6FF; }

/* Danger */
.btn-danger {
  background: #DC2626;
  color: #FFFFFF;
  border-radius: 10px;
}
.btn-danger:hover { background: #B91C1C; }

/* Ghost */
.btn-ghost {
  background: transparent;
  color: #2563EB;
  border-radius: 10px;
}
.btn-ghost:hover { background: #EFF6FF; }

/* Disabled (공통) */
.btn:disabled {
  background: #E2E8F0;
  color: #94A3B8;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading 상태 */
.btn-loading {
  position: relative;
  color: transparent;  /* 텍스트 숨김 */
}
.btn-loading::after {
  /* 중앙 스피너 */
  content: '';
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}
```

#### 버튼 크기 변형

| 크기 | 높이 | 폰트 | 수평 padding | 용도 |
|------|------|------|-------------|------|
| sm | 32px | 13px | 12px | 테이블 내 액션 버튼 |
| md | 40px | 14px | 16px | 일반 버튼 |
| lg | 48px | 15px | 20px | **기본 CTA** |
| xl | 56px | 16px | 24px | 전체 너비 CTA (모바일) |

---

### 6.2 Input 필드

```css
/* 기본 상태 */
.input {
  height: 48px;
  padding: 12px 16px;
  border: 1.5px solid #E2E8F0;
  border-radius: 8px;
  font-size: 14px;
  color: #0F172A;
  background: #FFFFFF;
  transition: border-color 150ms, box-shadow 150ms;
}
.input::placeholder { color: #94A3B8; }

/* Focus */
.input:focus {
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  outline: none;
}

/* Error */
.input-error {
  border-color: #EF4444;
}
.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

/* Success */
.input-success {
  border-color: #22C55E;
}

/* Disabled */
.input:disabled {
  background: #F8FAFC;
  color: #94A3B8;
  cursor: not-allowed;
}
```

#### 오류 메시지
```css
.input-error-message {
  margin-top: 4px;
  font-size: 12px;
  color: #DC2626;
  display: flex;
  align-items: center;
  gap: 4px;  /* 아이콘 + 텍스트 */
}
```

---

### 6.3 Card

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  padding: 16px;          /* 모바일 */
  transition: box-shadow 200ms;
}

/* 데스크탑 */
@media (min-width: 1024px) {
  .card { padding: 20px; }
}

/* Hover (클릭 가능한 카드) */
.card-interactive:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  cursor: pointer;
}

/* 선택됨 */
.card-selected {
  border: 2px solid #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}
```

---

### 6.4 Badge / Tag

```css
/* 기본 뱃지 */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

/* 서비스 유형 (RAG, 챗봇 등) */
.badge-type  { background: #EFF6FF; color: #1D4ED8; }

/* CI/CD 게이트 판정 */
.badge-pass  { background: #DCFCE7; color: #166534; }
.badge-fail  { background: #FEF2F2; color: #991B1B; }

/* 심각도 */
.badge-info     { background: #EFF6FF; color: #1E40AF; }
.badge-warning  { background: #FEF9C3; color: #854D0E; }
.badge-caution  { background: #FFF7ED; color: #9A3412; }  /* 주의(주황) */
.badge-critical { background: #FEF2F2; color: #991B1B; }  /* 긴급 */
```

---

### 6.5 Alert (인라인)

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid;
  font-size: 14px;
}

.alert-success  { background: #F0FDF4; border-color: #22C55E; color: #166534; }
.alert-warning  { background: #FFFBEB; border-color: #F59E0B; color: #92400E; }
.alert-danger   { background: #FEF2F2; border-color: #EF4444; color: #991B1B; }
.alert-info     { background: #EFF6FF; border-color: #3B82F6; color: #1E40AF; }
```

---

### 6.6 Toast 알림

```css
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;       /* 데스크탑 */
  z-index: 400;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 모바일: 하단 전체 너비 */
@media (max-width: 767px) {
  .toast-container {
    right: 16px;
    left: 16px;
    bottom: 80px;    /* Bottom Nav 높이 위 */
  }
}

.toast {
  background: #0F172A;
  color: #FFFFFF;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.20);
  animation: slideUp 200ms ease-out;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 360px;
}
```

**자동 닫힘**: 성공/정보 → 3초, 경고 → 5초, 오류 → 수동 닫기

---

### 6.7 모달

```css
.modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(2px);
  z-index: 200;
  animation: fadeIn 150ms;
}

.modal {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  max-width: 480px;
  width: calc(100% - 32px);
  z-index: 300;
  animation: scaleUp 150ms ease-out;
}

/* 모바일: 보텀 시트 (삼쩜삼 참조) */
@media (max-width: 767px) {
  .modal {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    border-radius: 20px 20px 0 0;
    max-width: 100%;
    animation: slideUp 250ms ease-out;
    padding-bottom: calc(24px + env(safe-area-inset-bottom));
  }
}
```

---

### 6.8 테이블

```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
}

.table td {
  padding: 14px 16px;
  border-bottom: 1px solid #F1F5F9;
  color: #0F172A;
}

.table tr:hover td {
  background: #F8FAFC;
  cursor: pointer;
}
```

**모바일 카드 변환**: `< 768px`에서 테이블 → 카드 리스트 형태로 변환

---

### 6.9 드롭다운

```css
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 200px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  z-index: 100;
  overflow: hidden;
  animation: fadeInDown 150ms ease-out;
}

.dropdown-item {
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dropdown-item:hover { background: #F8FAFC; }
.dropdown-item.selected { color: #2563EB; font-weight: 500; }
```

---

### 6.10 스켈레톤 (로딩)

```css
.skeleton {
  background: linear-gradient(90deg,
    #F1F5F9 25%,
    #E2E8F0 50%,
    #F1F5F9 75%
  );
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;
}

/* 카드 스켈레톤 */
.skeleton-card {
  height: 120px;
  border-radius: 12px;
}

/* 텍스트 라인 */
.skeleton-text { height: 14px; border-radius: 4px; }
.skeleton-text-sm { height: 12px; }

@keyframes shimmer {
  0%   { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
```

---

## 7. 반응형 브레이크포인트

### 7.1 브레이크포인트 정의

```css
/* Tailwind CSS 기준 */
--breakpoint-sm:  640px;   /* 소형 폰 가로 */
--breakpoint-md:  768px;   /* 태블릿 세로 */
--breakpoint-lg:  1024px;  /* 태블릿 가로 / 소형 데스크탑 */
--breakpoint-xl:  1280px;  /* 데스크탑 */
--breakpoint-2xl: 1536px;  /* 대형 모니터 */
```

### 7.2 레이아웃 변화

| 요소 | < 768px (Mobile) | 768–1024px (Tablet) | > 1024px (Desktop) |
|------|-----------------|---------------------|-------------------|
| 네비게이션 | Bottom Nav 4탭 | 64px 아이콘 사이드바 | 240px 텍스트 사이드바 |
| 에이전트 카드 그리드 | 1열 | 2열 | 3열 |
| 데이터 테이블 | 카드 형태 변환 | 가로 스크롤 | 전체 표시 |
| 추이 차트 | 가로 스크롤 허용 | 전체 표시 | 전체 표시 |
| 위저드 스텝 표시 | 숫자만 (①②③) | 번호+간략제목 | 전체 텍스트 |
| 모달 | 보텀 시트 | 중앙 다이얼로그 | 중앙 다이얼로그 |
| YAML 에디터 | 텍스트뷰+복사 | 코드 에디터 | 에디터 + 가이드 분할 |

### 7.3 Mobile First CSS 패턴

```css
/* Mobile 기본 → Tablet → Desktop 점진적 향상 */

/* 기본 (Mobile): 1열 */
.agent-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet: 2열 */
@media (min-width: 768px) {
  .agent-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Desktop: 3열 */
@media (min-width: 1024px) {
  .agent-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
```

### 7.4 터치 대응

- **최소 터치 영역**: 44×44px (iOS HIG) — 버튼 48px로 초과 준수
- **탭 간격**: 인접 버튼 간 최소 8px
- **스크롤**: 목록, 차트 영역 `-webkit-overflow-scrolling: touch`
- **safe-area**: `padding-bottom: env(safe-area-inset-bottom)` — 아이폰 홈 인디케이터 대응

---

## 8. 대상 서비스 특화 컴포넌트

### 8.1 TrafficLight (신호등)

품질 상태를 즉각 인식하게 하는 핵심 컴포넌트.

#### 크기 변형

| 크기 | 원형 지름 | 사용처 |
|------|----------|--------|
| `sm` | 16px | 테이블 행 상태 아이콘 |
| `md` | 24px | 에이전트 카드 목록 |
| `lg` | 80px | 위젯 공개조회(17번 화면), 대시보드 히어로 |

#### 스타일

```css
.traffic-light {
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* 크기 */
.traffic-light-sm { width: 16px; height: 16px; }
.traffic-light-md { width: 24px; height: 24px; }
.traffic-light-lg { width: 80px; height: 80px; }

/* 색상 */
.traffic-light-green  { background: #22C55E; box-shadow: 0 0 12px rgba(34,197,94,0.4); }
.traffic-light-yellow { background: #FBBF24; box-shadow: 0 0 12px rgba(251,191,36,0.4); }
.traffic-light-red    { background: #EF4444; box-shadow: 0 0 12px rgba(239,68,68,0.4); }

/* lg 크기: 펄스 효과 (긴급 상태) */
.traffic-light-lg.traffic-light-red {
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0%, 100% { box-shadow: 0 0 12px rgba(239,68,68,0.4); }
  50%       { box-shadow: 0 0 24px rgba(239,68,68,0.7); }
}
```

#### HTML 패턴

```html
<!-- sm — 테이블 내 -->
<span class="traffic-light traffic-light-sm traffic-light-green"
      aria-label="정상 상태"></span>
<span>정상</span>

<!-- lg — 공개 위젯 -->
<div class="traffic-light traffic-light-lg traffic-light-green"
     role="img" aria-label="품질 정상">
</div>
<p class="text-h2">정상</p>
```

---

### 8.2 QualityScoreCard (품질 점수 카드)

평가 결과 화면(09)의 핵심 컴포넌트.

```
┌─────────────────────────┐
│  Faithfulness           │
│                         │
│         0.82            │  ← metric-value (36px, 700)
│      ● 정상             │  ← TrafficLight md + 상태 텍스트
│    ▲ +0.03  전일 대비   │  ← 변화율 (초록/빨강)
└─────────────────────────┘
```

```css
.quality-score-card {
  /* Card 기본 스타일 상속 */
  text-align: center;
  padding: 20px 16px;
}

.quality-score-card .metric-label {
  font-size: 13px;
  font-weight: 500;
  color: #64748B;
  margin-bottom: 8px;
}

.quality-score-card .metric-value {
  font-size: 36px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: #0F172A;
  line-height: 1;
  margin-bottom: 8px;
}

.quality-score-card .metric-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 6px;
}

.metric-delta-positive { color: #16A34A; }
.metric-delta-negative { color: #DC2626; }
```

---

### 8.3 AgentStatusBadge (에이전트 상태 인라인)

에이전트 목록, 대시보드 카드에서 신호등 + 이름 조합 표시.

```html
<!-- 사용 예시 -->
<div class="agent-status-badge">
  <span class="traffic-light traffic-light-md traffic-light-green"
        aria-hidden="true"></span>
  <span class="sr-only">정상</span>  <!-- 스크린리더 전용 -->
  <span class="agent-name">챗봇-A</span>
  <span class="badge badge-type">RAG</span>
</div>
```

```css
.agent-status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
}
.agent-name {
  font-size: 15px;
  font-weight: 600;
  color: #0F172A;
}
```

---

### 8.4 ThresholdSlider (임계값 슬라이더)

에이전트 상세설정 탭2(임계값 설정)에서 사용.  
3단계(위험/경고/최솟값)를 색상 트랙으로 시각화.

```
위험  0.55 ━━━━● 0.65 경고 ━━━━● 0.70 최솟값 ━━━━●
      [빨강 트랙]      [노랑 트랙]      [초록 트랙]
```

```css
.threshold-slider-track {
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right,
    #EF4444 0%,     /* 위험 구간 */
    #EF4444 33%,
    #FBBF24 33%,    /* 경고 구간 */
    #FBBF24 66%,
    #22C55E 66%,    /* 정상 구간 */
    #22C55E 100%
  );
}

.threshold-slider-thumb {
  width: 18px; height: 18px;
  border-radius: 50%;
  background: white;
  border: 2px solid #2563EB;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  cursor: pointer;
}
```

---

### 8.5 EvaluationProgress (평가 진행 바)

평가 실행 화면(08)의 진행 상태 표시.

```
  ████████████████░░░░░░  68%
  처리 중: 102 / 150 케이스   소요: 5분 23초
```

```css
.eval-progress-bar {
  height: 8px;
  background: #E2E8F0;
  border-radius: 4px;
  overflow: hidden;
}

.eval-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2563EB, #3B82F6);
  border-radius: 4px;
  transition: width 300ms ease-out;
}

.eval-progress-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 13px;
  color: #64748B;
}
```

---

### 8.6 MetricTrend (소형 추이 스파크라인)

대시보드 에이전트 카드의 간략 추이 표시 (최근 7회).

- 크기: 60×24px
- 색상: TrafficLight 상태에 따라 선 색상 결정
- 최신 점수가 임계값(0.7 기준선) 대비 어디에 있는지 표시

---

### 8.7 GatePolicyYamlEditor (YAML 편집기)

게이트 설정 화면(14)에서 사용하는 코드 에디터.

```css
.yaml-editor {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  background: #1E293B;    /* 다크 배경 */
  color: #E2E8F0;
  border-radius: 10px;
  padding: 16px;
  min-height: 160px;
}

/* 구문 강조 */
.yaml-key   { color: #7DD3FC; }  /* 하늘색 — 키 */
.yaml-value { color: #86EFAC; }  /* 연두색 — 값 */
.yaml-comment { color: #64748B; font-style: italic; }
```

---

## 9. 인터랙션 패턴

### 9.1 애니메이션 토큰

```css
/* 지속시간 */
--duration-fast:   100ms;   /* 버튼 press, 즉각 피드백 */
--duration-normal: 200ms;   /* 페이드, 색상 전환 */
--duration-slow:   300ms;   /* 슬라이드, 크기 변화 */
--duration-enter:  250ms;   /* 화면 진입 */

/* 이징 */
--ease-default: cubic-bezier(0.16, 1, 0.3, 1);  /* ease-out-quint */
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-linear:  linear;
```

### 9.2 화면 진입 애니메이션

```css
/* 페이지 전환: Fade */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.page-enter { animation: fadeIn 200ms ease-out; }

/* 모달: Scale-up */
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

/* 드로어/보텀시트: Slide-up */
@keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

/* 평가 실행 → 진행 화면: Slide-left */
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Toast: Slide-up from bottom-right */
@keyframes toastIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 9.3 성공/실패 피드백 패턴 (삼쩜삼 참조)

**연결 성공** (에이전트 등록 Step 2):
```
아이콘: ✅ scale(0) → scale(1.2) → scale(1), 300ms ease-out
텍스트: opacity 0 → 1, 200ms delay 100ms
```

**평가 완료**:
```
진행 바 100% 채워진 후 → 0.5초 후 → 자동으로 결과 화면으로 slide-left
```

**오류 발생**:
```
입력 필드: shake 애니메이션 (좌우 4px 흔들림, 400ms)
배너: slide-down 200ms
```

### 9.4 스크롤 동작

- **헤더 고정**: 스크롤 시 사이드바와 상단 헤더 고정 (`position: sticky`)
- **무한 스크롤 로딩**: 목록 하단 도달 시 자동으로 다음 페이지 로드 (스피너 표시)
- **차트 가로 스크롤**: 모바일에서 스크롤 힌트 표시 (우측 페이드 그라데이션)

### 9.5 빈 상태 (Empty State) 패턴

```
(아이콘 또는 간단한 일러스트 — 64px)

제목: 아직 등록된 에이전트가 없습니다   (text-h3, slate-700)
설명: AI 에이전트를 등록하고 품질 측정을 시작하세요.  (text-body-m, slate-500)

[CTA 버튼]
```

**화면별 빈 상태 메시지**:

| 화면 | 제목 | CTA |
|------|------|-----|
| 에이전트 목록 | 등록된 에이전트가 없습니다 | + 에이전트 등록 |
| 테스트셋 목록 | 업로드된 테스트셋이 없습니다 | 파일 업로드 |
| 평가 이력 | 아직 평가 이력이 없습니다 | 평가 실행하기 |
| 알림 이력 | 발생한 이상 감지 알림이 없습니다 | — |
| 브리핑 이력 | 발송된 브리핑이 없습니다 | 발송 설정 |

### 9.6 WebSocket 연결 끊김 대응

평가 실행 중 연결 끊김 시:

```
(상단 노랑 배너, sticky)
⚠ 연결이 끊겼습니다. 3초 후 자동 재연결... [지금 재연결]
```

재연결 성공 시 배너 자동 사라짐 (fade-out 300ms).

---

## 10. 변경 이력

| 버전 | 날짜 | 작성자 | 내용 |
|------|------|--------|------|
| 1.0 | 2026-05-20 | 팀 | 최초 작성 — 삼쩜삼 레퍼런스 기반 스타일 가이드 수립 |

---

*참조: design/uiux/uiux.md, design/userstory.md*  
*레퍼런스: 삼쩜삼 WWIT 케이스 스터디 (wwit.design/2024/11/03/3o3/)*
