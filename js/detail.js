document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const item = getPerformance(params.get("id") || 1);
    renderDetail(item);
});

function renderDetail(item) {
    const root = document.getElementById("detailRoot");
    if (!item) {
        root.innerHTML = `<p class="empty">공연을 찾을 수 없습니다.</p>`;
        return;
    }
    document.title = `${item.title} | SCH.Stage`;
    root.innerHTML = `
        <section class="detail-hero">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <div class="detail-copy">
                <p class="eyebrow">${escapeHtml(item.genre)} · ${escapeHtml(item.organizer)}</p>
                <h1>${escapeHtml(item.title)}</h1>
                <p>${escapeHtml(item.description)}</p>
                <div class="info-grid">
                    <span>일시 <strong>${escapeHtml(item.date)} ${escapeHtml(item.time)}</strong></span>
                    <span>장소 <strong>${escapeHtml(item.location)}</strong></span>
                    <span>관람 <strong>${escapeHtml(item.format)}</strong></span>
                    <span>가격 <strong>${escapeHtml(item.price)}</strong></span>
                </div>
                <p>${escapeHtml(item.reservationNote)}</p>
                ${item.formUrl ? `<a class="detail-link" href="${item.formUrl}" target="_blank" rel="noreferrer">예약 폼 보기</a>` : ""}
            </div>
        </section>
        ${renderProfiles(item)}
        <section class="reviews">
            <h2>관람평</h2>
            <form id="reviewForm">
                <textarea id="reviewInput" placeholder="이 공연에 대한 관람평을 남겨보세요."></textarea>
                <button type="submit">등록</button>
            </form>
            <div class="review-list" id="reviewList"></div>
        </section>
    `;
    initReviews(item.id);
}

function renderProfiles(item) {
    if (!item.profiles.length) return "";
    return `
        <section>
            <h2>감독 및 출연진</h2>
            <div class="profile-rail">
                ${item.profiles.map((profile) => `
                    <article class="profile-card">
                        <img src="${profile.image}" alt="${escapeHtml(profile.name)}">
                        <strong>${escapeHtml(profile.name)}</strong>
                        <span>${escapeHtml(profile.role)}</span>
                        <p>${escapeHtml(profile.bio)}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function initReviews(id) {
    const key = `reviews:${id}`;
    const form = document.getElementById("reviewForm");
    const input = document.getElementById("reviewInput");
    const list = document.getElementById("reviewList");
    const getReviews = () => JSON.parse(localStorage.getItem(key) || "[]");
    const render = () => {
        const reviews = getReviews();
        list.innerHTML = reviews.map((review) => `
            <article>
                <strong>관람객</strong>
                <p>${escapeHtml(review)}</p>
            </article>
        `).join("") || `<p class="empty">아직 등록된 관람평이 없습니다.</p>`;
    };
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;
        localStorage.setItem(key, JSON.stringify([value, ...getReviews()]));
        input.value = "";
        render();
    });
    render();
}
