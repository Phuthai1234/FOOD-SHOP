document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng chuyển trang
    const menuLinks = document.querySelectorAll("#main-menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage;
        });
    });

    const menuItems = document.querySelectorAll("#main-menu .has-child");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.querySelector(".sub-menu").style.display = "block";
        });
        item.addEventListener("mouseleave", function () {
            this.querySelector(".sub-menu").style.display = "none";
        });
    });

    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.backgroundColor = "rgba(255, 255, 255, 0.31)";
            this.style.transition = "0.3s";
        });
        link.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "transparent";
        });
    });

    // Hiệu ứng cuộn mượt
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
