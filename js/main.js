// let postsData = {
//     post1:{ /* entrada de post*/
//         postId:1,/*id del post*/
//         userId:2, /*id del usuario que publicó el post*/
//         title:"Post 1", /*título del post*/
//         content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
//         creationDate:"14/04/2021", /*fecha de creación del post*/
//         creationTime:"19:00", /*hora de creación del post*/
//         coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
//     }
// } 
// let replies = {
//     reply1:{ /*entrada de comentario*/
//         userId:1, /*id del usuario que comenta*/
//         post:1, /*id del post en el que se comenta*/
//         content:"Excelente post!", /*contenido del comentario */
//         creationDate:"14/04/2021", /*fecha de creación del comentario */
//         creationTime:"19:00", /*hora de creación del comentario */
//     }
// }

// let users = {
//     user1:{ /*Entrada de usuario */
//         userId:1, /*id del usuario */
//         name:"Israel Salinas Martínez", /*Nombre del usuario */
//         avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ" /*Avatar del usuario */
//     },
//     user2:{
//         userId:2,
//         name:"Gabriela Padilla",
//         avatar:"https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8"
//     }
// }
let userObject = {
    id: '',
    name: '',
    title: '',
    content: '',
    url: '',
    date: '',
    time: ''
};

let upload = function() {
    console.log(userObject, typeof userObject)
    $.ajax({
        method: "POST",
        url: "https://crud-ed62d-default-rtdb.firebaseio.com/posts/.json",
        data: JSON.stringify({userObject}),
        success : response => {
            console.log(response)
        },
        error : error => {
            console.log(error)
        }

    })
}   

const getDateAndTime = (user) => {
    user.date = moment().format('MMMM Do YYYY')
    user.time = moment().format('h:mm:ss a')
}

 $('#post').on("click",function() {
    $("input, textarea, .modal-body").not(".reply").each(function(){
        console.log(this)
        let key = this.name
        let value = this.value
        userObject[key] = value
        console.log(userObject)
    })

    getDateAndTime(userObject)
    userObject.id = '1205'
    userObject.name = "taco"
    userObject.key = 'post1'
    upload()
 });

   
//   // Perform other work here ...
   
//   // Set another completion function for the request above

// let postBodyHTML = `
//                 <div class="row no-gutters">
//                     <div class="col-md-4">
//                         <img class="w-100" src="${key.coverURL}" alt="...">
//                     </div>
//                     <div class="col-md-8">
//                         <div class="card-body">
//                             <h5 class="card-title">${key.title}</h5>
//                             <p class="card-text">${key.content}</p>
//                             <p class="card-text">
//                                 <small class="text-muted">Creado el 
//                                     <span class="text-dark">${key.creationDate}</span>
//                                 </small>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 `
// let replyHTML = `
//                 <div class="replies-wrapper">
//                     <ul class="list-group">
//                         <li class="list-group-item">
//                             <div class="reply-box">
//                                 <h3><img src="David" alt=""><span>David</span></h3>
//                                 <p>ta cool</p>
//                                 <p class="text-right text-muted">
//                                     <span class="date">hoy</span>
//                                     <span class="time">"ahorita"</span>
//                                 </p>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
// `


// let cardHTML = `
// <div class="container">
// <div class="row">
//     <div class="col-12">
//         <div class="card mb-3">
//             ${postBodyHTML}
//             ${replyHTML}
//             <div class="reply-form">
//             <form action="">
//                 <div class="form-group d-flex">
//                     <input type="text" class="form-control">
//                     <button class="btn btn-success">></button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     </div>
// </div>
// </div>
// `


