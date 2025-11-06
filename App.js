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
