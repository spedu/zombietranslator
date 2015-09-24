define(['Translator'], function(Translator) {
  var translator;

  describe('Translator', function() {
    beforeEach(function() {
      translator = new Translator();
    });

    describe('zombify', function() {
      describe('rule 1', function() {
        describe('given a phrase ending with a lowercase `r`', function() {
          it('should be replaced with `rh`', function() {
            var text = 'Replacer';
            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toMatch(/rh$/);
          });
        });

        describe('given a phrase with a `r` on its own', function() {
          it('should be replaced with `rh`', function() {
            var text = 'c r c';
            expect(translator.zombify(text)).toBe('c rh c');
          });
        });
        
        describe('given a phrase with `r` not at the end of a word', function() {
          it('should ignore `r`s not at the end of words', function() {
            var text = 'crcr';
            expect(translator.zombify(text)).toBe('cRRcrh');
          });
        });
      });

      describe('rule 2', function() {
        describe('given a phrase with `a` by itself', function() {
          it('should be replaced with `hra`', function() {
            var text = 'a',
                expectedTranslatedText = 'hra';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe(expectedTranslatedText);
          });
        });
        
        describe('given a phrase with `A` by itself', function() {
          it('should be replaced with `hra`', function() {
            var text = 'A',
                expectedTranslatedText = 'hra';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe(expectedTranslatedText);
          });
        });
        
        describe('a phrase where `a` appears within a word', function() {
          it('should be replaced with `hra`', function() {
            var text = 'Cat',
                expectedTranslatedText = 'Chrat';

            var translatedText = translator.zombify(text);
            
            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toMatch(/hra/);
            expect(translatedText).toBe(expectedTranslatedText);    
          });
        });
        

        describe('a phrase where `A` appears within a word', function() {
          it('should be replaced with `hra`', function() {
            var text = 'CAt',
                expectedTranslatedText = 'Chrat';

            var translatedText = translator.zombify(text);
            
            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toMatch(/hra/);
            expect(translatedText).toBe(expectedTranslatedText); 
          });
        });
      });

      describe('rule 3', function() {
        describe('given a sentence where a phrase that ends with a `.` followed by a space before the next phrase', function() {
          it('should capitalize the second phrase', function() {
            var text = 'ct. ct';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).not.toBeUndefined();
            expect(translatedText).not.toBe('ct. ct');
            expect(translatedText).toEqual('ct. Ct');
          });
        });

        describe('given a sentence where a phrase that ends with a `!` followed by a space before the next phrase', function() {
          it('should capitalize the second phrase', function() {
            var text = 'ct! ct';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).not.toBeUndefined();
            expect(translatedText).not.toBe('ct! ct');
            expect(translatedText).toEqual('ct! Ct');
          });
        });

        describe('given a sentence where a phrase that ends with a `?` followed by a space before the next phrase', function() {
          it('should capitalize the second phrase', function() {
            var text = 'ct? ct';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).not.toBeUndefined();
            expect(translatedText).not.toBe('ct? ct');
            expect(translatedText).toEqual('ct? Ct');
          });
        });
      });

      describe('rule 4', function() {
        describe('given an `e` on its own', function() {
          it('should replace `e` with `rr`', function() {
            var text = 'e';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rr');
            expect(translatedText).toMatch(/^rr$/);
          });
        });

        describe('given a phrase with an `e` within a word', function() {
          it('should replace `e` with `rr`', function() {
            var text = 'Text';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('Trrxt');
            expect(translatedText).toMatch(/rr/);
          });
        });

        describe('given an `E` on its own', function() {
          it('should replace `E` with `rr`', function() {
            var text = 'E';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rr');
            expect(translatedText).toMatch(/^rr$/);
          });
        });
        
        describe('given a phrase with an `E` within a word', function() {
          it('should replace `E` with `rr`', function() {
            var text = 'Text';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('Trrxt');
            expect(translatedText).toMatch(/rr/);
          });
        });
      });

      describe('given a phrase with an `i` or `I`', function() {
        describe('given a phrase that contains `i` by itself', function() {
          it('should replace the `i` with `rrRr', function() {
            var text = 'i';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrRr');
            expect(translatedText).toMatch(/^rrRr$/);
          });
        });

        describe('given a phrase that contains an `i`', function() {
          it('should replace `i` with `rrRr`', function() {
            var text = 'bits';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('brrRrts');
            expect(translatedText).toMatch(/rrRr/);
          });
        });

        describe('given a phrase that contains `I` by itself', function() {
          it('should replace the `I` with `rrRr', function() {
            var text = 'I';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrRr');
            expect(translatedText).toMatch(/^rrRr$/);
          });
        });

        describe('given a phrase that contains an `I`', function() {
          it('should replace `I` with `rrRr`', function() {
            var text = 'bIts';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('brrRrts');
            expect(translatedText).toMatch(/rrRr/);
          });
        });        
      });

      describe('rule 6', function() {
        describe('given a word that just contains `o`', function() {
          it('should replace the `o` with rrrRr', function() {
            var text = 'o';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrrRr');
            expect(translatedText).toMatch(/^rrrRr$/);
          });
        });

        describe('given a word that contains an `o`', function() {
          it('should replace `o` with `rrrRr`', function() {
            var text = 'bots';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('brrrRrts');
            expect(translatedText).toMatch(/rrrRr/);
          });
        });

        describe('given a word that just contains `O`', function() {
          it('should replace the `O` with rrrRr', function() {
            var text = 'O';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrrRr');
            expect(translatedText).toMatch(/^rrrRr$/);
          });
        });

        describe('given a word that contains an `O`', function() {
          it('should replace `O` with `rrrRr`', function() {
            var text = 'bOts';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('brrrRrts');
            expect(translatedText).toMatch(/rrrRr/);
          });
        });
      });

      describe('rule 7', function() {
        describe('given a word that just contains `u`', function() {
          it('should replace the `u` with rrrrRr', function() {
            var text = 'u';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrrrRr');
            expect(translatedText).toMatch(/^rrrrRr$/);
          });
        });

        describe('given a word that contains `u`', function() {
          it('should replace `u` with `rrrrRr`', function() {
            var text = 'cuts';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('crrrrRrts');
            expect(translatedText).toMatch(/rrrrRr/);
          });
        });

        describe('given a word that just contains `U`', function() {
          it('should replace the `U` with rrrrRr', function() {
            var text = 'U';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('rrrrRr');
            expect(translatedText).toMatch(/^rrrrRr$/);
          });
        });
        
        describe('given a word that contains `U`', function() {
          it('should replace `U` with `rrrrRr`', function() {
            var text = 'cUts';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('crrrrRrts');
            expect(translatedText).toMatch(/rrrrRr/);
          });
        });
      });
      
      describe('rule 8', function() {
        
      });

      describe('rule 9', function() {

      });

      describe('rule 10', function() {

      });
    });
  });
});