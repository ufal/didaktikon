
<!doctype html>
<html lang="en">
  <head>
    <title>AI v náboženství</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

    <link href='https://fonts.googleapis.com/css?family=Questrial|Open Sans' rel='stylesheet'> 
    <link href='style_nabozenstvi.css' rel='stylesheet'>
    <script defer src="script.js"></script>

    <link rel="stylesheet" href="../style_menu.css" >
    <!-- <script defer src="../script_menu_sipky.js"></script> -->
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
    <a id='prev-button' href='nabozenstvi_3.html' class='a'>
      <img src='arrow_left_white.png'>
    </a>
    <a id='next-button' href='../rozcestnik.html' class='a'>
      <img src='home.png'>     
  </a>


    <div id='center'>
      <div id='text-container'>
        <p>
          Zkuste si představit, že jednou můžeme stvořit něco dokonalejšího, než 
          jsme my sami. <br><span  class="bluegreen">Jaký je smysl lidské tvořivosti?</span> 
        </p>
        <?php if(isset($_GET["prvni"])){
          echo "<p>Děkujeme za názor :)</p>";
        }
        else{
          ?>
          <form action="nabozenstvi_vstup1.php" method="post" class="questions-">
             <input class='text-input-' type="text" name="prvni-otazka" value="">
             <input  class="submit-btn- btn-" type="submit">Poslat</input>
        </form>
        <?php
        }?>
        
        <p id="p3">
          Pro začátek se ale můžete zamyslet nad tím, že byste po vzoru Mindara 
          mohli mít doma <span class="yellow">"prapraprababičku", robota</span>, který by si pamatoval 
          vše o vaší rodině, mohli byste se ho na cokoliv zeptat či se mu s 
          čímkoliv svěřit.</p>
        </p>
        <p id="p4">Chtěli byste ho?</p>
       
        
        <form id="p4" class='controls'>
          <div id='first-section' >
            <button type='button' class='btn' id='yes' onclick="show()">Ano</button>
            <button type='button' class='btn' id='no' onclick="show()">Ne</button>
            <button type='button' class='btn' id='idk' onclick="show()">Nevím</button>
          </div>

          <div class='hide' id='second-section'>
            <input class='input' type="text" id="why" name="why" placeholder="Proč?" >
            <input type="submit" value="Poslat odpověď" id="submit" class='btn' onclick="submit()">
          </div>

        </form>

        

      </div>
    </div>



    
  </body>
</html>