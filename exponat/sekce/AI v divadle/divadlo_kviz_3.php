<!DOCTYPE html>
<html>
    <head>
        <title>AI v divadle</title>   
        <meta charset="UTF-8"> 
        <link rel="stylesheet" href="divadlo_style.css">
        <link rel="stylesheet" href="../style_menu.css" >
        <script defer src="../script_menu.js"></script>
        <!-- jQuery Ajax CDN -->
    <script src=
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
        </script>
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

        <a id='next-button' href='divadlo_robot.html' class='a'>
            <img src='arrow_right_white.png'>     
        </a>
        <a id='prev-button' href='divadlo_kviz_2.html' class='a'>
            <img src='arrow_left_white.png'>     
        </a>

        <div class="content">
            <p class="question">
                Kter?? z v??stup?? mysl??te, ??e napsala um??l?? inteligence?
            </p>
            <form id="form" class='controls' action="action.php" method="get">
                <div id='first-section' >
                  <input type='submit' class='btn' value="V??stup A" name="vystup">
                  <input type='submit' class='btn' value="V??stup B" name="vystup">
                </div>
            </form>  
            <?php if(isset($_GET["correct"]) and isset($_GET["all"])){
                   $procenta= floor(intval($_GET["correct"])/intval($_GET["all"])*100);
                   if($_GET['vystup']=="A"){
                       $vyhodnoceni="V??born?? :)";
                   }
                   else if($_GET['vystup']=="B"){
                       $vyhodnoceni="Bohu??el :(";
                   }
                    echo "<p id='vyhodnoceni' class='question'>" . $vyhodnoceni . "</p>";
                    echo "<div id='pie-chart'>";
                    echo "<p>Spr??vn?? odpov??d??lo</p>";
                    echo "<div class='pie animate' style='--p:" . $procenta . ";--c:lightgreen'>" . $procenta . "%</div>";  
                    echo "<p>n??v??t??vn??k??</p>";
                    echo "</div>";
                }
                ?>
                


        </div>
        
    </body>
</html>