
      // Get the modal
      var modal = document.getElementById("myModal");
      
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img1 = document.getElementById("img-happy");
      var img2 = document.getElementById("img-angry");
      var img3 = document.getElementById("img-super-happy");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img1.onclick = function(){
        modal.style.display = "block";
        modalImg.src = "emotions_happy.jpg";
        captionText.innerHTML = "Šťastný žák";
      }
      img2.onclick = function(){
        modal.style.display = "block";
        modalImg.src = "emotions_angry.jpg";
        captionText.innerHTML = "Naštvaný žák";
      }
      img3.onclick = function(){
        modal.style.display = "block";
        modalImg.src = "emotions_super_happy.jpg";
        captionText.innerHTML = "Veselý žák";
      }
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }
 