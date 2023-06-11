const todolist = [];
function add(){
 const inputele =  document.querySelector('.js-name-input');
 const name = inputele.value;
 const date = document.querySelector('.js-date');
 const duedate = date.value;
 todolist.push({
  name:name,
  dueDate:duedate
 });
 inputele.value='';
 date.value='';
 todo();
}
function todo()
{
  let str1 = '';
  for(let i=0;i<todolist.length;i++){
    const {name,dueDate} = todolist[i];
    const html = `
    <div class="dispname">${name}</div>
    <div class="dispdate">${dueDate}</div>
     <button class="del" onclick = "
     todolist.splice(${i},1);
     todo();
     ">Delete</button>`;
    str1+=html;
  }
  document.querySelector('.js-display').innerHTML = str1;
}
