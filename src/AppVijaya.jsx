import {useState} from 'react';
import Header from './components/Header'
import './AppVijaya.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {
  <Header/>
    // Tasks (TODO List) 
    const [toDo, setToDo] = useState([
      {"id":1, "title": "Task1", "status":false},
      {"id":2, "title": "Task2", "status":false}
      ]);

    // Temp State
      const [newTask, setNewTask] = useState('');
      const [updateData, setUpdateData] = useState('');
  
    // Add task 
    const addTask = () => {
      if(newTask) {
        let num = toDo.length + 1; 
        let newEntry = { id: num, title: newTask, status: false }
        setToDo([...toDo, newEntry])
        setNewTask('');
      }

    //   //Delete Task
    //   const deleteTask = (id) => {
       
    //   }
    //   //Mark done as completed
    //   const markDone = (id) => {
        
    //   }
    //    //Cancel update
    //    const cancelUpdate = () => {

    //    }
    //  //change task for update
    //   const changeTask = (e) => {
    //     }

    //  //Update Task
    //     const updateTask = (e) => {
        
    //     }
      
    }


  return (
    <div className="container App">
         <br /> <br />
         <h2> To Do List App (ReactJS)</h2>
         <br /> <br />

            {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}
    {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
          .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
             <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                 <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                 </div>
                 <div className="iconsWrap">
                <span title="Completed / Not Completed">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span title="Completed / Not Completed">
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span title="Completed / Not Completed">
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
                </div>
             </div>
          </React.Fragment>
        )
          })
        }
  
    </div>
  )
}

export default App
