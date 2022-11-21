/* Author: 
Inayatullah
*/
const list = document.querySelectorAll('.list-item'),
    counterSection = document.querySelector('.counter-section');
let totalHeight = counterSection.getBoundingClientRect().top;


window.addEventListener('scroll', counterStart);
function counterStart() {
    if (window.scrollY > totalHeight + counterSection.offsetHeight) {
        list.forEach(function (counter) {
            const targetCounter = counter.getAttribute('data-final');
            let initial = targetCounter / 100;
            let x = 1;
            const interval = setInterval(function () {
                counter.innerText = (initial * x) + "+";
                x++;
                if (x > 100) {
                    clearInterval(interval);
                    window.removeEventListener('scroll', counterStart);
                }
            }, 20);
        })
    };
};