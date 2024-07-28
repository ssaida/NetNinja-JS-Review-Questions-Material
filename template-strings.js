const title = 'Title to read';
const auther = 'Samer Saida';
const likes = 30;

let result = 'The title called '+title+' by '+auther+' has '+likes+' likes';
console.log(result);
console.log('Template:');
result = `The title ${title} bu ${auther} had ${likes} likes`;
console.log(result);
let html = `
  <h2>${title}</h2>
  <p>By ${auther}</p>
  <span>this blog has ${likes} likes</span>
`;
console.log(html);