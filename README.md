# React + NestJS + Supabase 블로그 프로젝트

## 프로젝트 개요

개인 블로그를 위한 풀스택 웹 애플리케이션입니다.
React + NestJS + Supabase 스택을 학습하며 개발한 프로젝트입니다.

## 개발 도구 및 과정

- **AI Assistant**: Cursor (코드 생성 및 구조 설계 지원)
- **개발 환경**: VS Code + Cursor
- **버전 관리**: Git

### 학습 중심 개발 접근법

이 프로젝트는 Cursor AI Assistant를 활용하여 개발되었습니다.
단순히 코드를 생성받는 것이 아닌, 각 기술의 **원리와 선택 이유**를 이해하며 진행했습니다:

- **기술 스택 선택 이유**: 각 기술의 장단점과 블로그 프로젝트에 적합한 이유 분석
- **설정 과정의 이해**: Vite, NestJS, Tailwind CSS 등의 설정 원리 학습
- **아키텍처 설계**: 모노레포 구조와 프론트엔드/백엔드 분리의 필요성 이해
- **개발 워크플로우**: ValidationPipe, CORS 설정 등 각 설정의 목적과 동작 원리 학습

AI 도구를 통해 빠른 프로토타이핑을 진행하면서도,
**기술적 근거와 원리를 이해하는 것**에 중점을 두었습니다.

## 기술 스택

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: NestJS + TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## 프로젝트 구조

```
sudang-log/
├── frontend/          # React 프론트엔드
├── backend/           # NestJS 백엔드
├── shared/            # 공통 타입 및 유틸리티
└── docs/              # 프로젝트 문서
```

## 개발 환경 설정

### 필수 요구사항

- Node.js 18+
- pnpm (권장) 또는 npm/yarn
- Supabase 계정

### 설치 및 실행

```bash
# 1. 프론트엔드 설치 및 실행
cd frontend
pnpm install
pnpm dev
# → http://localhost:5173 에서 실행

# 2. 백엔드 설치 및 실행 (새 터미널)
cd backend
pnpm install
pnpm run start:dev
# → http://localhost:3000 에서 실행

# 또는 각 디렉토리에서 동시 실행
cd frontend && pnpm dev &
cd backend && pnpm run start:dev
```

## 주요 기능

- [ ] 사용자 인증 (회원가입/로그인)
- [ ] 블로그 포스트 CRUD
- [ ] 댓글 시스템
- [ ] 태그 및 카테고리 관리
- [ ] 파일 업로드 (이미지)
- [ ] 반응형 디자인

## 학습한 주요 개념

### 프론트엔드

- **Vite vs Webpack**: ES 모듈 기반의 빠른 개발 서버와 빌드 시스템
- **Tailwind CSS**: 유틸리티 퍼스트 CSS와 PostCSS를 통한 트리 쉐이킹
- **React 19**: 최신 React 기능과 컴포넌트 기반 아키텍처

### 백엔드

- **NestJS**: 데코레이터 패턴과 의존성 주입을 통한 모듈러 아키텍처
- **ValidationPipe**: DTO 기반 데이터 검증과 타입 변환
- **CORS**: 브라우저 보안 정책과 프론트엔드-백엔드 통신

### 개발 환경

- **모노레포**: 프론트엔드/백엔드 분리와 독립적 배포
- **pnpm**: 심볼릭 링크를 통한 효율적인 패키지 관리
- **TypeScript**: 타입 안정성과 개발 생산성 향상

## 프로젝트 진행 상황

- ✅ 프론트엔드 초기 설정 (React + Vite + Tailwind)
- ✅ 백엔드 초기 설정 (NestJS)
- ⏳ Supabase 데이터베이스 설정
- ⏳ 라우팅 및 기본 페이지 구성
