const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            hideAccorion(btns);
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    function hideAccorion(btn) {
        btn.forEach(item => {
            item.classList.remove('active-style');
            item.nextElementSibling.classList.remove('active-content');
            item.nextElementSibling.style.maxHeight = '0px';
        });
    }
};

export default accordion;