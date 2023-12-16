<!DOCTYPE html>
<html>
    <head>
        <title>AI v psychologii</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="psychologie_style.css">
        <link rel="stylesheet" href="chatbot_style.css">
        <link rel="stylesheet" href="../style_menu.css" >
        <script defer src="script_chatbot.js"></script>
    <script defer src="../!scripts/script_menu.js"></script>
    <link rel="icon" type="image/png" href="../!assets/img/icon.png">

    </head>
    <body>
        <div class="menu-header">
            <button id="menu-btn" onclick="showMenu()">
                <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 13.185675,15.139108 H 37.115233" stroke="#ffffff" stroke-width="3.57143" stroke-linecap="round" id="path4" />
                    <path d="M 13.185675,24.906275 H 37.115233" stroke="#ffffff" stroke-width="3.57143" stroke-linecap="round" id="path6" />
                    <path d="M 13.185675,34.673441 H 37.115233" stroke="#ffffff" stroke-width="3.57143" stroke-linecap="round" id="path8" />
                </svg>
            </button>
        </div>
        <div id="menu-items" class="hide" >
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
        </div>
    
        <div id='cover' onclick='unshow()'>
        </div>
        <a id='prev-button' href='psychologie_index.html' class='a'>
            <img src='arrow_left_white.png'>
          </a>
          <a id='next-button' href='chatbot_v_n.html' class='a'>
            <img src='arrow_right_white.png'>     
          </a>
        <h2 id="nadpis">AI v oblasti self-care</h2>
        
        <p class="uvod y">Self-care vnímáme jako péči o sebe</p>
            <p class="uvod">Pečovat o sebe můžeme tak, že si do svých chytrých telefonů nainstalujeme aplikace, které mohou poskytnout psychologickou pomoc</p>
            <br><br>
        <div class="_center">
            <script>
                function reveal() {
                var reveals = document.querySelectorAll(".reveal");
                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 150;
                    if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                    } else {
                    reveals[i].classList.remove("active");
                    }
                }
            }
        
          window.addEventListener("scroll", reveal);
        
        // To check the scroll position on page load
        reveal();
        
            </script>
            
        <div class="message client reveal">
            <img src="klient.png" width="100"><br>
            <p>Dobrý den, cítím se hrozně. <br>Mohl byste mi pomoci?</p>
        </div>

        <div class="message bot reveal">
            <img src="chatbot.png" width="100"><br>
            <p>Dobrý den, já jsem chatbot WOEBOT a jsem připraven vám pomoci.</p>
            <p>Mám naučené různé metody terapie a povedu s vámi „poradenský rozhovor“.</p>
            <p>Mohu Vám také nabídnout různá cvičení, relaxaci nebo jen vyslechnout vaše pocity.</p>
        </div>

        <div class="message client reveal">
            <img src="klient.png" width="100"> <br>
            <p>Co je smyslem života?</p>
        </div>

        <div class="message bot reveal">
            <img src="chatbot.png" width="100"><br>
            <p>Aha, vidím, že potřebujete odborníka.</p>
            <p>Doporučím vám kontakty na nejbližší pomoc.</p>
        </div>
        </div>

        <div id="otazka-chatbot">
        <p>Použili jste někdy chatbota?</p>
        <?php if(isset($_GET["druhe"])){
            echo "<p>Děkujeme za názor :)</p>";
          }
          else{
            ?>
          <form id="form-chatbot" class='controls' action="psycho_chatbot_vstup.php" method="post">
            <div id='first-section' >
              <button type='button' class='btn' id='pch1' onclick="show('Ano a byl jsem spokojen.')">Ano a byl jsem spokojen.</button>
              <button type='button' class='btn' id='pch2' onclick="show('Ano, ale moc mi nepomohl.')">Ano, ale moc mi nepomohl.</button>
              <button type='button' class='btn' id='pch3' onclick="show('Ne, ale použil bych ho.')">Ne, ale použil bych ho.</button>
              <button type='button' class='btn' id='pch4' onclick="show('Ne a ani se nechystám.')">Ne a ani se nechystám.</button>
              <input type='text' id='skryte-btn' name='second-question' style="display:none;">
            </div>
  
          </form>
          <?php } ?>
          </div>

        <div id="nepanikar">
        <!--<a href="https://nepanikar.eu/">-->
        <img src="nepanikar.png" width="100"><!--</a>-->
        <p>Českým ekvivalentem může být aplikace <!--<a href="https://nepanikar.eu/">-->NEPANIKAŘ<!--</a>-->. </p>
        <ul>
            <li>V této aplikaci sice nemáme k dispozici online chat, jsou zde ale techniky a strategie, jak překonat úzkost či panickou ataku, může pomoci při depresi nebo i sebevražedných myšlenkách.</li>
            <br>
            <li>Má celkem 7 modulů a můžeme zde najít kontakty na odbornou pomoc po celé ČR, včetně online poraden.</li>
        </ul>
        </div>
        

    </body>
</html>