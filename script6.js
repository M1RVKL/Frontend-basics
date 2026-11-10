document.getElementById('downloadBtn').addEventListener('click', () => {
    const statusMsg = document.getElementById('statusMsg');
    const container = document.getElementById('usersContainer');
    
    statusMsg.textContent = "Завантаження...";

    fetch('https://randomuser.me/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка мережі');
            }
            return response.json();
        })
        .then(data => {
            statusMsg.textContent = "success!";
            
            const user = data.results[0];

            const picture = user.picture.large;
            const name = `${user.name.first} ${user.name.last}`;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const phone = user.phone;

            const userCard = document.createElement('div');
            userCard.className = 'user-card';

            userCard.innerHTML = `
                <img src="${picture}" alt="User Picture">
                <div class="user-info">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Postcode:</strong> ${postcode}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
            `;

            container.appendChild(userCard);
        })
        .catch(error => {
            statusMsg.textContent = "Помилка завантаження!";
            console.error('Помилка Fetch:', error);
        });
});