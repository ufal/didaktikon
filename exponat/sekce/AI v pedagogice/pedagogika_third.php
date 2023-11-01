
<!doctype html>
<html lang="en">
  <head>
    <title>AI v pedagogice</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <link href='two_columns.css' rel='stylesheet'>
    <script defer src="two_columns.js"></script>

    <link rel="stylesheet" href="../style_menu.css" >
    <script defer src="../!scripts/script_menu.js"></script>
    <link rel="icon" type="image/png" href="../!assets/img/icon.png">
  </head>
  <body>
  

    <a id='prev-button' href='pedagogika_second.php' class='a'>
        <img src='arrow_left_white.png'>
      </a>
      <?php
      if (isset($_GET["dokonceno"])){
              ?>
      <a id='next-button' href='../rozcestnik.html' class='a'>
        <img src='home.png'>     
    </a><?php } ?>

<p class="nadpis">Jaké důsledky AI v pedagogice považujete spíš za výhodu a které za nevýhodu:</p>
      <div class='containers'>

        <div class='container' id='container_correct'>
            <p>Výhody</p>
            
            
        </div>

        <div class='container' id='container_incorrect'>
        <p>Nevýhody</p>
        </div>
    
    </div>


        <div class='pool'>

            <div class='woop'>

                <div class='my_text' ><p id='my_text' class = 'hide'>Hm, není to správná varianta.</p></div>
                <div id='char_container'>
                    
                </div>
                
              
            
                <form class='controls' action="zpracuj.php" method="post">
                  <input type='text' id='skryte-btn' name='first-question' style="display:none;">
                    <input type='button' class='btn' id='pro' value="Výhoda">
                    <input type='button' class='btn' id='con' value="Nevýhoda">
                    
                

                
                
                
            </div>
            <div id='final' class="hide">
            <input type="submit" value="Odeslat" id="submit2" class='btn hide'>
            <?php if(isset($_GET["dokonceno"])){
              echo "<h1>Děkujeme za názor!</h1>";
            }
            ?>    
            </div>

            </form>
            
        </div>

       





     




  </body>
</html>