// == 1. Define global variables ==================================================
const tasks = []

// -- Constant --------------------------------------------------------------------
const HTML_ELEMENTS_SELECTORS = { taskInput: '#todo-input', addButton: '#add-todo', tasksContainer: '#list-todo' }
const NODES_ELEMENTS = { listItem: 'li', span: 'span', button: 'button' }
const CSS_PROPERTIES = { textDecoration: 'text-decoration' }
const TEXT_DECORATION_OPTIONS = { lineThrough: 'line-through', none: 'none' }
const BUTTON_ACTIONS = { complete: 'complete', delete: 'delete' }
const EMOJIS = { circleWhite: '⚪️', circleRed: '🔴', trash: '🗑' }
const ATTRIBUTE_ID = 'data-id'
const EVENT_LISTENER_TYPES = { click: 'click', keydown: 'keydown' }
const KEYDOWN_KEYS = { enter: 'Enter' }

// == 2. Get DOM elements to be working on ========================================
const taskInput = document.querySelector(HTML_ELEMENTS_SELECTORS.taskInput)
const addButton = document.querySelector(HTML_ELEMENTS_SELECTORS.addButton)
const tasksContainer = document.querySelector(HTML_ELEMENTS_SELECTORS.tasksContainer)

// == 3. Define functions =========================================================
// .. Clear/Reset .................................................................
const cleanNodeChilds = (node) => {
  node.innerHTML = ''
}

const cleanInputValue = (inputNode) => {
  inputNode.value = ''
}

// .. Helpers .....................................................................
const generateRandomString = () => {
  return String(Math.random() * 1000000)
}

const generateCssInlineStyle = (property, value) => `${property}:${value}`

// -- Task - based functions ------------------------------------------------------
// .. Array manipulation ..........................................................
const addNewTask = (description, isCompleted = false) => {
  if (description === '') {
    alert('La tarea debe tener una descripción')
    return
  }
  tasks.push({ id: generateRandomString(), description, isCompleted })
}

const toggleCompleteTask = (taskId) => {
  const task = tasks.find(task => task.id === taskId)
  task.isCompleted = !task.isCompleted
}

const deleteTask = (taskId) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId)
  tasks.splice(taskIndex, 1)
}

// .. DOM manipulation ............................................................
const renderTasks = () => {
  cleanNodeChilds(tasksContainer)
  tasks.forEach(generateTaskElements)
}

const generateTaskElements = (task) => {
  const spanElement = generateSpanTaskElement(task)
  const completeButtonElement = generateCompleteButtonTaskElement(task)
  const deleteButtonElement = generateDeleteButtonTaskElement(task)

  // TODO: Create function for li
  const listItemElement = document.createElement(NODES_ELEMENTS.listItem)
  listItemElement.append(spanElement, completeButtonElement, deleteButtonElement)

  tasksContainer.append(listItemElement)
}

const generateSpanTaskElement = (task) => {
  const textDecoration = task.isCompleted ? TEXT_DECORATION_OPTIONS.lineThrough : TEXT_DECORATION_OPTIONS.none
  const spanElement = document.createElement(NODES_ELEMENTS.span)
  spanElement.textContent = task.description
  spanElement.style = generateCssInlineStyle(CSS_PROPERTIES.textDecoration, textDecoration)
  return spanElement
}

const generateCompleteButtonTaskElement = (task) => {
  const completeButtonElement = document.createElement(NODES_ELEMENTS.button)
  completeButtonElement.setAttribute(ATTRIBUTE_ID, task.id)
  completeButtonElement.textContent = task.isCompleted ? EMOJIS.circleRed : EMOJIS.circleWhite
  addEventListenerToButton(completeButtonElement, BUTTON_ACTIONS.complete)
  return completeButtonElement
}

const generateDeleteButtonTaskElement = (task) => {
  const deleteButtonElement = document.createElement(NODES_ELEMENTS.button)
  deleteButtonElement.textContent = EMOJIS.trash
  deleteButtonElement.setAttribute(ATTRIBUTE_ID, task.id)
  addEventListenerToButton(deleteButtonElement, BUTTON_ACTIONS.delete)
  return deleteButtonElement
}

// .. DOM handlers ................................................................
const handlerTaskButton = (event, action) => {
  const taskId = event.target.getAttribute(ATTRIBUTE_ID)
  if (action === BUTTON_ACTIONS.complete) toggleCompleteTask(taskId)
  if (action === BUTTON_ACTIONS.delete) deleteTask(taskId)
  renderTasks()
}

// == 4. Event listeners ==========================================================
taskInput.addEventListener(EVENT_LISTENER_TYPES.keydown, (event) => {
  if (event.key === KEYDOWN_KEYS.enter) {
    addNewTask(taskInput.value)
    renderTasks()
    cleanInputValue(taskInput)
  }
})

addButton.addEventListener(EVENT_LISTENER_TYPES.click, () => {
  addNewTask(taskInput.value)
  renderTasks()
  cleanInputValue(taskInput)
})

const addEventListenerToButton = (button, action) => {
  button.addEventListener(EVENT_LISTENER_TYPES.click, (event) => handlerTaskButton(event, action))
}
