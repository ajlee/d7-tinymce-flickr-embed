(function($) {
  tinymce.create('tinymce.plugins.flickr_embed', {
    /**
     * Initialize the plugin, executed after the plugin has been created.
     *
     * This call is done before the editor instance has finished it's
     * initialization so use the onInit event of the editor instance to
     * intercept that event.
     *
     * @param ed
     *   The tinymce.Editor instance the plugin is initialized in.
     * @param url
     *   The absolute URL of the plugin location.
     */
    init : function(ed, url) {
      // Register the wysiwygH2Plugin execCommand.
      ed.addCommand('flickr_embed', function() {
        ed.windowManager.open({
          file : Drupal.settings.basePath + 'flickr_embed/wysiwyg',
          width : 640,
          height : 320,
          inline : 1,
          scrollbars : 1
        });
      });

      // Register button.
      ed.addButton('flickr_embed', {
        title : 'Flickr Embed Filter',
        cmd : 'flickr_embed',
        image : url + '/img/flickr.png'
      });
    },

    /**
     * Return information about the plugin as a name/value array.
     */
    getInfo : function() {
      return {
        longname : 'Simple Flickr Embed Plugin',
        author : 'Alex Lee',
        authorurl : '',
        infourl : 'http://github.com/ajlee/d7-tinymce-flickr-embed',
        version : "0.1"
      };
    }
  });

  // Register plugin.
  tinymce.PluginManager.add('flickr_embed', tinymce.plugins.flickr_embed);
})(jQuery);

