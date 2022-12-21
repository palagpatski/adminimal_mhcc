(function($, Drupal) {
  /**
   * Relocate Role Expire fields
   */
  Drupal.behaviors.roleFieldsRelo = {
    attach: function(context, settings) {
      $('[class*="form-item-roles"]').each(function() {
        $(this).next('[class*="form-item-role-expire"]').appendTo($(this));
      });
      if (!$('#edit-roles--wrapper, #edit-status--wrapper').length) {
        $('#status-and-roles').hide();
      } else {
        $(once('moved', '#edit-status--wrapper', context)).appendTo('#status-and-roles > .fieldset-wrapper');
        $(once('moved', '#edit-roles--wrapper', context)).appendTo('#status-and-roles > .fieldset-wrapper');
      }
    }
  }; 

})(jQuery, Drupal);
