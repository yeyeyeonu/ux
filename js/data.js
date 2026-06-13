const PERFORMANCES = [
    {
        id: 1,
        title: "한여름 밤의 꿈",
        subtitle: "공연영상학과가 선보이는 늦봄 정기 연극.",
        genre: "연극",
        organizer: "공연영상학과",
        format: "예약폼",
        date: "2026.06.21",
        time: "19:00",
        location: "인문과학관 소극장",
        price: "무료",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200&auto=format&fit=crop",
        description: "셰익스피어 원작을 캠퍼스의 여름밤으로 옮긴 무대. 학과 배우와 스태프가 한 학기 동안 준비한 정기 공연입니다.",
        reservationType: "외부 폼 예약",
        reservationNote: "공연영상학과 공지에 올라오는 구글폼으로 회차별 예약을 받습니다.",
        formUrl: "https://forms.gle/example",
        tags: ["연극", "공연영상학과", "예약 가능"],
        profiles: [
            {
                name: "김하린",
                role: "연출",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                bio: "무대의 리듬과 배우 동선을 섬세하게 설계합니다."
            },
            {
                name: "이도윤",
                role: "퍽 역",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
                bio: "장난기와 서정성을 오가는 캐릭터를 맡았습니다."
            },
            {
                name: "박서연",
                role: "허미아 역",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
                bio: "인물의 감정 변화를 중심으로 무대를 이끕니다."
            }
        ]
    },
    {
        id: 2,
        title: "Red Curtain Week",
        subtitle: "밴드동아리들이 함께 만드는 야외 공연 주간.",
        genre: "밴드",
        organizer: "밴드동아리 연합",
        format: "자유 관람",
        date: "2026.06.24",
        time: "18:30",
        location: "향설광장",
        price: "무료",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop",
        description: "학기 말 저녁을 채우는 밴드 라이브. 별도 예약 없이 현장에서 자유롭게 관람할 수 있습니다.",
        reservationType: "자유 관람",
        reservationNote: "별도 신청 없이 공연 시간에 맞춰 향설광장으로 오면 됩니다.",
        formUrl: "",
        tags: ["밴드", "동아리", "자유 관람"],
        profiles: []
    },
    {
        id: 3,
        title: "Campus Film Night",
        subtitle: "학생 단편영화와 졸업작품을 모아 보는 밤.",
        genre: "영화제",
        organizer: "공연영상학과",
        format: "현장 입장",
        date: "2026.06.28",
        time: "17:00",
        location: "미디어랩스 시사실",
        price: "무료",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
        description: "단편, 다큐, 실험영화를 한 자리에서 소개하는 학과 영화제입니다. 상영 후 관객과의 대화가 이어집니다.",
        reservationType: "현장 입장",
        reservationNote: "좌석은 선착순으로 운영됩니다. 별도 예약폼은 없습니다.",
        formUrl: "",
        tags: ["영화제", "상영회", "GV"],
        profiles: [
            {
                name: "최유진",
                role: "프로그래머",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
                bio: "상영작 큐레이션과 GV 진행을 맡았습니다."
            }
        ]
    },
    {
        id: 4,
        title: "오케스트라 정기연주회",
        subtitle: "한 학기를 닫는 클래식 앙상블.",
        genre: "오케스트라",
        organizer: "오케스트라 동아리",
        format: "공지 확인",
        date: "2026.07.03",
        time: "19:30",
        location: "대강당",
        price: "무료",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop",
        description: "오케스트라 동아리의 정기연주회. 포스터와 공지를 통해 입장 방식이 안내됩니다.",
        reservationType: "운영진 공지 확인",
        reservationNote: "예약 여부는 공연 전 공지로 안내됩니다.",
        formUrl: "",
        tags: ["오케스트라", "정기공연", "공지 예정"],
        profiles: []
    },
    {
        id: 5,
        title: "청춘제 Stage",
        subtitle: "학생회 축제 메인 무대와 부스 공연.",
        genre: "축제",
        organizer: "총학생회",
        format: "자유 관람",
        date: "2026.07.10",
        time: "16:00",
        location: "운동장",
        price: "무료",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        description: "학생회가 준비한 축제 무대. 동아리 공연, 게스트 무대, 영화 상영 이벤트가 함께 열립니다.",
        reservationType: "자유 관람",
        reservationNote: "축제 구역 내 공연은 별도 예약 없이 관람할 수 있습니다.",
        formUrl: "",
        tags: ["축제", "학생회", "자유 관람"],
        profiles: []
    }
];
