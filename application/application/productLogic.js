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
        this.generateHeaders();
        let logic = new ProductLogic();
        let products = logic.getProducts();
        this.loadTable(products);
        this.save();

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
            optCats += `<option value=${val}>${val}</option>`;
        });
        document.getElementById("CategoryName").innerHTML = optCats;

        let optMans = "";
        Manufacturers.forEach((val, idx) => {
            optMans += `<option value=${val}>${val}</option>`;
        });
        document.getElementById("Manufacturer").innerHTML = optMans;
    }
    save() {
        let products = [];
        let btnsave = document.getElementById('btnsave');
        btnsave.addEventListener('click', function () {
            let logic = new ProductLogic();
            let prd = new Product();
            prd.ProductId = document.getElementById('ProductId').value;
            prd.ProductName = document.getElementById('ProductName').value;
            prd.BasePrice = document.getElementById('BasePrice').value;
            prd.CategoryName = document.getElementById('CategoryName').value;
            prd.Manufacturer = document.getElementById('Manufacturer').value;
            prd.Description = document.getElementById('Description').value;
            alert(JSON.stringify(prd));
            products = logic.saveProduct(prd);
            let tr = "";
            products.forEach((val, idx) => {
                tr += `<tr><td>${val.ProductId}</td><td>${val.ProductName}</td><td>${val.BasePrice}</td><td>${val.CategoryName}</td><td>${val.Manufacturer}</td><td>${val.Description}</td></tr>`;
            });
            document.getElementById('tbody').innerHTML = tr;
        }, false);
        //this.loadTable(products);
    }
    // method to generate table colums based on Product Object
    generateHeaders() {
        let prd = new Product();
        let tr = "<tr>";
        for (let c in prd) {
            tr += `<td>${c}</td>`;
        }
        tr += "</tr>";
        document.getElementById('thead').innerHTML = tr;
    }
    // method to generate table rows based on products array
    loadTable(products) {
        let tr = "";
        products.forEach((val, idx) => {
            tr += `<tr><td>${val.ProductId}</td><td>${val.ProductName}</td><td>${val.BasePrice}</td><td>${val.CategoryName}</td><td>${val.Manufacturer}</td><td>${val.Description}</td></tr>`;

        });
        document.getElementById('tbody').innerHTML = tr;
    }
}