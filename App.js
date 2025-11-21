const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// 🎨 Array of soft, pleasant colors for notes
const colors = [
  "#ffadad", "#ffd6a5", "#fdffb6",
  "#caffbf", "#9bf6ff", "#a0c4ff",
  "#bdb2ff", "#ffc6ff", "#fffffc"
];

addBtn.addEventListener("click", function () {
  addNote();
});

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => data.push(note.value));
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  // 🌈 Random background color for each new note
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  note.style.backgroundColor = randomColor;

  note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea placeholder="Write your note...">${text}</textarea>
  `;

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });

  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });

  main.appendChild(note);
  saveNotes();
};

// Load saved notes
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes === null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();


// let amt = prompt("enter the number ")
// if (amt >= 500)
// {
//     console.log("500 notes" + Math.floor(amt/500));
//     amt = amt % 500;
    
// }
// if (amt >= 200){
//     console.log("200 notes" + Math.floor(amt/200));
//     amt = amt % 200;
// }
// if(amt >= 100 ){
//     console.log("100 notes:" + Math.floor(amt/100))
//     amt = amt % 100;
// }
// if(amt >= 50 ){
//     console.log("50 notes:" + Math.floor(amt/50))
//     amt = amt % 50;
// }
// if(amt >= 20 ){
//     console.log("20 notes:" + Math.floor(amt/20))
//     amt = amt % 20;
// }
// if(amt >= 5 ){
//     console.log("5 notes:" + Math.floor(amt/5))
//     amt = amt % 5;
// }
// if(amt >= 1 ){
//     console.log("1 notes:" + Math.floor(amt/1))
//     amt = amt % 1;
// }

// let day = 5;
// switch(day){
//     case 1: 
//     console.log("mon");
//     break;
//     case 1,
//     : 
//     console.log("mon");
//     break;
//     case 1: 
//     console.log("mon");
//     break;
//     case 1: 
//     console.log("mon");
//     break;
//     case 1: 
//     console.log("mon");
//     break;
//     case 1: 
//     console.log("mon");
//     break;
    
// }
