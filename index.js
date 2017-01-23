 const RootCategory = require('./catalog-data');

// Might generate lot of data
console.log(JSON.stringify(RootCategory, null, 2));

/**
 * [This function traverses the Category tree and for any given product name, returns a sorted list of products attached
 * to the tree up till this level]
 * @param  {[String]} productName [Name of product]
 * @return {[Array]}             [Array of products at same level across the tree, sorted by price ascending]
 */
function getSortedProductListUptoLevel(productName) {
  /*
   * Write your code here
   */
}
