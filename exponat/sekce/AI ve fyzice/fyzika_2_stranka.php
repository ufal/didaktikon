<!DOCTYPE html>
<html>
    <head>
        <title>AI ve fyzice</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style_fyzika.css">
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

        <a id='prev-button' href='fyzika_1_stranka.html' class='a'>
            <img src='arrow_left_white.png'>
        </a>

        <a id='next-button' href='../rozcestnik.html' class='a'>
            <img src='home.png'>     
        </a>
        
        <?php if(isset($_GET["vyplneno"])){
            ?>
                <h1>Děkujeme za vaše odpovědi</h1>
            <?php
        }
        else{ ?>
            <form action="save_answers.php" method="post" class="questions">
            <p class="question">Zaznělo, že umělá inteligence je vlastně <span style="color:rgb(167, 116, 196)">počítačový algoritmus</span>. Jak si ale představit algoritmus, co to vlastně je?</p>
            <input class='text-input' type="text" name="prvni-otazka" value="">
            <p class="question" id="question2">Proč je právě v <span style="color:rgb(81, 193, 189)">částicové fyzice</span> umělá inteligence tak užitečná? V čem je rozpoznávání různých typů částic jiné než třeba rozpoznávání dopravních značek?</p>
            <input class='text-input' type="text" name="druha-otazka" value=""><br>
            <input  class="submit-btn btn" type="submit" value="Odeslat odpovědi">
            </form>
        <?php } ?>
        
    </body>
</html>