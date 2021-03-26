/*- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista */

var list = new Vue({
  el: "#list",
  data: {
    toDo: ["Fare la spesa", "Comprare il giornale", "Giocare a FIFA", "Dormire"],
    newItem: "",
  },
  methods: {
    deleteItem: function(index) {
      this.toDo.splice(index, 1);
    },
    addItem: function() {
      if (this.newItem != "") {
        this.toDo.push(this.newItem);
        this.newItem = "";
      }
    }
  }
});
