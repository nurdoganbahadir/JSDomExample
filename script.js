//! Adımlar:
//? header classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding özellikleri ekleyiniz ve text hizalamasını center olarak ayarlayınız.

const header = document.querySelector(".header");
header.style.backgroundColor = "orange";
header.style.color = "white";
header.style.padding = "1.5rem";
header.style.textAlign = "center";

//? title id sine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Ve "Javascript Dom Example" metnini textContent özelliği ile ekleyiniz.

const title = document.getElementById("title");
title.textContent = "Javascript Dom Example";

//? nav-item classına sahip olan elementi querySelector() metodu ile yakalayınız. Flexbox(center olsun) özelliği ekleyiniz ve elementler arasına gap özelliği ile boşluk ekleyiniz. List style özelliğini kaldırınız.

const navItem = document.querySelector(".nav-item");
navItem.style.display = "flex";
navItem.style.justifyContent = "center";
navItem.style.gap = "2rem";
navItem.style.listStyleType = "none";

//? username ve password idsine sahip olan inputları querySelector() metodu ile yakalayınız. İnputların value attributelarını kullanarak Username inputuna "Anthony" yazınız, password inputuna "123456" yazınız. Ayrıca password inputuna yazılan değerin görülmesini sağlayın. Ve inputların disabled özelliğini aktif ediniz. (Not: html de input type=password olduğunda bildiğiniz üzere yazılan değerler saklanıyor. Bu özelliği js ile değiştirmeniz lazım.)

const username = document.querySelector("#username");
const password = document.querySelector("#password");
username.setAttribute("placeholder", "Nurdoğan");
password.setAttribute("placeholder", 123456);

//? btn classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding, border-radius özellikleri ekleyiniz. Cursor pointer olsun ve border özelliği none olsun. Ayrıca button elementinin metni "Giriş Yap" metni olsun.

const btn = document.querySelector(".btn");
btn.style.backgroundColor = "gray";
btn.style.color = "white";
btn.style.padding = "0.5rem 1rem";
btn.style.borderRadius = "5px";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.textContent = "Giriş Yap";

//? projects idsine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Yakaladığınız bu element üzerinden bu elementin first childi olan h3 elementine ulaşıp metnini "Js Dom Projects" olarak değiştiriniz.

const projects = document.getElementById("projects");
projects.firstElementChild.textContent = "Js Dom Projects";

//? const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]; Verilen myProjects arrayindeki elemanları bir önceki adımda yakaladığınız projects idsine sahip olan elementin last childi olan ul elementine innerHTML özelliğini kullanarak tek tek li elementleri içerisinde child olarak ekleyiniz.

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];
let ulElement = projects.lastElementChild;

myProjects.forEach((project) => {
  let liElement = document.createElement("li");
  liElement.innerHTML = project;
  ulElement.appendChild(liElement);
});
