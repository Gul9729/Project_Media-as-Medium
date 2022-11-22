// //data on backend
// const myArticles = [
//   { id: 1, title: "7 Practical CSS Tips" },
//   { id: 2, title: "7 Practical Javascript Tips" },
//   { id: 3, title: "7 Practical React Tips" },
// ];

// const article = `<div class="row gy-5">
// <div class="col-12">
//   <div class="row">
//     <div class="col-8">
//       <div class="h-25 row">
//         <div class="col-1">
//           <img src="./assets/avatar_default.png" alt="..." />
//         </div>
//         <div class="col">
//           <p>
//             <b>Author name</b> <small class="text-muted">in</small>
//             <b>Topics name</b> <small class="text-muted">7th July</small>
//           </p>
//         </div>
//       </div>
//       <div class="h-40 row"><p class="h3 title" id="title"></p></div>
//       <div class="h-15 row">
//         <p id="description"></p>
//       </div>

//       <div class="h-20 row">
//         <div class="col-2">
//           <span>JavaScript</span>
//         </div>
//         <div class="col-8">
//           <p>
//             <small class="text-muted">12 min read</small>
//             <small class="text-muted">Selected for you</small>
//           </p>
//         </div>
//         <div class="col-2">
//           <img src="./assets/skeleton-rect.png" alt="..." />
//           <img src="./assets/skeleton-rect.png" alt="..." />
//           <img src="./assets/skeleton-rect.png" alt="..." />
//         </div>
//       </div>
//     </div>

//     <div class="col">
//       <img className="news-image" class="img-fluid" alt="..." />
//     </div>
//   </div>
//   <hr />
// </div>
// </div>`;


//data from "backend"
const myArticles = [
  { id: 1, title: "7 Practical CSS Tips" },
  { id: 2, title: "7 Practical CSS Tips" }, //7 Practical Javascript Tips
  { id: 3, title: "7 Practical CSS Tips" }, //7 Practical React Tips
];

const descrip =[
  { id: 1, title1: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off."},
  { id: 2, title1: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."},
  { id: 3, title1: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."},
];

const image =[
 {id: 1, img1: "./assets/thread1.png"}, 
 {id: 2, img1: "./assets/thread2.png"},
 {id: 3, img1: "./assets/thread3.png" }, 
]; 

const myArticle = `<div class="row gy-5">
<div class="col-12">
  <div class="row">
    <div class="col-8">
      <div class="h-25 row">
        <div class="col-1">
          <img src="./assets/avatar_default.png" alt="..." />
        </div>
        <div class="col">
          <p>
            <b>Author name</b> <small class="text-muted">in</small>
            <b>Topics name</b> <small class="text-muted">7th July</small>
          </p>
        </div>
      </div>
      <div class="h-25 row"><h1>7 Practical CSS Tips </h1></div>
      <div class="h-25 row">
        <p id="text">
        </p>
      </div>

      <div class="h-25 row">
        <div class="col-2">
          <span>JavaScript</span>
        </div>
        <div class="col-8">
          <p>
            <small class="text-muted">12 min read</small>
            <small class="text-muted">Selected for you</small>
          </p>
        </div>
        <div class="col-2">
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
        </div>
      </div>
    </div>

    <div class="col"> 
    <img id="img" src="" alt="..." />
    </div>
</div>
</div>`;
//< img src="" alt="..." id="img"/>
const spinner = `<div class="row" id="spinner">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`;

// const container = document.getElementById("container");

function loadArticles() {
  const promiseArticles = new Promise((resolve, reject) => {
    container.innerHTML = container.innerHTML + spinner;

    setTimeout(() => resolve(descrip), 3000);
  });

  promiseArticles
    .then((result) => {
      const spinnerToDelete = document.getElementById("spinner");
      spinnerToDelete.className = "loader-remove";

      if (result && result.length > 0) {
        result.forEach((resItem) => {
          const myNewArticle = myArticle.replace(
            `id="text">`,
             `id="text">${resItem.title1}`
           // `id="img">`,
           // `id="img">${resItem.img1}`
        );
          container.innerHTML += myNewArticle;
       
        });
      }
      else if (result && result.length > 0) {
        result.forEach((resItem) => {
          const myNewImage = myArticle.replace(
            //`id="text">`,
            // `id="text">${resItem.title1}`
           `id="img">`,
           `id="img">${resItem.img1}`
        );
          container.innerHTML += myNewImage;
       
        });
      }

    })
        .catch((err) => {
          console.log(err);
        });
      }

    
      
