fetch('../navBar.html')
            .then(response => {
                if (!response.ok) throw new Error("Failed to load header");
                return response.text();
            })
            .then(data => {
                document.getElementById('navBar').innerHTML = data;
            })
            .catch(err => console.error(err));
