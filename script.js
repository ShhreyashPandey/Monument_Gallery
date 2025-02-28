let monuments = [
    { name: "Qutub Minar", description: "Tallest brick minaret", city: "Delhi", image: "qutubminar.jpeg" },
    { name: "Gateway of India", description: "Iconic Mumbai landmark", city: "Mumbai", image: "gateway.jpeg" }
];

function renderGallery() {
    let gallery = document.getElementById("monumentGallery");
    gallery.innerHTML = "";
    monuments.forEach((monument, index) => {
        let monumentDiv = document.createElement("div");
        monumentDiv.classList.add("monument");
        monumentDiv.innerHTML = `
            <img src="${monument.image}" onclick="editMonument(${index})">
            <h3>${monument.name}</h3>
            <p>${monument.description}</p>
            <p><strong>${monument.city}</strong></p>
            <button class="delete-btn" onclick="deleteMonument(${index})">Delete</button>
        `;
        gallery.appendChild(monumentDiv);
    });
}

function addMonument() {
    let name = prompt("Enter monument name:");
    let description = prompt("Enter description:");
    let city = prompt("Enter city:");
    let image = prompt("Enter image URL:", "https://via.placeholder.com/150");
    
    if (name && description && city) {
        monuments.push({ name, description, city, image });
        renderGallery();
    }
}

function editMonument(index) {
    let monument = monuments[index];
    let name = prompt("Edit name:", monument.name);
    let description = prompt("Edit description:", monument.description);
    let city = prompt("Edit city:", monument.city);
    let image = prompt("Edit image URL:", monument.image);
    
    if (name && description && city) {
        monuments[index] = { name, description, city, image };
        renderGallery();
    }
}

function deleteMonument(index) {
    if (confirm("Are you sure you want to delete this monument?")) {
        monuments.splice(index, 1);
        renderGallery();
    }
}

function searchMonuments() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let filteredMonuments = monuments.filter(monument =>
        monument.name.toLowerCase().includes(searchQuery)
    );
    let gallery = document.getElementById("monumentGallery");
    gallery.innerHTML = "";
    filteredMonuments.forEach((monument, index) => {
        let monumentDiv = document.createElement("div");
        monumentDiv.classList.add("monument");
        monumentDiv.innerHTML = `
            <img src="${monument.image}" onclick="editMonument(${index})">
            <h3>${monument.name}</h3>
            <p>${monument.description}</p>
            <p><strong>${monument.city}</strong></p>
            <button class="delete-btn" onclick="deleteMonument(${index})">Delete</button>
        `;
        gallery.appendChild(monumentDiv);
    });
}

renderGallery();
