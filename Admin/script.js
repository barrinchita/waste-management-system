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

// reports page js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin Reports Page Loaded!");

    // Waste Collection Trends Chart
    const ctx = document.getElementById('wasteChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Waste Collected (kg)',
                data: [2000, 2500, 3000, 2800, 3500, 4000],
                backgroundColor: 'rgba(0, 140, 94, 0.2)',
                borderColor: '#008C5E',
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
