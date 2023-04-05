(function($, Drupal, drupalSettings) {

 $('input[type="file"]').each(function(idx, item) {
   $(item).attr('accept', 'image/*;capture=camera');
});
//console.log("asd");
 /**
   * Add new custom command.
   */
 Drupal.AjaxCommands.prototype.triggerManagedFileUploadComplete = function (ajax, response, status) {
    var files = response.files;

    // Do stuff here after file upload is complete.
    console.log(files.file_id);
    console.log(files.file_path);
    console.log(files.file_name);
  };

})(jQuery, Drupal, drupalSettings);