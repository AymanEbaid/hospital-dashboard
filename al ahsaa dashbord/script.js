  if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }

    // login
     function login(e) {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;

      // بيانات الدخول الوهمية
      if (user === "admin" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("بيانات الدخول غير صحيحة");
      }
    }