document.addEventListener('DOMContentLoaded', () => {

    // ==================== MOBILE NAVIGATION ====================

    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            links && links.classList.remove('open');
        });
    });


    // ==================== ACTIVE NAVIGATION LINK ====================

    const path = location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(a => {

        if (a.getAttribute('href') === path) {
            a.classList.add('active');
        }

    });


    // ==================== COURSE SEARCH & FILTER ====================

    const search = document.querySelector('#courseSearch');

    const cards = [
        ...document.querySelectorAll('.course-card')
    ];

    const empty = document.querySelector('.empty');


    function filterCourses() {

        if (!cards.length) {
            return;
        }

        const q = (search?.value || '').toLowerCase();

        const active =
            document.querySelector('.filter-btn.active')
                ?.dataset.category || 'all';

        let shown = 0;


        cards.forEach(c => {

            const okText =
                c.innerText.toLowerCase().includes(q);

            const okCat =
                active === 'all' ||
                c.dataset.category === active;


            c.style.display =
                okText && okCat ? 'block' : 'none';


            if (okText && okCat) {
                shown++;
            }

        });


        if (empty) {
            empty.style.display =
                shown ? 'none' : 'block';
        }

    }


    // Course Search
    if (search) {
        search.addEventListener('input', filterCourses);
    }


    // Course Category Filters
    document.querySelectorAll('.filter-btn').forEach(b => {

        b.addEventListener('click', () => {

            document
                .querySelectorAll('.filter-btn')
                .forEach(x => {
                    x.classList.remove('active');
                });

            b.classList.add('active');

            filterCourses();

        });

    });


    // ==================== DEMO FORMS ====================

    document
        .querySelectorAll('form[data-demo-form]')
        .forEach(form => {

            form.addEventListener('submit', e => {

                e.preventDefault();

                const msg =
                    form.querySelector('.form-message');


                if (msg) {

                    msg.style.display = 'block';

                    msg.textContent =
                        form.dataset.success ||
                        'Thank you! Your message has been received.';

                }


                form.reset();

            });

        });


    // ==================== FOOTER YEAR ====================

    document
        .querySelectorAll('[data-year]')
        .forEach(x => {

            x.textContent =
                new Date().getFullYear();

        });

});


// ==================== COURSE DATA ====================

const courseData = {

    javascript: {
        title: 'JavaScript From Beginner to Pro',
        img: 'Images/c1.jpg',
        duration: '12 weeks',
        price: '$49.99',
        desc: 'Build a strong JavaScript foundation and create interactive web projects from the ground up. This course takes you from core syntax to practical browser applications.'
    },


    web: {
        title: 'Full-Stack Web Development',
        img: 'Images/c2.jpg',
        duration: '14 weeks',
        price: '$59.99',
        desc: 'Learn how modern web applications are structured, from responsive front-end interfaces to server-side fundamentals and databases.'
    },


    design: {
        title: 'Modern Web Design',
        img: 'Images/c3.jpg',
        duration: '8 weeks',
        price: '$39.99',
        desc: 'Learn the principles behind modern, responsive interfaces, including layout, typography, spacing, visual hierarchy and accessibility.'
    },


    python: {
        title: 'Python Programming Essentials',
        img: 'Images/c4.jpg',
        duration: '10 weeks',
        price: '$44.99',
        desc: 'Build confidence with Python fundamentals, functions, collections, problem solving and practical automation exercises.'
    },


    frontend: {
        title: 'Frontend Development with HTML & CSS',
        img: 'Images/c5.jpg',
        duration: '8 weeks',
        price: '$34.99',
        desc: 'Create responsive websites using semantic HTML, modern CSS layouts, reusable components and mobile-first techniques.'
    },


    angular: {
        title: 'Angular for Beginners',
        img: 'Images/c6.jpg',
        duration: '10 weeks',
        price: '$49.99',
        desc: 'Understand Angular components, templates, services, routing and forms while building a structured front-end application.'
    },


    vue: {
        title: 'Vue.js Essentials',
        img: 'Images/c7.jpeg',
        duration: '8 weeks',
        price: '$44.99',
        desc: 'Learn Vue fundamentals and component-based development by creating reactive interfaces and practical application features.'
    },


    data: {
        title: 'Data Analysis Fundamentals',
        img: 'Images/c2.jpg',
        duration: '9 weeks',
        price: '$54.99',
        desc: 'Develop practical data analysis skills using spreadsheets, SQL and Python while learning how to turn data into useful insights.'
    },


    uiux: {
        title: 'UI/UX Design Foundations',
        img: 'Images/b4.png',
        duration: '7 weeks',
        price: '$39.99',
        desc: 'Learn user flows, wireframes, visual systems and interface design principles for creating clear and useful digital experiences.'
    }

};


// ==================== COURSE DETAILS ====================

const params = new URLSearchParams(location.search);
const key = params.get('course');


if (key && courseData[key]) {

    const d = courseData[key];


    // Update Page Title
    document.title =
        d.title + ' | TechEduca';


    // Get Course Detail Elements
    const t = document.querySelector('#detailTitle');
    const im = document.querySelector('#detailImage');
    const du = document.querySelector('#detailDuration');
    const pr = document.querySelector('#detailPrice');
    const de = document.querySelector('#detailDescription');


    // Update Course Information
    if (t) {
        t.textContent = d.title;
    }


    if (im) {
        im.src = d.img;
        im.alt = d.title;
    }


    if (du) {
        du.textContent = d.duration;
    }


    if (pr) {
        pr.textContent = d.price;
    }


    if (de) {
        de.textContent = d.desc;
    }

} 