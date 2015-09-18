define(['jquery', 'Translator'], function($, Translator) {
  var TranslatorView = function(config) {
    this.config = config || {};

    this.$englishToZombieBtn = this.config.englishToZombieBtn || $('#english-to-zombie-btn');
    this.$english = this.config.english || $('#english');

    this.$zombieToEnglishBtn = this.config.zombieToEnglishBtn || $('#zombie-to-english-btn');
    this.$zombie = this.config.zombie || $('#zombie');

    this.translator = new Translator();
    this.bindEngishToZombieEvents();
    this.bindZombieToEnglishEvents();
  }

  TranslatorView.prototype.bindEngishToZombieEvents = function() {
    this.$englishToZombieBtn.on('click', this.zombify.bind(this));
    this.$english.on("keyup", this.zombify.bind(this));
  };

  TranslatorView.prototype.zombify = function(event) {
    var text = this.$english.val();
    this.$zombie.val(this.translator.zombify(text));
    return false;
  };

  TranslatorView.prototype.bindZombieToEnglishEvents = function() {
    this.$zombieToEnglishBtn.on('click', this.unzombify.bind(this));
    this.$zombie.on('keyup', this.unzombify.bind(this));
  };

  TranslatorView.prototype.unzombify = function(event) {
    var text = this.$zombie.val();
    this.$english.val(this.translator.unzombify(text));
    return false;
  };

  return TranslatorView;
});