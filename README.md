# CloudComp_Cafeteria
Estaticos para el Pry de Cloud Computing

# Para iniciar:
1. Una vez clonado el proyecto, desde un terminal dentro de frontend ejecutar:
    npm install
2. Luego, modificar los siguientes archivos, con su correspondiente API URL:
  	src -> app -> pedido
  	   pedido.component.ts
  	src -> app -> service
  	   cafetería.services.ts
3. Para probar localmente, ejecute:
	  npm start

# Para este laboratorio (Cloud Computing):
4. Una vez validado, puede compilar los archivos con el comando:
	  ng build --configuration=production

5. Ello genera una carpeta dist, ahí el archivo index.html debe ser modificado para que todos los src y href direccionen al url del cloudfront .. seguido el nombre del archivo
6. Finalmente los compilados se cargan al bucket
