onEvent("buttonArabic", "click", function( ) {
  hideElement("displayEnglish");
  hideElement("displayHebrew");
  showElement("displayArabic");
});
onEvent("buttonEnglish", "click", function( ) {
  hideElement("displayArabic");
  hideElement("displayHebrew");
  showElement("displayEnglish");
});
onEvent("buttonHebrew", "click", function( ) {
  hideElement("displayArabic");
  hideElement("displayEnglish");
  showElement("displayHebrew");
});
var x = 0;
var arabicVocab = getColumn("Vocab", "Arabic");
var englishVocab = getColumn("Vocab", "English");
var hebrewVocab = getColumn("Vocab", "Hebrew");
onEvent("buttonNextCard", "click", function( ) {
  if (x < arabicVocab.length) {
    setText("displayArabic", arabicVocab[x]);
    setText("displayEnglish", englishVocab[x]);
    setText("displayHebrew", hebrewVocab[x]);
    x = x + 1;
  } else {
    x = 0;
  }
});
