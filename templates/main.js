var filas, dato, i, j, col, tabla, matriz;
    function crear()
    {
      vertices = document.getElementById("cant_vertices").value;
      matriz = new Array(vertices);
      filas=vertices;
      col=filas;

      for(i=0;i<filas;i++)
      {
        matriz[i]= new Array(filas);
        for(j=0;j<filas;j++){
          matriz[i][j]=prompt("DATO:");

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
