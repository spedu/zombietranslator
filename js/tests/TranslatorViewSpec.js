define(['jquery', 'TranslatorView'], function($, TranslatorView) {
  var translatorView;

  describe('TranslatorView', function() {
    beforeEach(function() {
      translatorView = new TranslatorView({
        english: $('<textarea></textarea>'),
        englishToZombieBtn: $('<button></button>'),
        zombie: $('<textarea></textarea>'),
        zombieToEnglishBtn: $('<button></button>')
      });
    });

    describe('keyup on english input', function() {
      it('should output the translated text to the zombie textarea', function() {
        expect(translatorView.$zombie.val()).toBe('');

        translatorView.$english.val('Test');
        translatorView.$english.trigger('keyup');

        expect(translatorView.$zombie.val()).toBe('Trrst');
      });
    });

    describe('clicking the english to zombie button', function() {
      it('should output the translated text to the zombie textarea', function() {
        expect(translatorView.$zombie.val()).toBe('');

        translatorView.$english.val('Test');
        translatorView.$englishToZombieBtn.trigger('click');

        expect(translatorView.$zombie.val()).toBe('Trrst');
      });
    });
  });
});