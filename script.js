
// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// แสดงข้อความต้อนรับเมื่อเปิดเว็บไซต์
window.addEventListener("load", () => {
    console.log("ยินดีต้อนรับเข้าสู่ Portfolio ของ");
    console.log("นางสาวกมลลักษณ์ สวัสดิวงศ์");
});

// ปุ่มกลับขึ้นด้านบน
const backToTop = document.createElement("button");

backToTop.textContent = "↑";
backToTop.id = "backToTop";
backToTop.title = "กลับขึ้นด้านบน";

document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// แสดงปุ่มเมื่อเลื่อนหน้าจอลง
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
