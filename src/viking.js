//Las cuatro clases son Soldier, Viking, Saxon, war

// Iteración 0
/*Let's have a look at the first test case together to get you started.

The first test case says that "Soldier class >> should receive 2 arguments (health & strength)", so we have to write the correct code to pass this test. Let's make the Soldier class receive two arguments:*/

//Iteración 1
/*Modify the Soldier class and add 2 methods to it: attack(), and receiveDamage().

class
should receive 2 arguments (health & strength)
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument

attack() method
should be a function
should receive 0 arguments
should return the strength property of the Soldier

receiveDamage() method
should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
shouldn't return anything
*/


// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

//Metodo para el ataque del soldado
  attack(){
      return this.strength;
  }

// Resta el daño a la salud y no devuelve nada
  receiveDamage(damage){
    this.health -= damage;
  }
};

//Iteración 2
/*A Viking is a Soldier with an additional property, their name. They also have a different receiveDamage() method and a new method, battleCry().

Modify the Viking class, have it inherit from Soldier, re-implement the receiveDamage() method for Viking, and add a new battleCry() method.

inheritance
Viking should extend Soldier

class
should receive 3 arguments (name, health & strength)
    should receive the name property as its 1st argument
    should receive the health property as its 2nd argument
    should receive the strength property as its 3rd argument

    attack() method
(This method should be inherited from Soldier, no need to re-implement it.)

should be a function
    should receive 0 arguments
    should return the strength property of the Viking


    receiveDamage() method
This method needs to be re-implemented for Viking because the Viking version needs to have different return values.

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
if the Viking dies, it should return "NAME has died in act of combat"
battleCry() method
Learn more about battle cries.

should be a function
should receive 0 */

//Viking, que hereda de Soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength); // Llama al constructor de Soldier
      this.name = name; // Propiedad adicional
    }
  
    // Sobrescribimos el método receiveDamage
    receiveDamage(damage) {
      this.health -= damage; // Resta el daño a la salud
  
      // Retorna un mensaje específico para los Vikingos
      if (this.health > 0) {//si salud es más que 0
        return `${this.name} has received ${damage} points of damage`;//recibe x puntos de daño pero sigue vivo
      } else {
        return `${this.name} has died in act of combat`;//la palmó
      }
    }
    //Metodo heredado attack


    // Método battleCry
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  const viking1 = new Viking("Ragnar", 100, 20);
  // Llamamos al método heredado attack teniendo en cuenta el primer vikingo que se llama Ragnar, que tiene 100 de salud y recibe 20 de daño. 
  
  console.log(viking1.attack()); // Teniendo en cuenta su fuerza, console.log de vikingo1 devuelve 20 
  console.log(viking1.receiveDamage(30)); // Devuelve un mensaje de daño
  console.log(viking1.health); // Muestra la salud actual
  console.log(viking1.battleCry()); // Devuelve "Odin Owns You All!"
  
//Iteración 3

/*
A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name. Their receiveDamage() method will also be different than the original Soldier version.

Modify the Saxon, constructor function, have it inherit from Soldier and re-implement the receiveDamage() method for Saxon.

inheritance
Saxon should extend Soldier
class
You don't have to include a constructor method since this class will inherit perfectly from the parents class, both the health and the strength (it extends Soldier class 😉 )

attack() method
This method should be inherited from Soldier, no need to re-implement it.
should be a function
should receive 0 arguments
should return the strength property of the Saxon

receiveDamage() method
This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
if the Saxon dies, it should return "A Saxon has died in combat"*/

//Ahora se crea la clase Saxon, que es otra estirpe de guerreros 
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health >0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

const saxon = new Saxon(80, 15); // Crea un nuevo Saxon con 80 de salud y 15 de fuerza
console.log(saxon.receiveDamage(20)); // "A Saxon has received 20 points of damage"
console.log(saxon.health); // 60

console.log(saxon.receiveDamage(60)); // "A Saxon has died in combat"
console.log(saxon.health); // 0


//BONUS - Iteration 4: War
//Ahora hay que crear la clase war, que será un array y servirá para llevar la cuenta de la batalla entre los soldados y los vikingos


/*Now we get to the good stuff: WAR! Our War class will allow us to have a Viking army and a Saxon army that battle each other.

Modify the War class and add 5 methods to its class:

addViking()
addSaxon()
vikingAttack()
saxonAttack()
showStatus()
class
When we first create a War, the armies should be empty. We will add soldiers to the armies later.

should receive 0 arguments
should assign an empty array to the vikingArmy property
should assign an empty array to the saxonArmy property
addViking() method
Adds 1 Viking to the vikingArmy. If you want a 10 Viking army, you need to call this 10 times.

should be a function
should receive 1 argument (a Viking object)
should add the received Viking to the army
shouldn't return anything
addSaxon() method
The Saxon version of addViking().

should be a function
should receive 1 argument (a Saxon object)
should add the received Saxon to the army
shouldn't return anything
vikingAttack() method
A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.

should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead Saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking
saxonAttack() method
The Saxon version of vikingAttack(). A Viking receives damage equal to the strength of a Saxon.

should be a function
should receive 0 arguments
should make a Viking receiveDamage() equal to the strength of a Saxon
should remove dead Vikings from the army
should return result of calling receiveDamage() of a Viking with the strength of a Saxon*/



//BONUS - Iteration 5
/*
Since there is a lot of repetitive code in the previous two iterations, methods vikingAttack() and saxonAttack(), try to create one generic method and call it in the case of vikingAttack and in the case of saxonAttack instead of using almost the same code for both methods. (This iteration doesn't have the test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

showStatus() method
Returns the current status of the War based on the size of the armies.

should be a function
should receive 0 arguments
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
*/

