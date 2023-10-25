let titleElem = document.getElementById("title");

console.log(titleElem);

// truy van noi dung inner HTML
console.log(titleElem.innerHTML);

titleElem.innerHTML = "Day la HTML DOM";

titleElem.style.color = "Red";

// tao the li moi
let newItem = document.createElement("li")

// setup noi dung cho element moi
newItem.innerHTML = "2. Hung - 7 - 6 - 6.5"

// Them phan tu moi vao th li
let studentListItem = document.getElementById("stu-list");
studentListItem.appendChild(newItem)

// Xoa form Element ra khỏi trang web
let studenFormElem = document.getElementById("stu-form") ;
studenFormElem.remove();