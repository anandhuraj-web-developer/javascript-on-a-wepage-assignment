button = document.getElementById('button-addon2');
button.addEventListener('click' , ()=>{
    const textinput = document.getElementById('inputtask');
    const task = textinput.value.trim(); 
    
    if(task==''){
        return alert('enter a input');
    }

    const li = document.createElement('li');
    li.classList.add('taskbar');

    const span = document.createElement('span');
    span.innerText = task
    display = "inline-block"; 
span.style.width = "900px";
li.appendChild(span)

  const icon1 = document.createElement('i');
 icon1.classList.add("bi", "bi-check", "fs-4", "text-success")
  li.appendChild(icon1);

  icon1.addEventListener('click' , ()=>{

    span.classList.toggle("icon1-after-effects") })


     const deleteIcon = document.createElement('i');
     deleteIcon.classList.add("bi", "bi-trash", "fs-4", "text-danger"); 
     li.appendChild(deleteIcon);
 
     deleteIcon.addEventListener('click' , () => {
        li.remove()
     })
    
    document.getElementById('tasklist').appendChild(li);

})

textinput.value = "";