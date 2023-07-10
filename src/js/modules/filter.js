const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function moveFilter(selector, noImage = false) {
        const button = document.querySelector(selector);

        button.addEventListener('click', () => {
            if (noImage) {
                typeFilter();
            } else {
                typeFilter(wrapper.querySelectorAll(selector));
            }
        });
    }

    moveFilter('.all');
    moveFilter('.lovers');
    moveFilter('.chef');
    moveFilter('.girl');
    moveFilter('.guy');
    moveFilter('.grandmother', true);
    moveFilter('.granddad', true);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;