document.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("profile") || "{}");
    const nameInput = document.getElementById("nameInput");
    const imageInput = document.getElementById("imageInput");
    const profileName = document.getElementById("profileName");
    const profilePreview = document.getElementById("profilePreview");
    const form = document.getElementById("profileForm");

    if (saved.name) {
        nameInput.value = saved.name;
        profileName.textContent = saved.name;
    }
    if (saved.image) {
        imageInput.value = saved.image;
        profilePreview.src = saved.image;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const profile = {
            name: nameInput.value.trim() || "순천향 학생",
            image: imageInput.value.trim() || profilePreview.src
        };
        localStorage.setItem("profile", JSON.stringify(profile));
        profileName.textContent = profile.name;
        profilePreview.src = profile.image;
        alert("저장됐어.");
    });
});
