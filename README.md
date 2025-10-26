# React + NestJS + Supabase 블로그 프로젝트

## 프로젝트 개요
개인 블로그를 위한 풀스택 웹 애플리케이션입니다.

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
- npm 또는 yarn
- Supabase 계정

### 설치 및 실행
```bash
# 전체 프로젝트 의존성 설치
npm install

# 프론트엔드 개발 서버 실행
cd frontend && npm run dev

# 백엔드 개발 서버 실행
cd backend && npm run start:dev
```

## 주요 기능
- [ ] 사용자 인증 (회원가입/로그인)
- [ ] 블로그 포스트 CRUD
- [ ] 댓글 시스템
- [ ] 태그 및 카테고리 관리
- [ ] 파일 업로드 (이미지)
- [ ] 반응형 디자인

## 개발 가이드
각 폴더의 README.md를 참고하여 상세한 개발 가이드를 확인하세요.