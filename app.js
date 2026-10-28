// promise

// vaqt talab qiladigan  js funksiyalari
// resolve => yaxshi natija
//pending => kutb turish
// reject => yomon natija
// fullfilled

//API   JSON

// function myPromice() {
//   return new Promise((resolve, reject) => {
//     let internet = true;
//     setTimeout(() => {
//       if (internet) {
//         resolve("Malumot muvaffaqiyatli olindi");
//       } else {
//         reject("Internet aloqasi yoq");
//       }
//     }, 2000);
//   });
// }

// myPromice()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// then catch metodlari faqat promice da ishledi
//================================================
// request
//response
const usersEl = document.querySelector(".users");
function updateUi(arr) {
  arr.forEach((user) => {
    usersEl.innerHTML += `
        <h2>${user.name}</h2>
        `;
  });
}
// updateUi([1, 2, 3, 4]);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    updateUi(json);
  })
  .catch();
