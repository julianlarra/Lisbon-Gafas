# Lisbon-Gafas
Para ejecutar este proyecto es necesario crear un entorno virtual e instalar las librerias que son utilizadas en los modulos.
Usar el siguiente comando en Windows para la creacion del entorno virtual:

virtualenv lisbon-venv

Comando para activar el entorno virtual: 

lisbon-venv\Scripts\activate  

Comando para instalar librerias:

 pip install flask flask-sqlalchemy flask-marshmallow marshmallow-sqlalchemy pymysql -U flask-cors

O en su defecto y mas recomendable, ejecute:

pip install -r requirements.txt

// Documento requirements.txt creado con la salida del comando pip freeze