
<!doctype html>
<html lang="en">
  <head>
    <title>AI v pedagogice</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

    <link href='https://fonts.googleapis.com/css?family=Questrial|Open Sans' rel='stylesheet'> 
    <link href='style_pedagogika.css' rel='stylesheet'>
    <script defer src="script.js"></script>

    <link rel="stylesheet" href="../style_menu.css" >
    <script defer src="../script_menu.js"></script>

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

    <a id='prev-button' href='pedagogika_first.html' class='a'>
      <img src='arrow_left_white.png'>
    </a>
    <a id='next-button' href='pedagogika_third.html' class='a'>
      <img src='arrow_right_white.png'>     
    </a>


    <div id='center'>
      <div id='text-container2'>
        <p class="question">
          Líbilo by se vám, kdyby vyučující ve vaší třídě mohli měřit vaše emoce?
        </p>
        <?php if(isset($_GET["prvni"])){
          echo "<p>Děkujeme za názor :)</p>";
        }
        else{
          ?>
        <form class='controls' action="zpracuj1.php" method="post">
          <div id='first-section' >
            <button type='button' class='btn' id='yes' onclick="show('Ano')">Ano</button>
            <button type='button' class='btn' id='no' onclick="show('Ne')">Ne</button>
            <button type='button' class='btn' id='idk' onclick="show('Nevím')">Nevím</button>
            <input type='text' id='skryte-btn' name='first-question' style="display:none;">
          </div>

          <div class='hide' id='second-section'>
            <input class='input' type="text" id="why" name="why" placeholder="Proč?" >
            <input type="submit" value="Poslat odpověď" id="submit" class='btn'>
          </div>
          <?php } ?>

        </form>
        <p class="question">
          Chtěli byste si zkusit program doma sami?
        </p>
        <?php if(isset($_GET["druhe"])){
          echo "<p>Děkujeme za názor :)</p>";
        }
        else{
          ?>
        <form class='controls'>
          <div id='first-section2' action="zpracuj2.php" method="post">
            <button type='button' class='btn' id='yes' onclick="show2('Ano')">Ano</button>
            <button type='button' class='btn' id='no' onclick="show2('Ne')">Ne</button>
            <button type='button' class='btn' id='idk' onclick="show2('Nevím')">Nevím</button>
            <input type='text' id='skryte-btn2' name='second-question' style="display:none;">
          </div>

          <div class='hide' id='second-section2'>
            <input class='input' type="text" id="why2" name="why2" placeholder="Proč?" >
            <input type="submit" value="Poslat odpověď" id="submit" class='btn'>
          </div>

        </form>
        <?php } ?>
        

      </div>
    </div>



    
  </body>
</html>