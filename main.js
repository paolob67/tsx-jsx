define(function (require, exports, module) {
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("jsx");
    language.addFileExtension("tsx");
});