""" Configuracion de framework"""
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
        return render_template('index.html')

@app.route("/grafos")
def uno():
    return render_template ("grafos.html")

@app.route("/grafos2")
def dos():
    return render_template ("grafos2.html")

# Definimos el route con el método POST
@app.route('/grafo',methods=['POST'])
def grafo():
 # Obtenemos la información del parametro "nombreUser"
 # Esto lo hacemos con el diccionario "form"
    vertices = request.form['vertices']
 # Retornamos la respuesta
    return "<h1>Retornamos" + vertices + "</h1>"

def crearmatriz():
    Adyacencia=0
    for i in range(numero_filas):
        matriz.append([])
        for j in range(numero_columnas):
            print("incide el vertice[",i,"] con el","[",j,"]?")
            print("1:si      0:no")
            Adyacencia=int(input())
            if Adyacencia <=1:
                matriz[i].append(Adyacencia)
            else:
                matriz[i].append(0)

if __name__ == '__main__':
 # Iniciamos la apicación en modo debug
 app.run(debug=True)



