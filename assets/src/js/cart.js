(function() {
    class GoodsItem {
        constructor(name = "Товар", price = 0, src = "", descr = "описание") {
            this.name = name;
            this.price = price; //(price) ? price : 0;
            this.src = src;
            this.descr = descr;
            console.log(this.price);
        }
        render() {
            return `<li class="products__item product">
        <div class="product__image-wrap">
            <img src="${this.src}" height="420" width="360" alt="${this.name}">
            <div class="product__add-to-box-wrap">
                <button class="product__add-to-box-btn">Add to Cart</button>
            </div>
        </div>
        <footer class="product__footer">
            <a href="product-page.html" class="product__link">
                <h3 class="product__name">${this.name}</h3>
                <p class="product__description">${this.descr}</p>
                <p class="product__price">
                    $${this.price}
                </p>
            </a>
        </footer>
    </li>`;
        }
    }
    class GoodsList {
        constructor() {
            this.goods = [];

        }
        fetchGoods() {
            this.goods = [{
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 52,
                    src: `img/product/product-1.jpg`,
                },
                {
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 505,
                    src: `img/product/product-2.jpg`,
                },
                {
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 10,
                    src: `img/product/product-3.jpg`,
                },
                {
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 13,
                    src: `img/product/product-4.jpg`,
                },
                {
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 21,
                    src: `img/product/product-5.jpg`,
                }, {
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    price: 10000,

                },
                {
                    name: `ELLERY X M’O CAPSULE`,
                    descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
                    src: `img/product/product-7.jpg`,
                },
                {
                    name: `ELLERY X M’O CAPSULE`,
                    price: 1397,
                    src: `img/product/product-8.jpg`,
                },
            ];

        }
        costСalculation() {
            let summ = 0;
            console.log(this.goods);
            this.goods.forEach(good => {
                console.log(`Цена товара  ${good.price}`);
                summ += good.price ? good.price : 0;
                console.log(`Промежуточная сумма  ${summ}`);

            });
            console.log(`Общая сумма ${summ}`);
            return summ;
        }
        render() {
            let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.name, good.price, good.src, good.descr);
                listHtml += goodItem.render();
            });
            document.querySelector('.products__wrap').innerHTML = listHtml;
        }
    }
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.costСalculation();

})();