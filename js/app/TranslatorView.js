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
  };

  TranslatorView.prototype.bindEngishToZombieEvents = function() {
    var self = this;
    this.$englishToZombieBtn.on('click', function(e) { return self.zombify.call(self, [e]); });
    this.$english.on("keyup", function(e) { return self.zombify.call(self, [e]); }); 
  };

  TranslatorView.prototype.zombify = function(event) {
    var text = this.$english.val();
    this.$zombie.val(this.translator.zombify(text));
    return false;
  };

  TranslatorView.prototype.bindZombieToEnglishEvents = function() {
    var self = this;
    this.$zombieToEnglishBtn.on('click', function(e) { return self.unzombify.call(self, [e]) });
    this.$zombie.on('keyup', function(e) { return self.unzombify.call(self, [e]) });
  };

  TranslatorView.prototype.unzombify = function(event) {
    var text = this.$zombie.val();
    this.$english.val(this.translator.unzombify(text));
    return false;
  };

  return TranslatorView;
});