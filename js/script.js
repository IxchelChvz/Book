document.addEventListener('DOMContentLoaded', function () {

  const pageFlip = new St.PageFlip(
    document.querySelector('.book'),
    {
      width: 450,         
      height: 600,        
      size: "fixed",      
      minWidth: 300,
      maxWidth: 1000,
      minHeight: 400,
      maxHeight: 1200,
      maxShadowOpacity: 1,
      showCover: true,
      autoSize: true   
    }
  );

  pageFlip.loadFromHTML(document.querySelectorAll('.book-page'));

});