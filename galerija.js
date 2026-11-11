window.addEventListener("load", function () {
    
    var naslovi = document.querySelectorAll(".card h3");
    var sekcijaDetalji = document.getElementById("sekcijaDetalji");
    var naslovGrad = document.getElementById("naslovGrad");
    var sodrzinaGalerija = document.getElementById("sodrzinaGalerija");

    var likes = 0;
    var dislikes = 0;

    for (var i = 0; i < naslovi.length; i++) {
        naslovi[i].style.cursor = "pointer";
        
        naslovi[i].addEventListener("click", function (e) {
            
            var izbranGrad = e.target.innerText;
            
            sekcijaDetalji.classList.remove("d-none");
            naslovGrad.innerText = "Галерија за: " + izbranGrad;

            likes = 0;
            dislikes = 0;

            var slikiHTML = "";

            if (izbranGrad === "Скопје") {
                slikiHTML = 
                    '<div class="row text-center my-3">' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Камениот Мост</strong>' +
                                '<img src="kamen-most-stone-bridge-187058.webp" alt="Камениот Мост" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Стара скопска чаршија</strong>' +
                                '<img src="images_na-acik_Okupacijata-na-Starata-skopska-carsija-se-meri-vo-hekta.jpg" alt="Стара Чаршија" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Скопско Кале</strong>' +
                                '<img src="LVRbBskVeg.jpeg" alt="Скопско Кале" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            } else if (izbranGrad === "Охрид") {
                slikiHTML = 
                    '<div class="row text-center my-3">' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Св. Јован Канео</strong>' +
                                '<img src="received-10156460186043739.jpg" alt="Св. Јован Канео" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Самуилова Тврдина</strong>' +
                                '<img src="samoilova_tvrdina.jpg" alt="Самуилова Тврдина" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Охридско Езеро</strong>' +
                                '<img src="ohrid-1.jpg" alt="Охридско Езеро" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            } else if (izbranGrad === "Битола") {
                slikiHTML = 
                    '<div class="row text-center my-3">' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Широк Сокак</strong>' +
                                '<img src="images.jpg" alt="Широк Сокак" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Хераклеа Линкестис</strong>' +
                                '<img src="Heraklea-Linkestis.webp" alt="Хераклеа Линкестис" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4 my-1">' +
                            '<div class="border p-2 bg-light h-100">' +
                                '<strong>Пелистер (Големо Езеро)</strong>' +
                                '<img src="big-pelister-lake-macedonia.jpg" alt="Пелистер" class="img-fluid img-thumbnail galerija-slika mt-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            }

            sodrzinaGalerija.innerHTML = 
                slikiHTML +
                '<div class="my-3">' +
                    '<button type="button" id="btnLike" class="btn btn-success mr-2">👍 Like (<span id="likeCounter">0</span>)</button>' +
                    '<button type="button" id="btnDislike" class="btn btn-danger">👎 Dislike (<span id="dislikeCounter">0</span>)</button>' +
                '</div>' +
                '<hr>' +
                '<h4>Коментари:</h4>' +
                '<div id="listaKomentari" class="my-2 p-2 border bg-light">' +
                    '<p class="m-1"><em>ТравелТим: Добредојдовте во галеријата за ' + izbranGrad + '!</em></p>' +
                '</div>' +
                '<form id="formaKomentar" class="my-3">' +
                    '<div class="form-group">' +
                        '<label for="vnesKomentar">Оставете коментар:</label>' +
                        '<textarea id="vnesKomentar" class="form-control" rows="2" placeholder="Напишете го вашиот коментар..." required></textarea>' +
                    '</div>' +
                    '<button type="submit" class="btn btn-custom">Додај коментар</button>' +
                '</form>';

            document.getElementById("btnLike").addEventListener("click", function () {
                likes++;
                document.getElementById("likeCounter").innerText = likes;
            });

            document.getElementById("btnDislike").addEventListener("click", function () {
                dislikes++;
                document.getElementById("dislikeCounter").innerText = dislikes;
            });

            var formaKomentar = document.getElementById("formaKomentar");
            formaKomentar.addEventListener("submit", function (evt) {
                evt.preventDefault();

                var vnes = document.getElementById("vnesKomentar").value;
                var lista = document.getElementById("listaKomentari");

                var novKomentar = document.createElement("p");
                novKomentar.className = "m-1 p-1 border-bottom";
                novKomentar.innerHTML = "<strong>Посетител:</strong> " + vnes;

                lista.appendChild(novKomentar);
                document.getElementById("vnesKomentar").value = "";
            });
        });
    }
});