// Jquery method to replace attributes if it's empty or null
$('img').each(function(){
 var alt = this.getAttribute('alt');
 if (alt === null) {
   alert('null, the "alt" atribute do not exists')
  } else if (alt === '') {
   alert('empty') // or
   // $("img").attr("src","default-picture.png");
  }
});
