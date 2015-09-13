define(['jquery', 'Translator'], function($, Translator) {
  var TranslatorView = function() {
    this.translator = new Translator();
    this.bindEngishToZombieEvents();
    this.bindZombieToEnglishEvents();
  }

  TranslatorView.prototype.bindEngishToZombieEvents = function() {
    $('#english-to-zombie-btn').on('click', this.zombify.bind(this));
    $('#english').on("keyup", this.zombify.bind(this));
  };

  TranslatorView.prototype.zombify = function(event) {
    var text = $('#english').val();
    $('#zombie').val(this.translator.zombify(text));
    return false;
  };

  TranslatorView.prototype.bindZombieToEnglishEvents = function() {
    $('#zombie-to-english-btn').on('click', this.unzombify.bind(this));
    $('#zombie').on('keyup', this.unzombify.bind(this));
  };

  TranslatorView.prototype.unzombify = function(event) {
    var text = $('#zombie').val();
    $('#english').val(this.translator.unzombify(text));
    return false;
  };

  return TranslatorView;
});