define([], function() {
  var Translator = function() {};
  /*
    ????
    For the translations, do rules run against the running translated text as they're being applied or always against the original text? 
    For instance, rule 5 is 'i' or 'I' to 'rrRr' and rule 8 is 'R' to 'RR'. If I pass in the text 'i' to the zombify function would 
    that result in 'rrRr' or 'rrRRr'?

    Can solve the rule 5 to rule 8 problem by moving rule 8 to after rule 1 below

    ?? OR should one of the made up rules be the previous rules must be applied in order, so they can be unzombified properly
   */

  // 1. lower-case "r" at the end of words replaced with "rh".
  // 2. an "a" or "A" by itself will be replaced with "hra".
  // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
  //   ".!?", followed by a space, followed by a letter.)
  // 4. "e" or "E" is replaced by "rr"
  // 5. "i" or "I" is replaced by "rrRr"
  // 6. "o" or "O" is replaced by "rrrRr"
  // 7. "u" or "U" is replaced by "rrrrRr"
  // 8. "R" is replaced by "RR"
  // 9. "y" or "Y" is replaced by "RRR".
  // 10. "g" or "G" at beginning of words is replaced by "GaR" 
  Translator.prototype.zombify = function(text) {
    text = text.replace(/r\b/g, 'rh');;
    text = text.replace(/\ba\b/gi, 'hra');
    text = text.replace(/[.!?] \b\w/g, function(m) { return m.toUpperCase(); });;
    text = text.replace(/e/gi, 'rr');
    text = text.replace(/i/gi, 'rrRr');
    text = text.replace(/o/gi, 'rrrRr');
    text = text.replace(/u/gi, 'rrrrRr');
    text = text.replace(/R/g, 'RR');
    text = text.replace(/y/gi, 'RRR');
    text = text.replace(/\bg/gi, 'GaR');
    return text;
  };

  // TODO
  Translator.prototype.unzombify = function(text) {
    return text;
  };

  return Translator;
});