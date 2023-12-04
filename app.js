const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const testimony = document.querySelectorAll('.testimony');
testimony.forEach((el) => observer.observe(el));


const intro = document.querySelectorAll('.container2');
intro.forEach((el) => observer.observe(el));

const services = document.querySelectorAll('.services');
services.forEach((el) => observer.observe(el));


