# Prueba técnica Claro Video

El objetivo de la prueba es crear un componente en react que contendrá la programación de
una lista de canales (epg) a lo largo del día. El componente deberá estar limitado por el
espacio disponible en el navegador pero mantener la posibilidad de ver cualquier horario de
cualquier canal mediante scroll horizontal y vertical. Al hacer hover sobre cualquier
programa se deberá mostrar el título de dicho programa y la información que se tenga sobre
el mismo en la parte superior de la pantalla. Deben existir marcas sobre el componente que
indiquen en qué horario se transmitirá cada programa, estas marcas deben cambiar cuando
se haga scroll horizontal pero deben permanecer fijas ante el scroll vertical.
El componente debe también tener un botón cerrar (X) en la esquina superior derecha.

Se debe considerar la performance del componente, tiempos de carga y responsividad al
hacer scroll.
La aplicación debe iniciar como una pantalla en blanco con un botón “Mostrar EPG”. Al
hacer click sobre el botón se deberá mostrar el componente creado en forma de modal
sobre dicha página en blanco. Al hacer click sobre el botón cerrar del componente se debe
cerrar el modal y regresar a la vista con el botón “Mostrar EPG”.

## Especificación técnica

El desarrollo de esta aplicación se basa en las siguientes tecnologías:

- React
- TypeScript
- Vite

Para el correcto funcionamiento es necesario configurar una variable de entorno en el archivo .env

```js
VITE_CLARO_URL=""
```

Es el archivo que contiene información sensible
