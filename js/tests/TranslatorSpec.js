define(['Translator'], function(Translator) {
  var translator;

  describe('Translator', function() {
    beforeEach(function() {
      translator = new Translator();
    });

    describe('zombify', function() {

      describe('given a phrase with lowercase `r`s at the end of words', function() {
        it('should be replaced with `rh`', function() {
          var text = 'Replacer';
          var translatedText = translator.zombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toMatch(/rh$/);
        });

        it('should replace `r`s on their own with `rh`', function() {
          var text = 'c r c';
          expect(translator.zombify(text)).toBe('c rh c');
        });

        it('should ignore `r`s not at the end of words', function() {
          var text = 'crcr';
          expect(translator.zombify(text)).toBe('cRRcrh');
        });
      });

      describe('given a phrase when `a` or `A` exists', function() {
        it('should replace `a` by itself with `hra`', function() {
          var text = 'a',
              expectedTranslatedText = 'hra';

          var translatedText = translator.zombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe(expectedTranslatedText);
        });

        it('should replace `A` by itself with `hra`', function() {
          var text = 'A',
              expectedTranslatedText = 'hra';

          var translatedText = translator.zombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe(expectedTranslatedText);
        });

        it('should replace `a` within a word with `hra`', function() {
          var text = 'Cat',
              expectedTranslatedText = 'Chrat';

          var translatedText = translator.zombify(text);
          
          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toMatch(/hra/);
          expect(translatedText).toBe(expectedTranslatedText);    
        });

        it('should replace `A` within a word with `hra`', function() {
          var text = 'CAt',
              expectedTranslatedText = 'Chrat';

          var translatedText = translator.zombify(text);
          
          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toMatch(/hra/);
          expect(translatedText).toBe(expectedTranslatedText); 
        });
      });

      
    });
  });
});