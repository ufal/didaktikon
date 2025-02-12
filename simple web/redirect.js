// Based on https://stackoverflow.com/questions/1305211

// Closure-wrapped for security.
(function () {
    var anchorMap = {
        "prednasky": "aivk_vyuka.html",
        "exponat": "exponat.html",
        "elements": "elements_of_ai.html",
        "ethics": "ethics_of_ai.html",
        "en": "index_en.html",
        "exp": "exponat/sekce/rozcestnik.html",
        "expf": "exponat/sekce/frameshome.html",
        "chatgpt_letacek": "ChatGPT_diskuze_l.png",
        "chatgpt_letacek_d": "ChatGPT_diskuze_d.png",
        "pribehy": "pribehy.html",
    }
    /*
    * Best practice for extracting hashes:
    * https://stackoverflow.com/a/10076097/151365
    */
    var hash = window.location.hash.substring(1);
    if (hash && (hash in anchorMap)) {
        /*
        * Best practice for javascript redirects: 
        * https://stackoverflow.com/a/506004/151365
        */
        window.location.replace("/" + anchorMap[hash]);
    }
})();
