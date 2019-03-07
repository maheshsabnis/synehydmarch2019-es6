// Data-Schema Class
class Product {
    constructor() {
        this.ProductId = 0;
        this.ProductName = "";
        this.BasePrice = 0;
        this.CategoryName = "";
        this.Manufacturer = "";
        this.Description = "";
    }
}
const Categories = ["ECT", "ECL", "FOOD"];
const Manufacturers = ["ASUS", "Bajaj", "Parle"];
class ProductLogic {
    constructor() {
        this.product = new Product();
        this.products = [];

        this.products.push({
            ProductId: 1,
            ProductName: 'Laptop',
            BasePrice: 98000,
            CategoryName: 'ECT',
            Manufacturer: 'ASUS',
            Description: 'Gaming Laptop'
        });
        this.products.push({
            ProductId: 2,
            ProductName: 'Iron',
            BasePrice: 1800,
            CategoryName: 'ECL',
            Manufacturer: 'Bajaj',
            Description: 'House hold Instrument'
        });
        this.products.push({
            ProductId: 3,
            ProductName: 'Lays',
            BasePrice: 20,
            CategoryName: 'FOOD',
            Manufacturer: 'Parle',
            Description: 'Fast Food Item'
        });
    }
    getProducts() {
        return this.products;
    }
    saveProduct(prd) {
        this.products.push(prd);
        return this.products;
    }
}

class UIPresenter {
    constructor() {
        // console.log('ctor');
        this.clear();
        this.loadLists();
    }
    clear() {
        // console.log('clear accessed');
        this.btnnew = document.getElementById('btnnew');
        this.btnnew.addEventListener('click', function () {
            var inputs = document.getElementsByClassName('form-control');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        }, false);
    }
    loadLists() {
        let optCats = "";
        Categories.forEach((val, idx) => {
            optCats += `<option value=${idx}>${val}</option>`;
        });
        document.getElementById("CategoryName").innerHTML = optCats;

        let optMans = "";
        Manufacturers.forEach((val, idx) => {
            optMans += `<option value=${idx}>${val}</option>`;
        });
        document.getElementById("Manufacturer").innerHTML = optMans;
    }
}