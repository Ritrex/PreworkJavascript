// Rover Object Goes Here
// ======================
var rover1={
  nom: "rov1",
  orientacion: "n",
  x:Math.floor(Math.random() * 9),
  y:Math.floor(Math.random() * 9),
  recorrido:[]
}
//  Math.floor(Math.random() * 9); numero aleatorio entre 0 y 9
var mapa={
  tab:[]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.orientacion){
    case "n":
      rover.orientacion="e";
      break;
    case "s":
      rover.orientacion="o";
      break;
    case "o":
      rover.orientacion="n";
      break;
    case "e":
      rover.orientacion="s";
      break;
  }
  mapa.tab[rover.x][rover.y]=rover.orientacion;
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.orientacion){
    case "n":
      rover.orientacion="o";
      break;
    case "s":
      rover.orientacion="e";
      break;
    case "o":
      rover.orientacion="s";
      break;
    case "e":
      rover.orientacion="n";
      break;
  }
  mapa.tab[rover.x][rover.y]=rover.orientacion;
}

function moveForward(rover){
  console.log("moveForward was called")
  var r=rover
  mapa.tab[r.x][r.y]="X";
  
  switch(rover.orientacion){
    case "n":
      r.x++;
      break;
    case "s":
      r.x--;
      break;
    case "o":
      r.y++;
      break;
    case "e":
      r.y--;
      break;
  }
  console.log(r+"\n"+rover1)
  /*
  if(r.x>9||r.x<0||r.y>9||r.y<0||mapa.tab[r.x][r.y]==="0"){
    
    console.log("I'm fraid I can't do that Dave.")
  }
  */
  mapa.tab[r.x][r.y]=rover.orientacion;
}

function movackwards(rover){
  console.log("moveForward was called")
  switch(rover.orientacion){
    case "n":
      rover.position[0]--;
      break;
    case "s":
      rover.position[0]++;
      break;
    case "o":
      rover.position[1]--;
      break;
    case "e":
      rover.position[1]++;
      break;
  }
}

function iniciaTablero(){
  mapa.tab=[];
  for(var i = 0;i<10;i++){
    mapa.tab.push(["X","X","X","X","X","X","X","X","X","X"]);
    
  }
  mapa.tab[rover1.x][rover1.y]=rover1.orientacion;

}

function impTab(){
  var res="";
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      res+=mapa.tab[j][i];
    }
    res+="\n";
  }
  return res;
}

function procesaOrdenes(strin){
  while(strin!=""){
   var chr= strin.substring(0,1);
    strin=strin.slice(1,strin.length-1);
    switch(chr){
      case "l":
        turnLeft(rover1);
      break;
      case "r":
        turnRight(rover1);
      break;
      case "f":
        moveForward(rover1);
      break;
      case "b":
        //moveB
      break;
      default:
        //
        break;
    }
  }
}