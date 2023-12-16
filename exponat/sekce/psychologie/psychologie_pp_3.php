<!DOCTYPE html>
<html>
    <head>
        <title>AI v psychologii</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="psychologie_style.css">
        <link rel="stylesheet" href="popularni_style.css">
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
            <div class="menu-item">
                <a class="menu-href" href="#"></a>
            </div>
        </div>
    
        <div id='cover' onclick='unshow()'>
        </div>

        <a id='prev-button' href='psychologie_pp_2.html' class='a'>
            <img src='arrow_left_white.png'>
        </a>
          
        <h2 id="nadpis">Sociální sítě? Netflix? Váš volný čas!</h2>
        <div class="center">
            <!--TODO otázka-->
            <p class="q">Chtěli jste se někdy zbavit Vaší “závislosti” na sociálních sítích?</p>
            <?php if(isset($_GET["prvni"])){
                echo "<p>Děkujeme za názor :)</p>";
              }
              else{
                ?>
              <form id="f1" class='controls' action="psycho_pp_vstup1.php" method="post">
                <div id='first-section' >
                  <button type='button' class='btn ano' id='yes' onclick="show('Ano')">Ano</button>
                  <button type='button' class='btn ne' id='no' onclick="show('Ne')">Ne</button>
                  <button type='button' class='btn nevim' id='idk' onclick="show('Nevím')">Nevím</button>
                  <input type='text' id='skryte-btn' name='first-question' style="display:none;">
                </div>
      
                <div class='hide' id='second-section'>
                  <input class='input' type="text" id="why" name="why" placeholder="Proč?" >
                  <input type="submit" value="Poslat odpověď" id="submit" class='btn'>
                </div>
      
              </form>
              <?php } ?>

            <!--TODO otázka-->
            <p class="q">Hledali jste někdy, jak lépe trávit volný čas a nekoukat pořád na Netflix?  </p>
            <?php if(isset($_GET["druhe"])){
            echo "<p>Děkujeme za názor :)</p>";
            }
            else{
                ?>
            <form id="f2" class='controls' action="psycho_pp_vstup2.php" method="post">
                <div id='first-section-2' >
                <button type='button' class='btn ano' id='yes' onclick="show2('Ano')">Ano</button>
                <button type='button' class='btn ne' id='no' onclick="show2('Ne')">Ne</button>
                <button type='button' class='btn nevim' id='idk' onclick="show2('Nevím')">Nevím</button>
                <input type='text' id='skryte-btn' name='second-question' style="display:none;">
                </div>
    
                <div class='hide' id='second-section-2'>
                <input class='input' type="text" id="why" name="why" placeholder="Proč?" >
                <input type="submit" value="Poslat odpověď" id="submit" class='btn'>
                </div>
    
            </form>
            <?php } ?>

            <p>Psychologie se zajímá také o to, proč jsme na těchto vymoženostech tak často a proč na nás tak působí.</p>

            <p class="uvod y">Na těchto platformách je ale také aplikována AI, která na základě našich dat dokáže přizpůsobit doporučené filmy nebo naší stránku na sociálních sítích tak, aby odpovídala našim zájmům, aby nás udržela co nejdéle připojené a abychom na těchto sítích trávili co nejvíce času.</p>

            <p>Když budete koukat na videa s koťátky, najdete je nakonec všude.</p>

        
            

        </div>

    </body>
</html>