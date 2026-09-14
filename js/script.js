document.addEventListener('DOMContentLoaded', function () {

  // 1. Instanciar la librería indicando el elemento contenedor (#mi-libro)
  const pageFlip = new St.PageFlip(
    document.querySelector('.book'),
    {
      width: 350,          // Ancho de CADA página en píxeles
      height: 500,         // Alto de CADA página en píxeles
      size: "fixed",       // Mantiene el tamaño fijo
      minWidth: 300,
      maxWidth: 1000,
      minHeight: 400,
      maxHeight: 1200,
      maxShadowOpacity: 0.5, // Intensa sombra en el pliegue
      showCover: true,
      autoSize: true   // La 1ª página actúa como portada
    }
  );

  // 2. Cargar las páginas desde el HTML leyendo todos los elementos con la clase .pagina
  pageFlip.loadFromHTML(document.querySelectorAll('.book-page'));

});