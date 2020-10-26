var form = document.getElementById('comment-section'); 
let commentBoxes=[]; 
let nameHeaders = []; 
let commentContent = []; 
let profileimages = []; 
let text=[];

let Bill={
    name: "Bill", 
    comment: "This was AMAZING"
 }; 

 let Rob={ 
     name: "Rob", 
     comment: "BEST PERFORMANCE EVER"
 }; 

 let Tanner={ 
     name: "Tanner", 
     comment: "meh, it was aiight"
 }; 
 let commentArray=[Bill, Rob, Tanner]; 

for(let i=0; i<3; i++){ //creates div comment boxes and stores them in commentBoxes array
    //also creates h3 and p sections for name and comment content respectively
  let box=  document.createElement('div') 
  box.classList.add('comments__box'); 
  commentBoxes.push(box); 
  let pic = document.createElement('img'); 
  pic.src='./assets/pepe_frog.jpg'; 
  pic.classList.add('comments__box-image'); 
  profileimages.push(pic); 
  let words=document.createElement('div'); 
  words.classList.add('comments__box-text')
  let name= document.createElement('h3'); 
  text.push(words);
  name.classList.add('comments__box-name'); 
  nameHeaders.push(name); 
  let comment = document.createElement('p'); 
  comment.classList.add('comments__box-comment'); 
  commentContent.push(comment);

}  
let comments = document.getElementById('comments');    

for(let i=commentArray.length-1; i>=commentArray.length-3; i--){ //append comment boxes in comments parent and name headers, comment content in comment box
    comments.appendChild(commentBoxes[i]); 
    commentBoxes[i].appendChild(profileimages[i]); 
    commentBoxes[i].appendChild(text[i]); 
    text[i].appendChild(nameHeaders[i]); 
    text[i].appendChild(commentContent[i]); 
    nameHeaders[i].innerHTML=commentArray[i].name; 
    commentContent[i].innerHTML=commentArray[i].comment;

   
} 
function displayComments(object){ 
    let date = new Date(); 
    commentBoxes[3]=document.createElement('div'); 
    comments.insertBefore(commentBoxes[3], commentBoxes[2]); 
    commentBoxes[3].classList.add('comments__box'); 
    profileimages[3]= document.createElement('img'); 
    profileimages[3].src='./assets/pepe_frog.jpg';
    profileimages[3].classList.add('comments__box-image'); 
    commentBoxes[3].appendChild(profileimages[3]); 
    let timestamp=document.createElement('p'); 
    let line1= document.createElement('div'); 
    line1.classList.add('comments__box-1stline'); 
    timestamp.classList.add('comments__box-time'); 
    timestamp.innerHTML=date.toLocaleDateString();
    text[3]= document.createElement('div'); 
    text[3].classList.add('comments__box-text'); 
    commentBoxes[3].appendChild(text[3]); 
    text[3].appendChild(line1); 
    nameHeaders[3]= document.createElement('h3'); 
    nameHeaders[3].classList.add('comments__box-name'); 
    line1.appendChild(nameHeaders[3]); 
    line1.appendChild(timestamp); 
    nameHeaders[3].innerHTML=object.name;
    commentContent[3]= document.createElement('p'); 
    commentContent[3].classList.add('comments__box-comment'); 
    text[3].appendChild(commentContent[3]); 
    commentContent[3].innerHTML=object.comment; 
   
}


form.addEventListener("submit", (e) => { 
    e.preventDefault();
    console.log("form has been submitted"); 
    console.log("form has been submitted"); 
    let newcomment={
    name: e.target.name.value, 
    comment: e.target.comment.value,
    }
    displayComments(newcomment); 
    commentBoxes[0].remove(); 
    profileimages[0].remove(); 
    profileimages.shift();
    text[0].remove(); 
    text.shift();
    nameHeaders[0].remove(); 
    commentContent[0].remove(); 
    commentBoxes.shift(); 
    nameHeaders.shift(); 
    commentContent.shift();
    form.reset();  
       
    }
)
