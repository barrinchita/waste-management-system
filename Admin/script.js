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

// reports page js
// Function to Send System-Wide Announcement
function sendSystemAlert() {
    const message = document.getElementById("admin-message").value;
    if (message.trim() === "") {
        alert("Please enter a message before sending.");
    } else {
        alert(`System Alert Sent: ${message}`);
        document.getElementById("admin-message").value = ""; // Clear textarea
    }
}

// waste collectors page js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Waste Collectors Page Loaded!");

    // Sample Data (This should come from the database in a real system)
    let registeredCollectors = [
        { name: "John Doe", email: "john@example.com", status: "Active" },
        { name: "Jane Smith", email: "jane@example.com", status: "Active" }
    ];

    let pendingCollectors = [
        { name: "Michael Scott", email: "michael@example.com" },
        { name: "Pam Beesly", email: "pam@example.com" }
    ];

    // Display Registered Collectors
    let collectorsTable = document.getElementById("collectors-list");
    registeredCollectors.forEach(collector => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${collector.name}</td>
            <td>${collector.email}</td>
            <td>${collector.status}</td>
            <td><button class="reject-btn" onclick="removeCollector('${collector.email}')">Remove</button></td>
        `;
        collectorsTable.appendChild(row);
    });

    // Display Pending Collectors
    let pendingTable = document.getElementById("pending-list");
    pendingCollectors.forEach(collector => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${collector.name}</td>
            <td>${collector.email}</td>
            <td>
                <button class="approve-btn" onclick="approveCollector('${collector.name}', '${collector.email}')">Approve</button>
                <button class="reject-btn" onclick="rejectCollector('${collector.email}')">Reject</button>
            </td>
        `;
        pendingTable.appendChild(row);
    });
});

// Function to Approve a Waste Collector
function approveCollector(name, email) {
    alert(`${name} has been approved as a Waste Collector.`);
    // Remove from pending list and add to registered list (in real case, update DB)
}

// Function to Reject a Waste Collector
function rejectCollector(email) {
    alert(`Waste Collector with email ${email} has been rejected.`);
    // Remove from pending list (in real case, update DB)
}

// Function to Remove a Registered Collector
function removeCollector(email) {
    alert(`Waste Collector with email ${email} has been removed.`);
    // Remove from registered list (in real case, update DB)
}
