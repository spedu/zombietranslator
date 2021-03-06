define(['Translator'], function(Translator) {
  var translator;

  describe('Translator', function() {
    beforeEach(function() {
      translator = new Translator();
    });

    describe('zombify', function() {
      it('should translate english to zombie', function() {
        expect(translator.zombify('something')).not.toBeUndefined();
        expect(translator.zombify('Terror')).toEqual('TrrRRRRrrrRrrh');
        expect(translator.zombify('JaZahn')).toBe('JhraZhrahn');
        expect(translator.zombify('petty')).toBe('prrtty');
        expect(translator.zombify('pretty')).toMatch('pRRrrtty');
        expect(translator.zombify('brains')).toBe('bRRhrarrRrns');
        expect(translator.zombify('onomatopoeia')).toEqual('rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra');
        expect(translator.zombify('Testing my brains out! does it work?')).toEqual('TrrstrrRrng my bRRhrarrRrns rrrRrrrrrRrt! DrrrRrrrs rrRrt wrrrRrRRk?')
        expect(translator.zombify('testing my brains out! really? does it work?')).toBe('trrstrrRrng my bRRhrarrRrns rrrRrrrrrRrt! RRrrhrally? DrrrRrrrs rrRrt wrrrRrRRk?')
      });

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
            expect(translatedText).toMatch(/hra/);
          });
        });
        
        describe('given a phrase with `A` by itself', function() {
          it('should be replaced with `hra`', function() {
            var text = 'A',
                expectedTranslatedText = 'hra';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe(expectedTranslatedText);
            expect(translatedText).toMatch(/hra/);
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
        describe('given a word that contains `r`', function() {
          it('should replace `r` with `RR`', function() {
            var text = 'Brass';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('BRRhrass');
            expect(translatedText).toMatch(/RR/);
          });

          it('should respect word boundaries of the `rh` rule', function() {
            var text = 'Tester! tester';

            var translatedText = translator.zombify(text);

            expect(translatedText).toBe('Trrstrrrh! Trrstrrrh');
          });
        });

        describe('given a word that just contains `R`', function() {
          it('should replace the `R` with `RR`', function() {
            var text = 'R';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('RR');
            expect(translatedText).toMatch(/^RR$/);
          });
        });

        describe('given a word that contains `R`', function() {
          it('should replace `R` with `RR`', function() {
            var text = 'BRass';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('BRRhrass');
            expect(translatedText).toMatch(/RR/);
          });
        });
      });

      describe('rule 9', function() {
        describe('given a word that just contains `g`', function() {
          it('should be replaced by `LLL`', function() {
            var text = 'g';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('LLL');
            expect(translatedText).toMatch(/^LLL$/);
          });
        });

        describe('given a word that begins with `g`', function() {
          it('should be replaced with `LLL`', function() {
            var text = 'great';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('LLLRRrrhrat');
            expect(translatedText).toMatch(/^LLL/);
          });
        });

        describe('given a word that contains `g` but is not at the beginning', function() {
          it('should not be replaced with `LLL`', function() {
            var text = 'agree';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toBe('hragRRrrrr');
            expect(translatedText).not.toMatch(/^LLL/);
          });
        });

        describe('given a word that just contains `G`', function() {
          it('should be replaced by `LLL`', function() {
            var text = 'G';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('LLL');
            expect(translatedText).toMatch(/^LLL$/);
          });
        });

        describe('given a word that begins with `G`', function() {
          it('should be replaced with `LLL`', function() {
            var text = 'Great';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toEqual('LLLRRrrhrat');
            expect(translatedText).toMatch(/^LLL/);
          });
        });

        describe('given a word that contains `G` but is not at the beginning', function() {
          it('should not be replaced with `LLL`', function() {
            var text = 'aGree';

            var translatedText = translator.zombify(text);

            expect(translatedText).not.toBeNull();
            expect(translatedText).toBe('hraGRRrrrr');
            expect(translatedText).not.toMatch(/^LLL/);
          });
        });
      });

      describe('rule 10', function() {
        it('should apply capitalization rule first, then apply other rules', function() {
          var text = 'this. test! rules?'

          var translatedText = translator.zombify(text);

          expect(translatedText).not.toBeNull();
          expect(translatedText).toBe('thrrRrs. Trrst! RRrrrrRrlrrs?');
          expect(translatedText).toMatch(/\bRR/);
        });
      });
    });
  });

  describe('unzombify', function() {
    it('should translate zombie to english', function() {
      expect(translator.unzombify('TrrRRRRrrrRrrh')).toBe('Terror');
      expect(translator.unzombify('JhraZhrahn')).toBe('JaZahn');
      expect(translator.unzombify('prrtty')).toBe('petty');
      expect(translator.unzombify('pRRrrtty')).toBe('pretty');
      expect(translator.unzombify('bRRhrarrRrns')).toBe('brains');
    });

    describe('rule 1', function() {
      describe('given a phrase with words that end in `rh`', function() {
        it('should translate back to `r`', function() {
          var text = 'Trrstrrrh';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toMatch(/r$/);
          expect(translatedText).toBe('Tester');
        });
      });
    });

    describe('rule 2', function() {
      describe('given a phrase that just contains `hra`', function() {
        it('should translate back to `a`', function() {
          var text = 'hra';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined()
          expect(translatedText).not.toBeNull();
          expect(translatedText).toEqual('a');
        });
      });

      describe('given a word that contains `hra`', function() {
        it('should translate back to `a`', function() {
          var text = 'Chrat';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toEqual('Cat');
          expect(translatedText).toMatch(/a/);
        });
      });
    });

    describe('rule 3', function() {
      describe('given a character followed by a `.`', function() {
        describe('when it is a translated character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst. LLLRRrrhrat';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test. Great');
          });
        });

        describe('when it is a non-translatable character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst. trrst';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test. Test');
          });
        });
      });

      describe('given a character followed by a `!`', function() {
        describe('when it is a translated character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst! LLLRRrrhrat';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test! Great');
          });
        });

        describe('when it is a non-translatable character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst! trrst';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test! Test');
          });
        });
      });

      describe('given a character followed by a `?`', function() {
        describe('when it is a translated character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst? LLLRRrrhrat';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test? Great');
          });
        });

        describe('when it is a non-translatable character', function() {
          it('should capitalize that character', function() {
            var text = 'Trrst? trrst';

            var translatedText = translator.unzombify(text);

            expect(translatedText).not.toBeUndefined();
            expect(translatedText).toBe('Test? Test');
          });
        });
      });
    });

    describe('rule 4', function() {
      describe('when `rr` is on its own', function() {
        it('should replace `rr` with `e`', function() {
          var text = 'rr';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('e');
        });
      });

      describe('when `rr` is within a word', function() {
        it('should replace `rr` with `e`', function() {
          var text = 'Trrstrrrh';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('Tester');
        });
      });
    });

    describe('rule 5', function() {
      describe('when `rrRr` is on its on', function() {
        it('should replace `rrRr` with `i`', function() {
          var text = 'rrRr';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('i');
        });
      });

      describe('when `rrRr` is contained within a word', function() {
        it('should replace `rrRr` with `i`', function() {
          var text = 'BrrRrts';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('Bits');
        });
      });
    });

    describe('rule 6', function() {
      describe('when `rrrRr` is on its own', function() {
        it('should replace `rrrRr` with `o`', function() {
          var text = 'rrrRr';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('o');
        });
      });

      describe('when `rrrRr` is within a word', function() {
        it('should replace `rrrRr` with `o`', function() {
          var text = 'brrrRrts';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('bots');
        });
      });
    });

    describe('rule 7', function() {
      describe('when `rrrrRr` is on its own', function() {
        it('should replace `rrrrRr` with `u`', function() {
          var text = 'rrrrRr';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('u');
        });
      });

      describe('when `rrrrRr` is within a word', function() {
        it('should replace `rrrrRr` with `u`', function() {
          var text = 'brrrrRrts';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('buts');
        });
      });
    });

    describe('rule 8', function() {
      describe('when `RR` is on its own', function() {
        it('should replace `RR` with `r`', function() {
          var text = 'RR';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('r');
        });
      });

      describe('when `RR` is within a word', function() {
        it('should replace `RR` with `r`', function() {
          var text = 'LLLRRrrhrat';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('great');
        });
      });
    });

    describe('rule 9', function() {
      describe('when `LLL` is on its own', function() {
        it('should replace `LLL` with `g`', function() {
          var text = 'LLL';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('g');
        });
      });

      describe('when `LLL` is within a word', function() {
        it('should replace `LLL` with `g`', function() {
          var text = 'LLLRRrrhrat';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('great');
          expect(translatedText).toMatch(/^g/); 
        });
      });

      describe('when `LLL` is not at the beginning of a word', function() {
        it('should not translate `LLL` to english', function() {
          var text = 'chLLLt';

          var translatedText = translator.unzombify(text);

          expect(translatedText).not.toBeUndefined();
          expect(translatedText).toBe('chLLLt');
        });
      });
    });
  });
});