var socket = io();

//Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al Servidor');
})
socket.on('disconnect', function() {
    console.log('Desconectado del Servidor');
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'jorge',
    mensaje: 'hola mundo'
}, function(res) {
    console.log(res);
})

//Recibir información
socket.on('enviarMensaje', function(mensaje) {

    console.log(mensaje);
})