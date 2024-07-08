const inputTask = document.querySelector("#input_task");
const buttonAdd = document.querySelector("#button_add");
const totalTask = document.querySelector("#total_task");
const totalExec = document.querySelector("#total_exec");
const tableList = document.querySelector("#table_list");

let maxId = 3;

const listTareas = [
    {id: 1,
     nombre: "Crear Tarea 1",
     exec: true,
    },
    {id: 2,
     nombre: "Crear Tarea 2",
     exec: false,
    },
    {id: 3,
     nombre: "Crear Tarea 3",
     exec: false,
    }
    
];


const mostrarTable = function () {
    let linCont = 0;
    let html = "";
    //alert("entro en la funcion");
    for (const task of listTareas) {
        //alert(task.exec);
        //alert(linCont);
        html += `
            <tr>
                <td><span style="color:black">${task.id}</span> </td>
                <td><span style="color:black">${task.nombre}</span> </td>
        `;
        if (task.exec) {
            linCont = linCont + 1;
            html += `
                <td><input checked disabled type="checkbox"></td>
            `;
        }else {
            html += `
                <td><input onclick="markTaskExec(${task.id})" type="checkbox"></td>
            `;
        }
        html += `
            <td><button class="buttonErase" onclick="eraseTask(${task.id})"><strong><i class="fa-solid fa-eraser"></i></strong> </button></td>
        </tr> 
    `;
    }
    tableList.innerHTML = ` 
    <thead>
        <tr>
            <td><strong>ID</strong></td>
            <td><strong>Tarea</strong></td>
        </tr>
    </thead>
    <tbody>
    ${html}
    </tbody>
    `;
    totalTask.innerHTML = listTareas.length;
    totalExec.innerHTML = linCont;
  };

  function buscaMaximo() {
    maxId = maxId +1;
    return maxId;
  }

  function markTaskExec(id){
    const index = listTareas.findIndex((n) => n.id === id);
    listTareas[index].exec = true;
    mostrarTable();
  }

  function eraseTask(id){
    const index = listTareas.findIndex((n) => n.id === id);
    listTareas.splice(index, 1);
    mostrarTable();
  }

  buttonAdd.addEventListener("click", () => {
    if (inputTask.value != ""){
        const newTask = {
            id: buscaMaximo(),
            nombre: inputTask.value,
            confirmado: false,
          };
          listTareas.push(newTask);
          inputTask.value = "";
          
    }
    mostrarTable();
  });

  mostrarTable();