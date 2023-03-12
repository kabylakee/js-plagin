class Dropdown {
    constructor(selector, options) {
        this.$elem = document.querySelector(selector);
        this.items = options.items;

        this.$elem.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$elem.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
               this.$elem.classList.contains("open") ? this.close() : this.open();
            } else if (event.target.tagName.toLowerCase() === "li") {
                this.select(event.target.dataset.id);
            }
        });

        const itemsHTML = this.items.map((item) => `<li data-id="${item.id}">${item.label}</li>`).join(' ');

        this.$elem.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);
    }

    open() {
        this.$elem.classList.add('open');
    }

    close() {
        this.$elem.classList.remove("open");
    }

    select(id) {
        const item = this.items.find(item => item.id === id);
        this.$elem.querySelector(".dropdown__label").textContent = item.label;
        this.close();
    }
}

const dropdown = new Dropdown("#dropdown", {
  items: [
    { label: "Москва", id: "msk" },
    { label: "Санкт-Петербург", id: "spb" },
    { label: "Новосибирск", id: "nsk" },
    { label: "Краснодар", id: "krdr" },
  ],
});