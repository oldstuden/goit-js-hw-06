const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);
//----------------------Перебір категорій списка-----
categories.forEach((item) => {
  const category = item.querySelector('h2').textContent;
  const lenthItem = item.lastChild.previousSibling.children.length;
  console.log('Category: ', category);
  console.log(lenthItem);
});
