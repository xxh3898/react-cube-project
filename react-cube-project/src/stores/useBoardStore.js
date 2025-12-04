import { create } from "zustand";

const BOARD_KEY = "cube_board_data";

const useBoardStore = create((set, get) => ({
    posts: [],

    initializeBoard: () => {
        const saved = localStorage.getItem(BOARD_KEY);
        if (saved) {
            set({ posts: JSON.parse(saved) });
        } else {
            // (더미 데이터
            set({
                posts: [
                    { id: 1, title: "큐브 20초대 진입 팁!", content: "F2L 연습이 중요합니다. 천천히 돌리면서 다음 조각을 보세요(Look Ahead).", author: "홍길동", date: "2025-12-01" },
                    { id: 2, title: "가입 인사 드립니다", content: "잘 부탁드려요~ 열심히 활동하겠습니다!", author: "김큐브", date: "2025-12-02" },
                    { id: 3, title: "오늘의 스크램블 공유", content: "R U R' U' ... 이 공식 써보세요 기록 잘 나옵니다.", author: "조치호", date: "2025-12-03" }
                ]
            })
        }
    },

}));

export default useBoardStore;