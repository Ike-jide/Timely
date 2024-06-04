const create = document.querySelector(".newSchedule")
const view = document.querySelector(".viewEmails")
const table = document.querySelector(".table")
const create2= document.querySelector(".create")

create2.addEventListener('click',()=>{
    
})

create.addEventListener('click',()=>{

})
view.addEventListener('click',()=>{
    updateUi()
})
//update ui
 
const updateUi =()=>{
    const html=
    `
    <tr>
      <th>Title</th>
      <th>Message</th>
      <th>Time</th>
    </tr>
    <tr>
      <td>School application</td>
      <td>this is regarding your addmission</td>
      <td>12:00pm</td>
    </tr>
    <tr>
      <td>Deadline</td>
      <td>deadline has passed</td>
      <td>11:20am</td>
    </tr>
  `
  table.innerHTML +=html
}
