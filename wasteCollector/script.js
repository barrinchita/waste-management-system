document.addEventListener("DOMContentLoaded", function () {
    console.log("Waste Collector Dashboard Loaded!");

    // Sample Data
    let pickupRequests = [
        { name: "Alice Johnson", location: "Zone 5", date: "March 6, 2025" },
        { name: "Bob Williams", location: "Zone 3", date: "March 5, 2025" }
    ];

    let collectionHistory = [
        { name: "Charlie Brown", location: "Zone 1", date: "March 4, 2025" }
    ];

    // Populate Pickup Requests
    let pickupTable = document.getElementById("pickup-list");
    pickupRequests.forEach(request => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${request.name}</td>
            <td>${request.location}</td>
            <td>${request.date}</td>
            <td><button class="complete-btn" onclick="markAsCollected('${request.name}')">Mark as Collected</button></td>
        `;
        pickupTable.appendChild(row);
    });

    // Populate Collection History
    let historyTable = document.getElementById("history-list");
    collectionHistory.forEach(entry => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.location}</td>
            <td>${entry.date}</td>
        `;
        historyTable.appendChild(row);
    });
});

// Mark Pickup as Collected
function markAsCollected(name) {
    alert(`Pickup for ${name} has been marked as collected.`);
}

// subscribers js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Subscribers Page Loaded!");

    // Sample Data for Subscribed Residents
    let subscribers = [
        { name: "Alice Johnson", location: "Zone 5", date: "March 1, 2025" },
        { name: "Bob Williams", location: "Zone 3", date: "February 28, 2025" }
    ];

    // Populate Subscribers List
    let subscribersTable = document.getElementById("subscribers-list");
    subscribers.forEach(subscriber => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${subscriber.name}</td>
            <td>${subscriber.location}</td>
            <td>${subscriber.date}</td>
        `;
        subscribersTable.appendChild(row);
    });
});

// pickup requests js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Notifications Page Loaded!");

    // Sample Notifications
    let notifications = [
        { message: "New pickup request from Alice Johnson.", time: "2 hours ago" },
        { message: "You have a new subscriber: Bob Williams.", time: "1 day ago" },
        { message: "Admin: System maintenance scheduled for March 10.", time: "3 days ago" }
    ];

    // Populate Notification List
    let notificationList = document.getElementById("notification-list");
    notifications.forEach(notification => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <p>${notification.message}</p>
            <small>${notification.time}</small>
        `;
        notificationList.appendChild(listItem);
    });
});
