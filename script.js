

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  }

btn2.onclick = function() {
    modal2.style.display = "block";
  }

btn3.onclick = function() {
    modal3.style.display = "block";
  }
  
btn4.onclick = function() {
      modal4.style.display = "block";
  }

btn5.onclick = function() {
    modal5.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
  }

span3.onclick = function() {
    modal3.style.display = "none";
  }
  
span4.onclick = function() {
      modal4.style.display = "none";
    }

span5.onclick = function() {
      modal5.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        } else if (event.target == modal2) {
          modal2.style.display = "none";
        }
        else if (event.target == modal3) {
          modal3.style.display = "none";
          }
          else if (event.target == modal4) {
          modal4.style.display = "none";
          }
          else if (event.target == modal5) {
          modal5.style.display = "none";
            }
          
      };


      const viewCounter = document.querySelector(".counter")
      async function updateCounter() {
        let response = await fetch("https://ysgu6qb3u55zeshxj4owncyssy0szdfu.lambda-url.ca-central-1.on.aws/");
        let data = await response.json();
        if (data % 100 >= 11 && data % 100 <= 13) {
          viewCounter.innerHTML = `Welcome ${data}th Viewer!`;
        } else if (data % 10 === 1) {
          viewCounter.innerHTML = `Welcome ${data}st Viewer!`;
        } else if (data % 10 === 2) {
          viewCounter.innerHTML = `Welcome ${data}nd Viewer!`;
        } else if (data % 10 === 3) {
          viewCounter.innerHTML = `Welcome ${data}rd Viewer!`;
        } else {
          viewCounter.innerHTML = `Welcome ${data}th Viewer!`;
        }
        
        console.log(data)
      }

      updateCounter();