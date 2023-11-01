<!DOCTYPE html>
<html>
    <head>
        <title>AI v psychologii</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="psychologie_style.css">
        <link rel="stylesheet" href="vyzkum_style.css">
        <link rel="stylesheet" href="../style_menu.css" >
        <script defer src="script.js"></script>
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
       
        </div>
    
        <div id='cover' onclick='unshow()'>
        </div>

        <a id='prev-button' href='psychologie_index.html' class='a'>
            <img src='arrow_left_white.png'>
          </a>
          <a id='next-button' href='vyzkum_v_n.html' class='a'>
            <img src='arrow_right_white.png'>     
          </a>

        <h1 id="nadpis">AI v psychoterapii a výzkumu</h1>
        <br>
        <div class="center">
        
        <!--TODO: otázka-->
        <p>Chtěli byste si vyzkoušet postavit se svému strachu ve virtuální realitě?</p>
        <?php if(isset($_GET["druhe"])){
            echo "<p>Děkujeme za názor :)</p>";
          }
          else{
            ?>
          <form id="p4" class='controls' action="psycho_vyzkum_vstup.php" method="post">
            <div id='first-section' >
              <button type='button' class='btn' id='yes' onclick="show('Ano')">Ano</button>
              <button type='button' class='btn' id='no' onclick="show('Ne')">Ne</button>
              <button type='button' class='btn' id='idk' onclick="show('Nevím')">Nevím</button>
              <input type='text' id='skryte-btn' name='second-question' style="display:none;">
            </div>
  
            <div class='hide' id='second-section'>
              <input class='input' type="text" id="why" name="why" placeholder="Proč?" >
              <input type="submit" value="Poslat odpověď" id="submit" class='btn'>
            </div>
  
          </form>
          <?php } ?>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front karta g">
                    <div class="nadpis">
                    <h3>AI při terapii</h3>
                    <h1>virtuální realitou</h1>
                </div>
                </div>
                <div class="flip-card-back karta g">
                    <div class="text">
                    <p id="prvni">VR nemusí být pouze další možnost her, může být využita i v terapii.                    </p>
                    <p> Nejčastěji se využívá pro “expoziční terapii” například při fóbiích. Máte fóbii z pavouků? Řízení auta nebo z hloubky? 
                    </p>
                    <p>Můžete se ve VR “postavit” svým fóbiím v rámci terapie - kontrolované, bezpečné prostředí, ve které Vám odborník nastaví různé intenzity a vy následně nacvičujete ve virtuální realitě setkání s podnětem.</p>
                </div>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front karta y">
                    <div class="nadpis">
                        <h3>AI v</h3>
                        <h1>terapii a výzkumu</h1>
                    </div>
                </div>
                <div class="flip-card-back karta y">
                    <div class="text">
                        <p id="prvni">Při terapeutickém sezení sedí klient s terapeutem, vedou spolu rozhovor a terapeut aplikuje různé techniky či přístupy tak, aby pomohl klientovi s jeho zakázkou.</p>
                        <p> Nahráváním a aplikací AI můžeme v rámci terapie “kontrolovat”, jak efektivní je celé sezení. </p>
                        <p>AI si pamatuje, co klient řekl, dokáže následně vyhodnotit, jaké forma terapie, případně v kombinaci s léky je pro klienta nejlepší.</p>
                    </div>
                </div>
            </div>
        </div>
        
        


        </div>
        
    </body>
</html>