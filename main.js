const taskData = [];

document.querySelector('.addTaskBtn').addEventListener('click' , addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  let task = taskInput.value.trim();
  if (task === '') {
    alert('INPUT SOMETHING');
    return;
  }
  taskData.unshift(task);
  // let taskList = "";
  let taskList = document.createElement('li');
  // for (let task of taskData) {
    taskList.innerHTML = `<div class="taskText"><i class="fa-regular fa-square"></i><span class='span'>${task}</span></div><button class="del-btn"><i class="fa-solid fa-trash"></i></button>`;
    taskInput.value = '';
    document.querySelector('.taskItems').prepend(taskList)
  // }
  taskList.querySelector('.del-btn').addEventListener('click', function() {
  taskList.remove();
});
  taskList.querySelector('.taskText').addEventListener('click' , function() {
    
   let marked = taskList.querySelector('.span').classList.toggle('markedText');
   if (marked) {
     taskList.querySelector('.fa-regular').classList.replace('fa-square' , 'fa-square-check')
   } else {
     taskList.querySelector('.fa-regular').classList.replace('fa-square-check' , 'fa-square')
   }
  });
  // document.querySelector('.taskItems').innerHTML = taskList;
}


