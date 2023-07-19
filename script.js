let arr = {}

function todoItem (inpTxt)
{
    this.inpTxt = inpTxt
    this.checked = false
    this.id = Date.now()
    this.htmlElement = '<label for="' + this.id + '">' + this.inpTxt + '</label><input type="checkbox" id ="' + this.id + '" onclick="checkBoxChanged(event)">'
    this.htmlElementDone = this.htmlElement.substring(0, this.htmlElement.length - 1) + "checked/>"
}

function addTodoItem(inpTxt)
{
    newItem = new todoItem(inpTxt)
    arr[newItem.id] = newItem
}

function update()
{
    const dispInTodo = document.getElementById('todo')
    const dispInDone = document.getElementById('done')

    dispInDone.innerHTML = ''
    dispInTodo.innerHTML = ''
    for (const [key, value] of Object.entries(arr)) {
        value.checked ? dispInDone.innerHTML += value.htmlElementDone : dispInTodo.innerHTML += value.htmlElement
    }
}

function checkBoxChanged(e)
{
    const toChange = document.getElementById(e.srcElement.id);
    arr[e.srcElement.id].checked = !arr[e.srcElement.id].checked 

    update()
}


const form = document.getElementById('formToAddTasks')

form.addEventListener('submit', event => {
    event.preventDefault()

    //Input field
    const input = document.getElementById('todoItem')

    //Get input value 
    const textToAdd = input.value.trim()

    //Prevent adding nothing
    if (textToAdd !== ''){
        addTodoItem(textToAdd)
        input.value = ''
        input.focus()
    }

    update()
})

