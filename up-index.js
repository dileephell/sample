 const RootCategory = require('./catalog-data');

 // Might generate lot of data


 /**
  * [This function traverses the Category tree and for any given product name, returns a sorted list of products attached
  * to the tree up till this level]
  * @param  {[String]} productName [Name of product]
  * @return {[Array]}             [Array of products at same level across the tree, sorted by price ascending]
  */
 class Category {

     constructor(name, level) {
         this.type = 'Category';
         this.name = name;
         this.level = level;
         this.children = [];
     }

     addChild(child) {

         this.children.push(child);

     }
 }
 class Product {
     constructor(name, price) {
         this.type = 'Product';
         this.name = name;
         this.price = price;
     }
 }
 const MIN_PRICE = 100;
 const MAX_PRICE = 50000;
 let RootCategory1 = new Category('ROOT', 0);

 function getSortedProductListUptoLevel() {
     /*
      * Write your code here
      
      */

     for (i = 0; i <= 4; i++) {
         var newCat = new Category(`Cat_${i}`, i);
         if (i > 1) {
             for (let j = 1; j <= 2; j++) {
                 // Generate random price
                 let randomPrice = Math.floor(Math.random() * (MAX_PRICE - MIN_PRICE + 1)) + MIN_PRICE;

                 newCat.addChild(new Product(`Prod_${j}`, randomPrice));
             }
         }
         RootCategory1.addChild(newCat);
     }

     // console.log(JSON.stringify(RootCategory1, null, 2));



 }

 function getSortedProductListUptoLevel1(productName) {
     /*
      * Write your code here
      
      */
     var list_prod = [];
     var products;
     //  console.log(RootCategory1);

     for (i = 0; i < RootCategory1.children.length; i++) {

         var level = RootCategory1["children"];
         if (level[i].children.length > 0) {
             products = level[i].children;

             list_prod.push(products);
             for (j = 0; j < products.length; j++) {
                 var prod_name = products[j].name;
                 if (prod_name === productName) {
                     level = level[i].level;

                 }
             }
         }

     }
     console.log(level);
     console.log(list_prod);
 }

 getSortedProductListUptoLevel();
 getSortedProductListUptoLevel1('Prod_1');
