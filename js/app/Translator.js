define([], function() {
  var Translator = function() {};

  Translator.prototype.zombify = function(text) {
    text = this.rule1(text);
    text = this.rule2(text);
    text = this.rule3(text);
    text = this.rule4(text);
    text = this.rule5(text);
    text = this.rule6(text);
    text = this.rule7(text);
    text = this.rule8(text);
    text = this.rule9(text);
    text = this.rule10(text);
    return text;
  };

  // 1. lower-case "r" at the end of words replaced with "rh".
  Translator.prototype.rule1 = function(text) {
    return text.replace(/r\b/g, 'rh');
  };

  // 2. an "a" or "A" by itself will be replaced with "hra".
  Translator.prototype.rule2 = function(text) {
    return text.replace(/\ba\b/gi, 'hra');
  };

  // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
  //   ".!?", followed by a space, followed by a letter.)
  Translator.prototype.rule3 = function(text) {
    // TOOD
    return text;
  };

  // 4. "e" or "E" is replaced by "rr"
  Translator.prototype.rule4 = function(text) {
    return text.replace(/e/gi, 'rr');
  };

  // 5. "i" or "I" is replaced by "rrRr"
  Translator.prototype.rule5 = function(text) {
    return text.replace(/i/gi, 'rrRr');
  };

  // 6. "o" or "O" is replaced by "rrrRr"
  Translator.prototype.rule6 = function(text) {
    return text.replace(/o/gi, 'rrrRr');
  };

  // 7. "u" or "U" is replaced by "rrrrRr"
  Translator.prototype.rule7 = function(text) {
    return text.replace(/u/gi, 'rrrrRr');
  };

  // 8. "R" is replaced by "RR"
  Translator.prototype.rule8 = function(text) {
    return text.replace(/R/g, 'RR');
  };

  // 9. "y" or "Y" is replaced by "RRR".
  Translator.prototype.rule9 = function(text) {
    return text.replace(/y/gi, 'RRR');
  };

  // 10. "g" or "G" at beginning of words is replaced by "GaR"
  Translator.prototype.rule10 = function(text) {
    return text.replace(/\bg/gi, text);
  };

  return Translator;
});