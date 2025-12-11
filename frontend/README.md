# React Cube Project (Frontend)

![Timer](./src/assets/Timer.gif)

> **큐브 스피드솔빙을 위한 올인원 유틸리티 웹 애플리케이션 (Frontend)**
>
> **Tech Stack**: React (Vite), Zustand, Styled-components

Spring Boot 백엔드와 통신하며 사용자에게 큐브 타이머, 기록 통계, 커뮤니티 기능을 제공하는 클라이언트 애플리케이션입니다.

## 🛠️ 주요 기능 (Features)

### 1. ⏱️ 큐브 타이머 (Cube Timer)
* **스택매트 UX 구현**: 스페이스바를 꾹 눌러(Holding) 준비하고, 떼는 순간(Start) 타이머가 작동합니다.
* **정밀한 시간 측정**: `setInterval`의 오차를 보정하기 위해 `Date.now()`를 활용한 Delta Time 방식으로 정밀한 시간을 계산합니다.
* **스크램블 생성기**: 매회 공정한 기록 측정을 위해 랜덤 스크램블(섞기 공식)을 자동 생성합니다.

### 2. 📊 마이페이지 & 대시보드 (Dashboard)
* **통계 자동화**: 총 솔빙 횟수, **최고 기록(PB)**, **평균 기록(Average)** 을 실시간으로 계산하여 시각화합니다.
* **기록 관리**: 과거 기록을 테이블 형태로 조회하고, 실수로 측정한 기록은 개별 삭제가 가능합니다.

### 3. 📚 알고리즘 시각화 (Algorithms - CFOP)
* **VisualCube API 연동**: 텍스트 공식을 입력하면 **3D 큐브 이미지**를 동적으로 생성하여 보여줍니다.
* **회전 기호 보정**: `x`, `y` 등 큐브 회전 기호가 포함된 공식도 정면(Yellow Top)을 바라보도록 보정 로직을 적용했습니다.

### 4. 🗣️ 커뮤니티 (Community)
* **게시판 CRUD**: 자유롭게 글을 작성하고 수정, 삭제할 수 있습니다.
* **권한 관리**: 로그인한 유저 본인의 글만 수정/삭제 버튼이 노출되도록 권한 체크 로직을 구현했습니다.

## 📂 폴더 구조 (Folder Structure)

```bash
src/
├── components/      # 헤더, 레이아웃 등 공통 UI 컴포넌트
├── pages/           # 라우팅 페이지 컴포넌트
│   ├── board/       # 게시판 (목록, 상세, 글쓰기, 수정)
│   ├── cube/        # 큐브 기능 (타이머, 알고리즘)
│   ├── member/      # 회원 기능 (로그인, 회원가입, 마이페이지)
│   └── Home.jsx     # 대시보드 메인 페이지
├── stores/          # Zustand 전역 상태 관리 (Member, Board, Timer)
└── utils/           # 스크램블 생성기 등 유틸리티 함수
```

## 🔥 기술적 도전 (Troubleshooting)

### 1. 타이머 정확도 및 이벤트 처리
* **문제**: 키보드를 누르고 있을 때 `keydown` 이벤트가 반복 발생하여 타이머 상태가 꼬이는 문제와 `setInterval`의 미세한 시간 지연 발생.
* **해결**:
    * `e.repeat` 속성을 체크하여 중복 이벤트를 방지했습니다.
    * 화면 렌더링용 `setInterval`과 별개로, 실제 기록은 **시작 시간과 종료 시간의 차이(Delta Time)** 를 계산하여 정확도를 높였습니다.

### 2. CORS 문제 해결 (Proxy)
* **문제**: 개발 환경에서 React(3000)와 Spring Boot(8080)의 포트가 달라 API 호출 시 CORS 에러 발생.
* **해결**: `package.json`에 Proxy 설정을 추가하여 API 요청을 우회했습니다.
  ```json
  "proxy": "http://localhost:8080"
  ```

## 💿 설치 및 실행 (Installation)

이 프로젝트는 `Node.js` 환경에서 실행됩니다.

1. **디렉토리 이동**
   ```bash
   cd frontend
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   - 접속 주소: `http://localhost:3000`