        window.addEventListener("load", () => {
            const loader = document.getElementById("loader");
            const main = document.getElementById("main-content");
            setTimeout(() => {
                loader.style.opacity = "0";
                main.style.display = "block";
                setTimeout(() => loader.remove(), 500);
            }, 800);
        });

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
