document.addEventListener("DOMContentLoaded", () => {
    renderFeatureCarousel();
    renderFolderCards("밴드");
    renderStories();
    initFolderTabs();
});

function renderFeatureCarousel() {
    const track = document.getElementById("featureTrack");
    const dots = document.getElementById("featureDots");
    track.innerHTML = PERFORMANCES.map((item) => `
        <a class="poster-slide" href="${detailUrl(item.id)}" aria-label="${escapeHtml(item.title)} 상세보기">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <span>${escapeHtml(item.genre)}</span>
        </a>
    `).join("");
    dots.innerHTML = PERFORMANCES.map((_, index) => `
        <button class="${index === 0 ? "active" : ""}" type="button" data-slide="${index}" aria-label="${index + 1}번째 포스터"></button>
    `).join("");
    initFeatureCarousel();
}

function renderFolderCards(genre) {
    const root = document.getElementById("folderPicks");
    const items = PERFORMANCES.filter((item) => item.genre === genre);
    root.innerHTML = items.map((item) => `
        <a href="${detailUrl(item.id)}">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <strong>${escapeHtml(item.genre)}</strong>
        </a>
    `).join("") || `<p class="empty">등록된 공연이 없습니다.</p>`;
}

function renderStories() {
    const root = document.getElementById("storyStack");
    root.innerHTML = PERFORMANCES.slice(0, 3).map((item, index) => `
        <a class="story-card ${index % 2 ? "reverse" : ""}" href="${detailUrl(item.id)}">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <div>
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.subtitle)}</p>
            </div>
        </a>
    `).join("");
}

function initFolderTabs() {
    const tabs = [...document.querySelectorAll("[data-folder-tab]")];
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((item) => item.classList.toggle("active", item === tab));
            renderFolderCards(tab.dataset.folderTab);
        });
    });
}

function initFeatureCarousel() {
    const track = document.getElementById("featureTrack");
    const prev = document.getElementById("featurePrev");
    const next = document.getElementById("featureNext");
    const dots = [...document.querySelectorAll("#featureDots button")];
    let index = 0;
    let timer = null;

    const goTo = (nextIndex) => {
        index = Math.max(0, Math.min(nextIndex, Math.max(0, dots.length - 3)));
        track.style.transform = `translateX(-${index * 34}%)`;
        dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    };

    const restart = () => {
        window.clearInterval(timer);
        timer = window.setInterval(() => goTo(index + 1 > dots.length - 3 ? 0 : index + 1), 4200);
    };

    prev.addEventListener("click", () => {
        goTo(index - 1);
        restart();
    });
    next.addEventListener("click", () => {
        goTo(index + 1);
        restart();
    });
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            goTo(Number(dot.dataset.slide));
            restart();
        });
    });
    restart();
}
