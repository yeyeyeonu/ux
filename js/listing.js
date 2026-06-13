document.addEventListener("DOMContentLoaded", () => {
    const monthList = document.getElementById("monthList");
    const allList = document.getElementById("allList");
    if (monthList) renderMonthly(monthList);
    if (allList) initAllShows(allList);
});

function renderMonthly(root) {
    root.innerHTML = PERFORMANCES.map((item) => `
        <a class="month-row" href="${detailUrl(item.id)}">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <div class="month-day">
                <strong>${getDay(item.date)}일</strong>
                <span>${escapeHtml(item.genre)} · ${escapeHtml(item.location)}</span>
                <small>${escapeHtml(item.title)}</small>
            </div>
        </a>
    `).join("");
}

function initAllShows(root) {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");
    const render = () => {
        const query = input.value.trim().toLowerCase();
        const items = PERFORMANCES.filter((item) => {
            return !query ||
                item.title.toLowerCase().includes(query) ||
                item.genre.toLowerCase().includes(query) ||
                item.organizer.toLowerCase().includes(query);
        });
        root.innerHTML = items.map((item) => `
            <a class="all-row" href="${detailUrl(item.id)}">
                <img src="${item.image}" alt="${escapeHtml(item.title)}">
                <div>
                    <strong>${escapeHtml(item.genre)}</strong>
                    <span>${escapeHtml(item.title)}</span>
                </div>
            </a>
        `).join("") || `<p class="empty">조건에 맞는 공연이 없습니다.</p>`;
    };
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        render();
    });
    input.addEventListener("input", render);
    render();
}
