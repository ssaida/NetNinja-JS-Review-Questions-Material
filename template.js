const title = 'Best reads of 2024';
const auther = 'Samer Saida';
const likes = 30;

let result = `The blog called : ${title} by ${auther} has ${likes} likes`
console.log(result);
let html = ``;
html += `
  <h2>${title}</h2>
  <p>${auther}</p>
  <span>${likes}</span>
`;
console.log(html);