define([], function() {
  var Translator = function() {};

  // 1. lower-case "r" at the end of words replaced with "rh".
  // 2. an "a" or "A" is replaced with "hra".
  // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
  //   ".!?", followed by a space, followed by a letter.)
  // 4. "e" or "E" is replaced by "rr"
  // 5. "i" or "I" is replaced by "rrRr"
  // 6. "o" or "O" is replaced by "rrrRr"
  // 7. "u" or "U" is replaced by "rrrrRr"
  // 8. "r" or "R" is replaced by "RR"
  // 9. "g" or "G" at beginning of words is replaced by "LLL"
  // 10. Capitalization rule should be done first, and all other rules will apply to the properly capitalized text
  Translator.prototype.zombify = function(text) {
    text = text.replace(/[.!?] \b\w/g, function(m) { return m.toUpperCase(); }); // rule 3 and rule 10
    text = text.replace(/r\b/g, 'rh'); // rule 1
    text = text.replace(/(?!(rh\b|\brh\b))r/gi, 'RR'); // rule 8
    text = text.replace(/a/gi, 'hra'); // rule 2
    text = text.replace(/e/gi, 'rr'); // rule 4
    text = text.replace(/i/gi, 'rrRr'); // rule 5
    text = text.replace(/o/gi, 'rrrRr'); // rule 6
    text = text.replace(/u/gi, 'rrrrRr'); // rule 7
    text = text.replace(/\bg/gi, 'LLL'); // rule 9
    return text;
  };

  Translator.prototype.unzombify = function(text) {
    text = text.replace(/\bLLL/g, 'g');
    text = text.replace(/hra/g, 'a');
    text = text.replace(/rrrrRr/g, 'u');
    text = text.replace(/rrrRr/g, 'o');
    text = text.replace(/rrRr/g, 'i');
    text = text.replace(/rr/g, 'e');
    text = text.replace(/rh\b/g, 'r');
    text = text.replace(/RR/g, 'r');

    text = text.replace(/[.!?] \b\w/g, function(m) { return m.toUpperCase(); });
    return text;
  };

  return Translator;
});