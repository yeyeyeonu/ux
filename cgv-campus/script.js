const screens = document.querySelectorAll(".screen");

const onboardingScreen = document.querySelector("#onboardingScreen");
const provinceScreen = document.querySelector("#provinceScreen");
const cityScreen = document.querySelector("#cityScreen");
const homeScreen = document.querySelector("#homeScreen");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const onboardingBtn = document.querySelector("#onboardingBtn");

const provinceButtons = document.querySelectorAll("#provinceList .bubble");
const cityList = document.querySelector("#cityList");
const cityTitle = document.querySelector("#cityTitle");

const backToProvince = document.querySelector("#backToProvince");
const startBtn = document.querySelector("#startBtn");

let currentSlide = 0;
let selectedProvince = "";
let selectedCity = "";

const cityData = {
  "서울": ["종로구", "동작구", "서대문구", "강남구", "마포구"],
  "경기": ["수원", "용인", "성남", "안양", "고양"],
  "인천": ["미추홀구", "연수구", "부평구"],
  "충남": ["천안", "아산", "공주", "홍성"],
  "충북": ["청주", "충주"],
  "대전": ["유성구", "서구", "중구"],
  "전북": ["전주", "익산", "군산"],
  "전남": ["여수", "순천", "목포"],
  "광주": ["동구", "북구", "광산구"],
  "경북": ["경주", "포항", "안동"],
  "경남": ["창원", "진주", "김해"],
  "부산": ["해운대구", "남구", "부산진구"],
  "대구": ["중구", "수성구", "달서구"],
  "강원": ["춘천", "원주", "강릉"],
  "제주": ["제주시", "서귀포시"]
};

function showScreen(target) {
  screens.forEach(screen => screen.classList.remove("active"));
  target.classList.add("active");
}

function updateSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  onboardingBtn.textContent = currentSlide === slides.length - 1 ? "지역 선택하기" : "다음";
}

onboardingBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  } else {
    showScreen(provinceScreen);
  }
});

provinceButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedProvince = button.textContent;

    provinceButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    cityTitle.textContent = `${selectedProvince}에서 찾기`;

    cityList.innerHTML = "";

    const cities = cityData[selectedProvince] || ["전체"];

    cities.forEach(city => {
      const cityBtn = document.createElement("button");
      cityBtn.className = "bubble";
      cityBtn.textContent = city;

      cityBtn.addEventListener("click", () => {
        selectedCity = city;

        document.querySelectorAll("#cityList .bubble").forEach(btn => {
          btn.classList.remove("selected");
        });

        cityBtn.classList.add("selected");
      });

      cityList.appendChild(cityBtn);
    });

    showScreen(cityScreen);
  });
});

backToProvince.addEventListener("click", () => {
  showScreen(provinceScreen);
});

startBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

const homeContent = document.querySelector("#homeContent");
const regionTab = document.querySelector("#regionTab");
const schoolTab = document.querySelector("#schoolTab");
const myTab = document.querySelector("#myTab");
const navItems = document.querySelectorAll(".nav-item");
const schoolFilters = document.querySelectorAll(".school-filter");
const schoolSliderTrack = document.querySelector("#schoolSliderTrack");
const schoolSliderDots = document.querySelector("#schoolSliderDots");
const schoolPerformanceTitle = document.querySelector("#schoolPerformanceTitle");
const schoolPerformanceList = document.querySelector("#schoolPerformanceList");

let schoolPosterIndex = 0;
let schoolSliderTimer;

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(nav => nav.classList.remove("active"));
    item.classList.add("active");

    const tab = item.dataset.tab;

    if (tab === "home") {
      homeContent.classList.remove("hidden");
      regionTab.classList.add("hidden");
      schoolTab.classList.add("hidden");
      myTab.classList.add("hidden");
      detailTab.classList.add("hidden");
    }

    if (tab === "region") {
      homeContent.classList.add("hidden");
      regionTab.classList.remove("hidden");
      schoolTab.classList.add("hidden");
      myTab.classList.add("hidden");
      detailTab.classList.add("hidden");
    }

    if (tab === "school") {
      homeContent.classList.add("hidden");
      regionTab.classList.add("hidden");
      schoolTab.classList.remove("hidden");
      myTab.classList.add("hidden");
      detailTab.classList.add("hidden");

      schoolFilters.forEach(button => {
        button.classList.toggle("active", button.dataset.school === "sangmyung");
      });
      renderSchoolTab("sangmyung");
    }

    if (tab === "my") {
      homeContent.classList.add("hidden");
      regionTab.classList.add("hidden");
      schoolTab.classList.add("hidden");
      myTab.classList.remove("hidden");
      detailTab.classList.add("hidden");
    }
  });
});

const sliderTrack = document.querySelector("#sliderTrack");
const sliderDots = document.querySelector("#sliderDots");
const genreTabs = document.querySelectorAll(".genre-tab");
const detailTab = document.querySelector("#detailTab");
const detailBackBtn = document.querySelector("#detailBackBtn");

const detailPoster = document.querySelector("#detailPoster");
const detailTag = document.querySelector("#detailTag");
const detailTitle = document.querySelector("#detailTitle");
const detailDesc = document.querySelector("#detailDesc");
const detailDate = document.querySelector("#detailDate");
const detailPlace = document.querySelector("#detailPlace");
const detailStory = document.querySelector("#detailStory");
const reviewRating = document.querySelector("#reviewRating");
const reviewInput = document.querySelector("#reviewInput");
const reviewSubmitBtn = document.querySelector("#reviewSubmitBtn");
const reviewList = document.querySelector("#reviewList");

let currentPosterIndex = 0;
let sliderTimer;

const genrePosters = {
  all: [
    {
      tag: "HOT PERFORMANCE",
      title: "청춘의 밤",
      desc: "상명대 천안 · 뮤지컬 정기공연",
      poster: "poster-bg1",
      date: "06.21",
      place: "상명대 천안 계당홀",
      story: "청춘의 불안과 설렘을 음악으로 풀어낸 캠퍼스 뮤지컬 공연입니다."
    },
    {
      tag: "THEATRE",
      title: "갈매기",
      desc: "호서대 · 연극 공연",
      poster: "poster-bg2",
      date: "06.24",
      place: "호서대 소극장",
      story: "고전 희곡을 현대적인 감각으로 재해석한 연극 공연입니다."
    },
    {
      tag: "FILM FESTIVAL",
      title: "프레임 밖으로",
      desc: "백석대 · 영화제",
      poster: "poster-bg3",
      date: "06.26",
      place: "백석대 창조관",
      story: "학생 감독들의 시선으로 완성한 단편 영화들을 한자리에서 만나는 영화제입니다."
    },
    {
      tag: "MUSICAL GALA",
      title: "레미제라블 갈라",
      desc: "순천향대 · 뮤지컬",
      poster: "poster-bg4",
      date: "06.28",
      place: "순천향대 향설아트홀",
      story: "뮤지컬 명곡을 갈라 형식으로 구성한 강렬한 캠퍼스 무대입니다."
    },
    {
      tag: "CAMPUS STAGE",
      title: "청년 독백",
      desc: "순천향대 · 공연예술",
      poster: "poster-bg10",
      date: "07.03",
      place: "순천향대 향설아트홀",
      story: "청년의 목소리를 독백과 움직임으로 풀어낸 순천향대 공연예술 무대입니다."
    }
  ],

  movie: [
    {
      tag: "FILM FESTIVAL",
      title: "프레임 밖으로",
      desc: "백석대 · 단편 영화제",
      poster: "poster-bg3",
      date: "06.26",
      place: "백석대 창조관",
      story: "프레임 바깥의 감정과 시간을 담아낸 단편 영화 상영회입니다."
    },
    {
      tag: "SCREENING",
      title: "졸업영화제",
      desc: "상명대 천안 · 영화",
      poster: "poster-bg5",
      date: "06.30",
      place: "상명대 천안 디자인관",
      story: "졸업을 앞둔 창작자들의 첫 장편과 단편을 소개하는 상영 프로그램입니다."
    },
    {
      tag: "CAMPUS CINEMA",
      title: "여름의 끝",
      desc: "호서대 · 영상제",
      poster: "poster-bg7",
      date: "07.02",
      place: "호서대 벤처교육관",
      story: "여름 끝자락의 관계와 선택을 다룬 학생 영화 상영작입니다."
    },
    {
      tag: "SHORT FILM",
      title: "밤의 기록",
      desc: "순천향대 · 단편영화",
      poster: "poster-bg8",
      date: "07.04",
      place: "순천향대 미디어랩",
      story: "밤을 배경으로 펼쳐지는 네 편의 짧은 기록을 엮은 단편 모음입니다."
    },
    {
      tag: "DOCUMENTARY",
      title: "캠퍼스의 하루",
      desc: "순천향대 · 영상제",
      poster: "poster-bg9",
      date: "07.06",
      place: "순천향대 미디어랩",
      story: "천안·아산 캠퍼스의 하루를 담은 짧은 다큐멘터리 상영회입니다."
    }
  ],

  play: [
    {
      tag: "THEATRE",
      title: "갈매기",
      desc: "호서대 · 연극",
      poster: "poster-bg2",
      date: "06.24",
      place: "호서대 소극장",
      story: "고전 희곡을 현대적인 감각으로 재해석한 연극 공연입니다."
    },
    {
      tag: "STAGE PLAY",
      title: "햄릿",
      desc: "백석대 · 연극",
      poster: "poster-bg6",
      date: "07.01",
      place: "백석대 소극장",
      story: "복수와 망설임의 질문을 젊은 배우들의 에너지로 다시 묻는 무대입니다."
    },
    {
      tag: "CLASSIC PLAY",
      title: "로미오와 줄리엣",
      desc: "순천향대 · 연극",
      poster: "poster-bg9",
      date: "07.05",
      place: "순천향대 향설아트홀",
      story: "고전적 사랑 이야기를 캠퍼스 감각으로 풀어낸 연극 공연입니다."
    },
    {
      tag: "BLACK BOX",
      title: "유리동물원",
      desc: "상명대 천안 · 연극",
      poster: "poster-bg10",
      date: "07.07",
      place: "상명대 천안 블랙박스",
      story: "섬세한 기억과 가족의 균열을 작은 무대 위에 밀도 있게 담았습니다."
    }
  ],

  musical: [
    {
      tag: "MUSICAL",
      title: "청춘의 밤",
      desc: "상명대 천안 · 뮤지컬",
      poster: "poster-bg1",
      date: "06.21",
      place: "상명대 천안 계당홀",
      story: "청춘의 불안과 설렘을 음악으로 풀어낸 캠퍼스 뮤지컬 공연입니다."
    },
    {
      tag: "MUSICAL GALA",
      title: "레미제라블 갈라",
      desc: "백석대 · 뮤지컬",
      poster: "poster-bg4",
      date: "06.28",
      place: "백석대 예술대학 공연장",
      story: "뮤지컬 명곡을 갈라 형식으로 구성한 강렬한 캠퍼스 무대입니다."
    },
    {
      tag: "SHOWCASE",
      title: "렌트 쇼케이스",
      desc: "호서대 · 뮤지컬",
      poster: "poster-bg11",
      date: "07.08",
      place: "호서대 대강당",
      story: "젊은 예술가들의 사랑과 생존을 쇼케이스 형식으로 선보입니다."
    },
    {
      tag: "CAMPUS MUSICAL",
      title: "빨래",
      desc: "순천향대 · 뮤지컬",
      poster: "poster-bg12",
      date: "07.10",
      place: "순천향대 향설아트홀",
      story: "평범한 일상 속 사람들의 따뜻한 연대를 노래하는 뮤지컬 공연입니다."
    }
  ]
};

const schoolData = {
  sangmyung: {
    name: "상명대 천안",
    posters: [
      ["MUSICAL", "청춘의 밤", "상명대 천안 · 뮤지컬", "poster-bg1"],
      ["THEATRE", "유리동물원", "상명대 천안 · 연극", "poster-bg10"],
      ["FILM", "프레임 밖으로", "상명대 천안 · 영화", "poster-bg3"],
      ["STAGE", "무대 뒤에서", "상명대 천안 · 공연예술", "poster-bg6"]
    ]
  },
  hoseo: {
    name: "호서대",
    posters: [
      ["THEATRE", "갈매기", "호서대 · 연극", "poster-bg2"],
      ["MUSICAL", "렌트 쇼케이스", "호서대 · 뮤지컬", "poster-bg11"],
      ["FILM", "밤의 기록", "호서대 · 영상제", "poster-bg8"],
      ["PERFORMANCE", "움직임의 밤", "호서대 · 공연", "poster-bg7"]
    ]
  },
  baekseok: {
    name: "백석대",
    posters: [
      ["MUSICAL", "레미제라블 갈라", "백석대 · 뮤지컬", "poster-bg4"],
      ["THEATRE", "햄릿", "백석대 · 연극", "poster-bg6"],
      ["FILM", "졸업영화제", "백석대 · 영화", "poster-bg5"],
      ["STAGE", "검은 방", "백석대 · 공연", "poster-bg8"]
    ]
  },
  soonchunhyang: {
    name: "순천향대",
    posters: [
      ["THEATRE", "로미오와 줄리엣", "순천향대 · 연극", "poster-bg9"],
      ["FILM", "여름의 끝", "순천향대 · 영화", "poster-bg7"],
      ["MUSICAL", "빨래", "순천향대 · 뮤지컬", "poster-bg12"],
      ["STAGE", "청년 독백", "순천향대 · 공연", "poster-bg2"]
    ]
  }
};

function renderSchoolTab(schoolKey) {
  const school = schoolData[schoolKey];
  schoolPosterIndex = 0;

  schoolPerformanceTitle.textContent = `${school.name} 공연`;

  schoolSliderTrack.innerHTML = school.posters.map(poster => `
    <article class="main-poster-card">
      <div class="main-poster ${poster[3]}">
        <span class="star s1">✦</span>
        <span class="star s2">✦</span>
        <span class="star s3">✦</span>
      </div>
      <div class="main-poster-info">
        <span>${poster[0]}</span>
        <h2>${poster[1]}</h2>
        <p>${poster[2]}</p>
        <button>공연 보기</button>
      </div>
    </article>
  `).join("");

  schoolSliderDots.innerHTML = school.posters.map((_, index) => `
    <span class="slider-dot ${index === 0 ? "active" : ""}"></span>
  `).join("");

  schoolPerformanceList.innerHTML = school.posters.map(poster => `
    <article class="poster-card">
      <div class="poster ${poster[3]}"></div>
      <h3>${poster[1]}</h3>
      <p>${poster[2]}</p>
    </article>
  `).join("");

  schoolSliderTrack.style.transform = "translateX(0)";

  clearInterval(schoolSliderTimer);
  schoolSliderTimer = setInterval(() => {
    schoolPosterIndex = (schoolPosterIndex + 1) % school.posters.length;
    schoolSliderTrack.style.transform = `translateX(-${schoolPosterIndex * 100}%)`;

    document.querySelectorAll("#schoolSliderDots .slider-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === schoolPosterIndex);
    });
  }, 3000);

  connectAllPerformanceCards();
}

schoolFilters.forEach(button => {
  button.addEventListener("click", () => {
    schoolFilters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    renderSchoolTab(button.dataset.school);
  });
});

function renderSlider(genre) {
  const posters = genrePosters[genre];

  currentPosterIndex = 0;

  sliderTrack.innerHTML = posters.map((poster, index) => `
    <article class="main-poster-card">
      <div class="main-poster ${poster.poster}">
        <span class="star s1">✦</span>
        <span class="star s2">✦</span>
        <span class="star s3">✦</span>
      </div>
      <div class="main-poster-info">
        <span>${poster.tag}</span>
        <h2>${poster.title}</h2>
        <p>${poster.desc}</p>
        <button class="show-detail-btn" data-genre="${genre}" data-index="${index}">
          공연 보기
        </button>
      </div>
    </article>
  `).join("");

  sliderDots.innerHTML = posters.map((_, index) => `
    <span class="slider-dot ${index === 0 ? "active" : ""}"></span>
  `).join("");

  sliderTrack.style.transform = "translateX(0)";
  restartSlider(posters.length);
  connectDetailButtons();
  connectAllPerformanceCards();
}

function moveSlider(length) {
  currentPosterIndex = (currentPosterIndex + 1) % length;

  sliderTrack.style.transform = `translateX(-${currentPosterIndex * 100}%)`;

  document.querySelectorAll(".slider-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPosterIndex);
  });
}

function restartSlider(length) {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => moveSlider(length), 3000);
}

genreTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const genre = tab.dataset.genre;

    genreTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    renderSlider(genre);
  });
});

function openDetail(performance) {
  homeContent.classList.add("hidden");
  regionTab.classList.add("hidden");
  schoolTab.classList.add("hidden");
  detailTab.classList.remove("hidden");

  detailPoster.className = `detail-poster ${performance.poster}`;
  detailTag.textContent = performance.tag;
  detailTitle.textContent = performance.title;
  detailDesc.textContent = performance.desc;
  detailDate.textContent = performance.date;
  detailPlace.textContent = performance.place;
  detailStory.textContent = performance.story;
}

function connectDetailButtons() {
  document.querySelectorAll(".show-detail-btn").forEach(button => {
    button.addEventListener("click", () => {
      const genre = button.dataset.genre;
      const index = button.dataset.index;
      openDetail(genrePosters[genre][index]);
    });
  });
}

function connectAllPerformanceCards() {
  document.querySelectorAll(".poster-card, .list-card").forEach(card => {
    if (card.dataset.detailConnected === "true") {
      return;
    }

    card.dataset.detailConnected = "true";

    card.addEventListener("click", () => {
      const title = card.querySelector("h3, strong")?.textContent || "공연 상세";
      const desc = card.querySelector("p")?.textContent || "공연 정보";

      detailPoster.className = "detail-poster poster-bg1";
      detailTag.textContent = "CAMPUS PERFORMANCE";
      detailTitle.textContent = title;
      detailDesc.textContent = desc;
      detailDate.textContent = "06.21";
      detailPlace.textContent = "대학 공연장";
      detailStory.textContent = `${title} 공연 상세 정보입니다. 공연 소개, 학교 정보, 일정, 장소를 확인할 수 있습니다.`;

      homeContent.classList.add("hidden");
      regionTab.classList.add("hidden");
      schoolTab.classList.add("hidden");
      myTab.classList.add("hidden");
      detailTab.classList.remove("hidden");
    });
  });
}

detailBackBtn.addEventListener("click", () => {
  detailTab.classList.add("hidden");
  homeContent.classList.remove("hidden");
});

reviewSubmitBtn.addEventListener("click", () => {
  const rating = Number(reviewRating.value);
  const text = reviewInput.value.trim();

  if (text === "") {
    alert("관람평을 입력해주세요.");
    return;
  }

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  const reviewCard = document.createElement("div");
  reviewCard.className = "review-card";

  reviewCard.innerHTML = `
    <strong>${stars}</strong>
    <p>${text}</p>
  `;

  reviewList.prepend(reviewCard);
  reviewInput.value = "";
});

renderSlider("all");
connectAllPerformanceCards();
