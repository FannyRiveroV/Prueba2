var filas, dato, i, j, col, tabla, matriz;
var nodes= [ ];
var edges= [ ];
    function crear()
    
      vertices = document.getElementById("cant_vertices");
      matriz = new Array(vertices);
      filas=vertices;
      col=filas;

      for(i=0;i<filas;i++)
      {
        matriz[i]= new Array(filas);
        nodes.push(i)
        for(j=0;j<filas;j++){
          matriz[i][j]=prompt("DATO:");
          if(matriz[i][j]==1){
            edges.push({from: i, to: j})

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
      console.log(nodes)  
      }  

    }    
    function grafica()
    {
      var len = undefined;
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var network = new vis.Network(container, data);
    }

 