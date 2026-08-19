/* ============================================================
   dsh 精读课程 · 通用测验组件
   用法：在课程 HTML 中放置结构——
     <div class="quiz">
       <p class="quiz-question">…</p>
       <div class="quiz-options">
         <button>选项</button>
         <button data-correct>正确选项</button>
         …
       </div>
       <p class="quiz-feedback why" hidden>答对后的解释</p>
     </div>
   行为：点错 → 该选项划线禁用并提示"再想想"；
        点对 → 标绿、锁定全部选项、显示解释。即时反馈，支持重试。
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var options = Array.prototype.slice.call(
      quiz.querySelectorAll(".quiz-options button")
    );
    var why = quiz.querySelector(".quiz-feedback.why");
    var hint = document.createElement("p");
    hint.className = "quiz-feedback hint";
    hint.hidden = true;
    hint.textContent = "不对，再想想——回上面翻一眼，允许试错。";
    if (options.length) {
      options[options.length - 1].parentNode.appendChild(hint);
    }

    var solved = false;

    options.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (solved || btn.disabled) return;

        if (btn.hasAttribute("data-correct")) {
          solved = true;
          btn.classList.add("correct");
          options.forEach(function (o) { o.disabled = true; });
          hint.hidden = true;
          if (why) why.hidden = false;
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          hint.hidden = false;
        }
      });
    });
  });
})();
