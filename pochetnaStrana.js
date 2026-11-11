window.addEventListener("load", function () {
    var btnDodaj = document.getElementById("btnDodadiDestinacija");
    var btnFiltriraj = document.getElementById("btnFiltriraj");
    var kontejner = document.getElementById("kontejnerGradovi");
    var btnPresmetaj = document.getElementById("btnPresmetaj");

    if (btnDodaj) {
        btnDodaj.addEventListener("click", function () {
            var izbranaDest = document.getElementById("izberiGrad").value;

            var budjetBroj = 0;
            var budjet = "";
            var kategorija = "";
            var opis = "";

            if (izbranaDest === "Скопје") {
                budjet = "Висок (1000+ ден)";
                budjetBroj = 1000;
                kategorija = "Градска дестинација";
                opis = "Истражете го главниот град, Камениот мост и Чаршијата.";
            } else if (izbranaDest === "Охрид") {
                budjet = "Висок (1200+ ден)";
                budjetBroj = 1200;
                kategorija = "Природа и култура";
                opis = "Уживајте во бисерот на Македонија и Охридското Езеро.";
            } else if (izbranaDest === "Битола") {
                budjet = "Среден (800+ ден)";
                budjetBroj = 800;
                kategorija = "Градска дестинација";
                opis = "Прошетајте низ познатиот Широк Сокак и Безистенот.";
            }

            var novaKarticka = document.createElement("div");
            novaKarticka.className = "col-md-4 my-2 karticka-grad";
            novaKarticka.setAttribute("data-budjet", budjetBroj);
            novaKarticka.setAttribute("data-kategorija", kategorija);

            novaKarticka.innerHTML =
                '<div class="card p-3 h-100">' +
                    '<h3>' + izbranaDest + '</h3>' +
                    '<p><strong>Категорија:</strong> ' + kategorija + '<br>' +
                    '<strong>Буџет:</strong> ' + budjet + '<br>' +
                    '<strong>Опис:</strong> ' + opis + '</p>' +
                    '<button type="button" class="btn btn-danger btn-sm btn-izbrishi mt-auto">Избриши</button>' +
                '</div>';

            kontejner.appendChild(novaKarticka);
        });
    }

    if (kontejner) {
        kontejner.addEventListener("click", function (e) {
            if (e.target && e.target.classList.contains("btn-izbrishi")) {
                var kartickaZaBrishenje = e.target.closest(".karticka-grad");
                kontejner.removeChild(kartickaZaBrishenje);
            }
        });
    }

    if (btnFiltriraj) {
        btnFiltriraj.addEventListener("click", function () {
            var nacin = document.getElementById("filtriraj").value;
            var karticki = Array.from(kontejner.getElementsByClassName("karticka-grad"));

            if (karticki.length === 0) {
                alert("Нема додадени дестинации за филтрирање.");
                return;
            }

            if (nacin === "budjet") {
                karticki.sort(function (a, b) {
                    var budjetA = parseInt(a.getAttribute("data-budjet"));
                    var budjetB = parseInt(b.getAttribute("data-budjet"));
                    return budjetA - budjetB;
                });
            } else if (nacin === "kategorija") {
                karticki.sort(function (a, b) {
                    var kategorijaA = a.getAttribute("data-kategorija").toLowerCase();
                    var kategorijaB = b.getAttribute("data-kategorija").toLowerCase();
                    return kategorijaA.localeCompare(kategorijaB);
                });
            }

            for (var i = 0; i < karticki.length; i++) {
                kontejner.appendChild(karticki[i]);
            }
        });
    }

    if (btnPresmetaj) {
        btnPresmetaj.addEventListener("click", function () {
            var distanca = parseFloat(document.getElementById("oddalecenost").value);
            var potroshuvachka = parseFloat(document.getElementById("potroshuvachka").value);
            var patarina = parseFloat(document.getElementById("trosoci").value) || 0;

            if (isNaN(distanca) || isNaN(potroshuvachka)) {
                alert("Ве молиме внесете валидни броеви за оддалеченост и потрошувачка.");
                return;
            }

            var potrosenoGorivo = (distanca / 100) * potroshuvachka;
            var cenaLitar = 90;
            var trosokGorivo = potrosenoGorivo * cenaLitar;
            var vkupniTrosoci = trosokGorivo + patarina;

            var divRezultat = document.getElementById("rezultatPresmetka");
            divRezultat.innerHTML =
                "Потрошено гориво: " + potrosenoGorivo.toFixed(2) + " литри<br>" +
                "Трошок за гориво: " + trosokGorivo.toFixed(2) + " денари<br>" +
                "Вкупни трошоци: " + vkupniTrosoci.toFixed(2) + " денари";
        });
    }
});