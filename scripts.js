function submitQuiz(event) {
    event.preventDefault();
    let score = 0;
    let output = "";

    const answers = {
        q1: "engine",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: ["a", "b", "d"]
    };

    const q1 = document.getElementById("q1").value.trim().toLowerCase();
    if (q1 === answers.q1) {
        score++; output += `<p>Q1: <span class="correct">Correct!</span></p>`;
    } else {
        output += `<p>Q1: <span class="incorrect">Incorrect.</span> Correct answer: <b>${answers.q1}</b></p>`;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === answers.q2) {
        score++; output += `<p>Q2: <span class="correct">Correct!</span></p>`;
    } else {
        output += `<p>Q2: <span class="incorrect">Incorrect.</span> Correct answer: <b>Optimizing the content and HTML on your own website</b></p>`;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === answers.q3) {
        score++; output += `<p>Q3: <span class="correct">Correct!</span></p>`;
    } else {
        output += `<p>Q3: <span class="incorrect">Incorrect.</span> Correct answer: <b>A short summary that appears in search results</b></p>`;
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === answers.q4) {
        score++; output += `<p>Q4: <span class="correct">Correct!</span></p>`;
    } else {
        output += `<p>Q4: <span class="incorrect">Incorrect.</span> Correct answer: <b>The quality and relevance of content</b></p>`;
    }

    const q5Checked = Array.from(document.querySelectorAll('input[name="q5[]"]:checked')).map(cb => cb.value);
    const isEqual = q5Checked.length === answers.q5.length && q5Checked.every(v => answers.q5.includes(v));
    if (isEqual) {
        score++; output += `<p>Q5: <span class="correct">Correct!</span></p>`;
    } else {
        output += `<p>Q5: <span class="incorrect">Incorrect.</span> Correct answers: <b>Link building, Social media promotion, Guest blogging</b></p>`;
    }

    const total = 5;
    const percentage = (score / total) * 100;
    const passFail = percentage >= 60 ? `<span class="pass">Pass</span>` : `<span class="fail">Fail</span>`;

    output = `<div class="score">Score: ${score}/${total} (${percentage.toFixed(0)}%) — ${passFail}</div>` + output;
    document.getElementById("results").innerHTML = output;
    }

    function resetQuiz() {
    document.getElementById("results").innerHTML = "";
    }

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu ul");

  if (hamburger && menu) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("show");
      console.log("Menu toggled, show class:", menu.classList.contains("show"));
    });

    // Close menu when a link is clicked
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        menu.classList.remove("show");
        console.log("Menu closed via link click");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".menu")) {
        menu.classList.remove("show");
      }
    });
  } else {
    console.log("Hamburger or menu not found");
  }
});