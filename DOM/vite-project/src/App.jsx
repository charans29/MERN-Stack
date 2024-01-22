import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


const TodoApp = () => {
    let globalId = 1;
    let todoState = [];
    let oldTodoState = [];

    function clearTodo(idxid){                                                                      //REMOVES DONE TODOS FROM DOM
      console.log(`oldtod_length: ${oldTodoState.length}`);                                                       
      let i=0, index;
      while(i<oldTodoState.length){
        if(idxid == oldTodoState[i].id){
          index = i;
          break;
        }
        i++;
      }
      //let index = oldTodoState.findIndex(todo => idxid === todo.id);    <-------------- GETTIN ERROR: reeciving -1 as index of todo
      removeTodoFromDom(oldTodoState[index]);
      oldTodoState.splice(index,1);      
    }

    function makeDone(id){
      const tag = document.getElementById(id);
      tag.children[2].innerHTML = "Done..!";
      setTimeout(() => clearTodo(id), 1000);
    }

    function createChild() {
      const Parent = document.createElement("div");
      const child1 = document.createElement("div");
      child1.innerHTML = todoState.slice(-1)[0].title;
      const child2 = document.createElement("div");
      child2.innerHTML = todoState.slice(-1)[0].description;
      const child3 = document.createElement("button");
      child3.innerHTML = "Mark Done";
      child3.addEventListener("click", (e) => makeDone(e.target.parentNode.id));
      Parent.appendChild(child1);
      Parent.appendChild(child2);
      Parent.appendChild(child3);
      Parent.setAttribute("id", todoState.slice(-1)[0].id);
      return Parent;
    }

    function addTodoToDom() {      
      document.getElementById("todos").appendChild(createChild());
      //console.log(`final oldtodostate: ${oldTodoState.length} & latest todostate's: ${todoState.length}`);
      todoState = [];
    }


    function removeTodoFromDom(todo) {
      const element = document.getElementById(todo.id);
      element.parentNode.removeChild(element);
    }

    function updateTodoInDom(oldTodo, newTodo) {
      const element = document.getElementById(oldTodo.id);  
      element.childNodes[1].innerHTML = newTodo.description;
      todoState = [];       
    }

    function updateState(newTodos) {                  

      //console.log(`initial oldtodostate: ${oldTodoState.length}`);

      const added = newTodos.filter(newTodo =>                            //ADDS UNIQUE TITLE AND DESCRIPTION
              !oldTodoState.some(oldTodo => 
              oldTodo.title === newTodo.title || oldTodo.description === newTodo.description));

      if(added.length)
         console.log(`added: ${added.length}`)
      
      added.forEach(todo => {
            addTodoToDom();
            oldTodoState.push(todo);
                
      });

      const deleted = oldTodoState.filter(oldTodo =>                     //DELETES UNIQUE TITLE with SAME DESCRIPTION
                      newTodos.some(newTodo => 
                      newTodo.title !== oldTodo.title && newTodo.description === oldTodo.description));
      
      if(deleted.length)
      console.log(`Deleted: ${deleted.length}`);

      deleted.forEach(oldTodo => {
              const index = oldTodoState.findIndex(todo => oldTodo.id === todo.id);
              if(index > -1) {
                  //console.log(`old: ${oldTodoState[index].title}, ${oldTodoState[index].description} to new: ${newTodos.slice(-1)[0].title}, ${newTodos.slice(-1)[0].description}`);
                  oldTodoState[index] = newTodos.slice(-1)[0];
                  removeTodoFromDom(oldTodo);
                  addTodoToDom();
                }
      });

      const updated = newTodos.filter(newTodo =>                          //UPDATES SAME TITLE WITH UNIQUE DESCRIPTION  
                      oldTodoState.some(oldTodo => 
                      newTodo.title === oldTodo.title && newTodo.description !== oldTodo.description));

      if(updated.length)
      console.log(`updated: ${updated.length}`);

      updated.forEach(newTodo => {
              const index = oldTodoState.findIndex(oldTodo => oldTodo.title === newTodo.title);
              if(index > -1){
                 updateTodoInDom(oldTodoState[index], newTodo);
                 oldTodoState[index].description = newTodos.slice(-1)[0].description;
                }
      });
            
    }

    function addTodo() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      todoState.push({
        title: title,
        description: description,
        id: globalId++,
      })
      updateState(todoState);
    }


  return (
    <div>
      <input type="text" id="title" placeholder="Todo title" />
      <br />
      <br />
      <input type="text" id="description" placeholder="Todo description" />
      <br />
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      <br />
      <div id="todos"></div>
    </div>
  );
};

export default TodoApp;

