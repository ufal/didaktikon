// Based on https://stackoverflow.com/questions/1305211

// Closure-wrapped for security.
(function () {
    var anchorMap = {
        "prednasky": "aivk_vyuka.html",
        "exponat": "exponat.html",
        "elements": "elements_of_ai.html",
        "en": "index_en.html",
    }
    /*
    * Best practice for extracting hashes:
    * https://stackoverflow.com/a/10076097/151365
    */
    var hash = window.location.hash.substring(1);
    if (hash && anchorMap.has(hash)) {
        /*
        * Best practice for javascript redirects: 
        * https://stackoverflow.com/a/506004/151365
        */
        window.location.replace("/AIvK/" + anchorMap[hash]);
    }
})();
