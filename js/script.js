/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!
*/
  
const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        {
          text: "Finire l'esercizio del giorno",
          done: false,
        }, {
          text: 'Preparare il pranzo',
          done: false,
        }, {
          text: 'Andare in palestra',
          done: false,
        }, {
          text: 'Buttare la spazzatura',
          done: false,
        }, {
          text: 'Fare la lavatrice',
          done: false,
        }, {
          text: 'Idratarsi',
          done: false,
        }
      ],

      donestyle:
        {
          textDecoration: "line-through",
          color: "red",
        },

      notdonestyle: 
        {
          // color: "green",
        },

        newTodo: {
          text: "",
          done: false,
        },

    }
  },

  methods: {

    deleteTodo(toDoIndex) {

      this.todos.splice(toDoIndex, 1);
      // console.log(toDoIndex);

    },

    addTodo() {

      // creo una variabile così che i nuovi todo inseriti nell'array non vengano sovrascritti al variare di newTodo
      this.createTodo = this.newTodo;

      this.todos.push(this.createTodo);

      this.newTodo = {
        text: "",
        done: false,
      };
      // console.log(this.newTodo);
    },

    toggleDone(toDoIndex) {


     if (this.todos[toDoIndex].done == false) {
        this.todos[toDoIndex].done = true;
        console.log(this.todos[toDoIndex].done);
      } else if (this.todos[toDoIndex].done == true) {
        this.todos[toDoIndex].done = false;
        console.log(this.todos[toDoIndex].done);
      };
    },
  },


}).mount('#app')

