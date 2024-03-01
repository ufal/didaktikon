<!DOCTYPE html>
<html>
    <head>
        <title>Milníky AI</title>
        <meta charset="UTF-8"> 
        <link rel="stylesheet" href="milniky_style2.css">
        <link rel="stylesheet" href="../style_menu.css" >
        <script defer src="../!scripts/script_menu.js"></script>
        <link rel="icon" type="image/png" href="../!assets/img/icon.png">
    </head>
    <body>
        
<?php if (isset($_GET["odpovedi"])){?>
          <a id='next-button'  href='../rozcestnik.html' class='a'>
            <img src='home.png'>     
        </a>
        <div id="vysledky">
            <p>Zodpověděli jste správně</p>
            <p id="vysledek" style="color:<?php if(intval($_GET['odpovedi'])>=5){
                echo "rgb(161, 211, 100)";
            }
            else{
                echo "rgb(230, 101, 101)";
            }?>">
            <?php echo $_GET["odpovedi"]; ?>/10</p>

            <p>otázek</p>
            <img id="smajlik" src="
            <?php if(intval($_GET['odpovedi'])>=5){
                echo "happier.png";
            }
            else{
                echo "super sad.png";
            }?>
            ">
        </div>
        <?php } 
        else {?>
        <div id="question-container">
            <div>
                <p id="question">Ve kterém roce vznikl první chatbot?</p>
                <p id="question-note">chatbot = program, se kterým uživatel komunikuje pomocí krátkých textových zpráv</p>
                <div id="question-buttons" >
                    <button id="0" class='btn' >1966</button>
                    <button id="1" class='btn' >1976</button>
                    <button id="2" class='btn' >1986</button>
                </div>
            </div>
            <img id="question-image" src="question_images/0.jpg">
        </div>
        <div id="answer-container">
            <div>
                <h1 id="answer">1966</h1>
                <p id="answer-comment">První chatbot se jmenoval ELIZA a vznikl v roce 1966</p>
                <p id="answer-note">Představoval psychoterapeuta, nebyl moc chytrý, používal jen několik jednoduchých pravidel a vět a hlavně se hodně ptal.</p>
                <form action="zpracuj.php" method="post">
                    <input type='text' id='skryte-btn' name='first-question' style="display:none;">
                    <input type='text' id='skryte-btn2' name='vysledky' style="display:none;">
                    <input type="button" id="next-btn" value="Další otázka">
                </form>
            </div>
            <img id="answer-image" src="eliza.png">
        </div> <?php } ?> 
        
        <script src="milniky_script2.js"></script>
    </body>
</html>
