function insertNavbar() {
    var navbar = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <title>Bootstrap Example</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        
        <body>
            <nav class="navbar navbar-expand-sm navbar-dark"
                style="background-color: rgb(29, 48, 155); border-bottom: gold solid 10px;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="main.html">
                        <img src="./logo.png" alt="Logo" style="width:55px; height:55px; margin-left: 10px;"
                            class="rounded-pill">
                    </a>
                </div>
                <form class="d-flex">
                    <ul class="navbar-nav me-5 mb-lg-0">
                        <a class="nav-link text-white fs-4 fw-semibold" href="login.html">Logout</a>
                        <a class="nav-link text-white fs-4 fw-semibold" href="login.html"></a>
                    </ul>
                </form>
            </nav>
        </body>
        </html>
    `;
    document.getElementById("navbar").innerHTML = navbar;
  }