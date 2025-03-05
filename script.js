document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            question.nextElementSibling.style.display =
                question.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    });

    const navBtn = document.getElementById('navBtn')

    navBtn.addEventListener('click', () => {
        const nav = document.getElementById('nav')
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'
    }   
    )

});
