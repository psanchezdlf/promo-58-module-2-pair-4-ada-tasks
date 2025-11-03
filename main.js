"use strict";

const task_list = document.querySelector(".js_task_list");

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

//const oneTask =  { name: "Poner una lavadora de blancos", completed: true, id: 3 };





for (const task of tasks) {
  // Creamos un <li> por cada tarea
  task_list.innerHTML += `<li class="task">
            <input type="checkbox" />
            <span>${task.name}</span>
          </li> `;
}



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