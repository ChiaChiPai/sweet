// like icon觸發效果
$(document).ready(function(){
    $('.item-icon').click(function(){
        $(this).find('.heart-border').toggleClass('d-none');
        $(this).find('.heart').toggleClass('d-none');
    });
});
//表單驗證
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();