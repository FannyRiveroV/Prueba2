var filas, dato, i, j, col, tabla, matriz;
var aux;
let inicio=0;
let ini;
let llega;




function crear()
{
  vertices = document.getElementById("cant_vertices").value;
  matriz=new Array(vertices);
  filas=vertices;
  col=filas;
  for(i=0;i<filas;i++)
  {
    matriz[i]= new Array(filas);
    for(j=0;j<filas;j++)
    {
      aux=prompt("Es adyavente el vertice["+i+"] con "+"["+j+"]   (1:sí  0:no  /por defecto=0):");
      if (aux<=1)
      {
       matriz[i][j]=aux;
      }
     else{
       alert("ingrese un 1 o 0");
       matriz[i][j]=0;
     }
    }
  }
}


function imprimirMatriz()
{
  for(i=0;i<filas;i++){
    for(j=0;j<filas;j++){
      document.getElementById("matriz").innerHTML += matriz[i][j]+" ";
    }
    document.getElementById("matriz").innerHTML +="<br>";  
  }
}         


function conexo()
{
    let inicio=0;
    const final=vertices;
    let aux=0;
    while (inicio <=final-1 )
    {
      for(i=0;i<final;i++)
      {
        for(j=0;i<final;i++)
        {
          if(i!=j)
          {
            if(matriz[i][j]!=1)
            {
              aux=1;
            }
          }
        }
      }
      inicio+=1;
    }
    if(aux==0)
      console.log("es conexo");
    else
      console.log("no es conexo");

}


function caminos(ini,lleg)
{
  console.log("empiezo mi ruta en "+ini);
    if ( matriz[ini][lleg] == 1 )
    {
        console.log("finalmente he llegado a " + lleg);
        return 1;
    }
    else
    {
        if ( matriz[ini+1][lleg] == 1 )
          {
            console.log("pasé por el vertice "+ (ini+1));
            return (caminos(ini+1,lleg) + 1);
          }
        else{
            return caminos(inicio, lleg-1);
        }
    }
}


function muestraCaminos()

{
  var partede=0;
  var llegaA=0;
  var aux_p=0;
  var aux_ll=0;

  partede= document.getElementById('inicioCaminos').value;
  llegaA = document.getElementById('llegadaCaminos').value;

  for(i=0;i<partede;i++)
  {
    aux_p = aux_p +1;

  }
  for(j=0;j<llegaA;j++)
  {
    aux_ll = aux_ll +1;

  }

  let cami= caminos(aux_p,aux_ll);
  console.log("cantidad de nodos por lo que pasa: " + cami);

}