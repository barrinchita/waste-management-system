// waste collection js

document.addEventListener("DOMContentLoaded", function () {
    const assignBtns = document.querySelectorAll(".assign-btn");
    const completeBtns = document.querySelectorAll(".complete-btn");

    assignBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Assigning waste collector...");
        });
    });

    completeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Marked as Completed!");
        });
    });
});
