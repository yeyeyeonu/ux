function detailUrl(id) {
    return `detail.html?id=${id}`;
}

function getPerformance(id) {
    return PERFORMANCES.find((item) => String(item.id) === String(id));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getDay(date) {
    return date.split(".")[2];
}
