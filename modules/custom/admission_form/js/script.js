(function($, Drupal, drupalSettings) {

 $('input[type="file"]').each(function(idx, item) {
   $(item).attr('accept', 'image/*;capture=camera');
});
//console.log("asd");
 /**
   * Add new custom command.
   */
 

})(jQuery, Drupal, drupalSettings);