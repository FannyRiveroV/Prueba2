var filas, dato, i, j, col, tabla, matriz;
var aux;
let inicio;

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
          document.getElementById("matriz").innerHTML +="Elemento ["+ i +"] ["+j+"] " + matriz[i][j]+"<br>";
        }
        
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



