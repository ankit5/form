(function($, Drupal, drupalSettings) {

  "use strict";  
//$('input[name="field_a_photo_0_remove_button"]').val('X');
 $(document).ready(function() {
        $("#edit-field-a-photo-0-upload").click(function() {
          var fd = new FormData();
          var files = $('#edit-field-a-photo-0-upload')[0].files[0];
          if (files) {
            alert("No files");
            return;
          }
          });
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