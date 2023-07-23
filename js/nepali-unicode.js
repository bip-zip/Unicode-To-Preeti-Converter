function convert_to_Preeti() {
  var array_one = new Array(
    "‘",
    "?",
    "क़",
    "ख़",
    "ग़",
    "ज़",
    "ड़",
    "ढ़",
    "फ़",
    "ॐ",
    "ऽ",
    "।",
    "m'",
    "m]",
    "mfF",
    "mF",
    "०",
    "१",
    "२",
    "३",
    "४",
    "५",
    "६",
    "७",
    "८",
    "९",
    "फ्र",
    "झ",
    "फ",
    "क्त",
    "क्र",
    "ल",
    "ज्ञ्",
    "द्घ",
    "ज्ञ",
    "द्द",
    "द्ध",
    "श्र",
    "रु",
    "द्य",
    "क्ष्",
    "क्ष",
    "त्त",
    "द्म",
    "त्र",
    "ध्र",
    "ङ्घ",
    "ड्ड",
    "द्र",
    "ट्ट",
    "ड्ढ",
    "ठ्ठ",
    "रू",
    "हृ",
    "ङ्ग",
    "त्र",
    "ङ्क",
    "ङ्ख",
    "ट्ठ",
    "द्व",
    "ट्र",
    "ठ्र",
    "ड्र",
    "ढ्र",
    "्र",
    "ड़",
    "ढ़",
    "क्",
    "क",
    "ख्",
    "ख",
    "ग्",
    "ग",
    "घ्",
    "घ",
    "ङ",
    "च्",
    "च",
    "छ",
    "ज्",
    "ज",
    "झ्",
    "झ",
    "ञ्",
    "ञ",
    "ट",
    "ठ",
    "ड",
    "ढ",
    "ण्",
    "ण",
    "त्",
    "त",
    "थ्",
    "थ",
    "द",
    "ध्",
    "ध",
    "न्",
    "न",
    "प्",
    "प",
    "फ्",
    "ब्",
    "ब",
    "भ्",
    "भ",
    "म्",
    "म",
    "य",
    "र",
    "ल्",
    "ल",
    "व्",
    "व",
    "श्",
    "श",
    "ष्",
    "ष",
    "स्",
    "स",
    "ह्",
    "ह",
    "्य",
    "ऑ",
    "ऑ",
    "औ",
    "ओ",
    "आ",
    "अ",
    "ई",
    "इ",
    "ऊ",
    "उ",
    "ऋ",
    "ऐ",
    "ए",
    "ॉ",
    "ू",
    "ु",
    "ं",
    "ा",
    "ृ",
    "्",
    "े",
    "ै",
    "ँ",
    "ी",
    "ः",
    "ो",
    "ौ"
  );
  var array_two = new Array(
    "…",
    "<",
    "क़",
    "ख़",
    "ग़",
    "ज़",
    "ड़",
    "ढ़",
    "फ़",
    "ç",
    "˜",
    ".",
    "'m",
    "]m",
    "Fmf",
    "Fm",
    ")",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    "k|m",
    "em",
    "km",
    "Qm",
    "qm",
    "n",
    "¡",
    "¢",
    "1",
    "2",
    "4",
    ">",
    "?",
    "B",
    "I",
    "If",
    "Q",
    "ß",
    "q",
    "„",
    "‹",
    "•",
    "›",
    "§",
    "°",
    "¶",
    "¿",
    "Å",
    "Ë",
    "Ì",
    "Í",
    "Î",
    "Ý",
    "å",
    "6«",
    "7«",
    "8«",
    "9«",
    "|",
    "8Þ",
    "9Þ",
    "S",
    "s",
    "V",
    "v",
    "U",
    "u",
    "£",
    "3",
    "ª",
    "R",
    "r",
    "5",
    "H",
    "h",
    "‰",
    "´",
    "~",
    "`",
    "6",
    "7",
    "8",
    "9",
    "0",
    "0f",
    "T",
    "t",
    "Y",
    "y",
    "b",
    "W",
    "w",
    "G",
    "g",
    "K",
    "k",
    "ˆ",
    "A",
    "a",
    "E",
    "e",
    "D",
    "d",
    "o",
    "/",
    "N",
    "n",
    "J",
    "j",
    "Z",
    "z",
    "i",
    "if",
    ":",
    ";",
    "X",
    "x",
    "Ø",
    "cf‘",
    "c‘f",
    "cf}",
    "cf]",
    "cf",
    "c",
    "O{",
    "O",
    "pm",
    "p",
    "C",
    "P]",
    "P",
    "f‘",
    '"',
    "'",
    "+",
    "f",
    "[",
    "\\",
    "]",
    "}",
    "F",
    "L",
    "M",
    "f]",
    "f}"
  );
  var array_one_length = array_one.length;
  var modified_substring = document.getElementById("unicode_text_two").value;
  Replace_Symbols();
  processed_text = modified_substring;
  document.getElementById("legacy_text_two").value = processed_text;
  function Replace_Symbols() {
    if (modified_substring != "") {
      var position_of_f = modified_substring.indexOf("ि");
      while (position_of_f != -1) {
        var character_left_to_f = modified_substring.charAt(position_of_f - 1);
        modified_substring = modified_substring.replace(
          character_left_to_f + "ि",
          "l" + character_left_to_f
        );
        position_of_f = position_of_f - 1;
        while (
          (modified_substring.charAt(position_of_f - 1) == "्") &
          (position_of_f != 0)
        ) {
          var string_to_be_replaced =
            modified_substring.charAt(position_of_f - 2) + "्";
          modified_substring = modified_substring.replace(
            string_to_be_replaced + "l",
            "l" + string_to_be_replaced
          );
          position_of_f = position_of_f - 2;
        }
        position_of_f = modified_substring.search(/ि/, position_of_f + 1);
      }
      set_of_matras = "ािीुूृेैोौं:ँॅ";
      modified_substring += "  ";
      var space = " ";
      var position_of_half_R = modified_substring.indexOf("र्");
      while (position_of_half_R > 0) {
        var probable_position_of_Z = position_of_half_R + 2;
        var character_at_probable_position_of_Z = modified_substring.charAt(
          probable_position_of_Z
        );
        while (
          set_of_matras.match(character_at_probable_position_of_Z) != null
        ) {
          probable_position_of_Z = probable_position_of_Z + 1;
          character_at_probable_position_of_Z = modified_substring.charAt(
            probable_position_of_Z
          );
        }
        var right_to_position_of_Z = probable_position_of_Z + 1;
        if (right_to_position_of_Z > 0) {
          var character_right_to_position_of_Z = modified_substring.charAt(
            right_to_position_of_Z
          );
          while ("्".match(character_right_to_position_of_Z) != null) {
            probable_position_of_Z = right_to_position_of_Z + 1;
            character_at_probable_position_of_Z = modified_substring.charAt(
              probable_position_of_Z
            );
            right_to_position_of_Z = probable_position_of_Z + 1;
            character_right_to_position_of_Z = modified_substring.charAt(
              right_to_position_of_Z
            );
          }
        }
        string_to_be_replaced = modified_substring.substr(
          position_of_half_R + 2,
          probable_position_of_Z - position_of_half_R - 1
        );
        modified_substring = modified_substring.replace(
          "र्" + string_to_be_replaced,
          string_to_be_replaced + "{"
        );
        position_of_half_R = modified_substring.indexOf("र्");
      }
      modified_substring = modified_substring.substr(
        0,
        modified_substring.length - 2
      );
      for (
        input_symbol_idx = 0;
        input_symbol_idx < array_one_length;
        input_symbol_idx++
      ) {
        idx = 0;
        while (idx != -1) {
          modified_substring = modified_substring.replace(
            array_one[input_symbol_idx],
            array_two[input_symbol_idx]
          );
          idx = modified_substring.indexOf(array_one[input_symbol_idx]);
        }
      }
    }
  }
}
function clearContent() {
  document.getElementById("unicode_text_two").value = "";
  document.getElementById("legacy_text_two").value = "";
}
function copyPreeti(event) {
  var copyText = document.getElementById("legacy_text_two");
  doCopying(copyText, event);
}
function doCopying(copyText, event) {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  event.target.innerHTML = "Copied &#10003;";
  setTimeout(function () {
    event.target.innerHTML = "Copy";
  }, 3000);
}
