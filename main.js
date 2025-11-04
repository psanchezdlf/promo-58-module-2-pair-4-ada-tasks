"use strict";

//Buscamos la lista donde se pintan las tareas
const taskList = document.querySelector(".js_task_list");

// Creamos una variable vacía donde guardaremos las tareas
let tasks = [];

//Crea variables para almacenar la información del usuario de github y la url del endpoint
const GITHUB_USER = "psanchezdlf";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;


/*Array local: los datos estaban guardados en local y con fetch los pasamos a servidor
const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];
*/

//Crea una función para pintar la lista

function renderTasks() {
  // limpiar lista para no duplicar
  taskList.innerHTML = "";

  for (const task of tasks) {
    // Creamos un <li> por cada tarea y una clase para tachado
    taskList.innerHTML += `
       <li class="task ${task.completed ? "task_completed" : ""}">
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <span>${task.name}</span>
      </li>`;
  }
};

// Haz el fetch al servidor y guarda la respuesta en tasks
//    - Pedimos datos
//    - Los convertimos a JSON
//    - Guardamos los datos en la variable vacía que hemos creado 'tasks'


fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    // En este API, las tareas vienen en data.results
    tasks = data.results || [];
    renderTasks();               
  })

  //si algo falla (no hay internet, error 404, etc.) sale un mensajito
  .catch((err) => {
    console.error(err);
    //en lugar de la tarea sale un mensaje de error
    taskList.innerHTML = `<li class="task"><span>Error cargando tareas</span></li>`;
  });
  




/*<li class="task">
            <input type="checkbox" />
            <span>Recoger setas en el campo</span>
          </li>
          <li class="task">
            <input type="checkbox" />
            <span>Comprar pilas</span>
          </li>
          <li class="task">
            <input type="checkbox" />
            <span>Poner una lavadora de blancos</span>
          </li>
          <li class="task">
            <input type="checkbox" />
            <span>Aprender peticiones al servidor en JS</span>
          </li>
          <li class="task">
            <input type="checkbox" />
            <span>Ir al gimnasio</span>
          </li>
          <li class="task">
            <input type="checkbox" />
            <span>Comprar flores</span>
          </li> */