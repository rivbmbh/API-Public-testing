// API key RAWG : 6737f73ab8cf42a9b3b45ec2d9588718

function cariFlm() {
  $("#movie-list").html("");

  //konek ke api public
  $.ajax({
    type: "get",
    url: "https://api.rawg.io/api/platforms",
    dataType: "json",
    data: {
      apikey: "6737f73ab8cf42a9b3b45ec2d9588718",
      //s untuk mencari sebuah flm
      search: $("#search-input").val(), //ambil apapun yang di ketikan user di inputan search
    },
    success: function (result) {
      //cek apakah flm yang dicari ada
      if (result.Response === "True") {
        //ambil hasil pencarian
        let movies = result.Search;

        //lakukan loop
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
                        <div class="col-md-4">
                            <div class="card mt-3">
                                <img src="` +
              data.Poster +
              `" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">` +
              data.Title +
              `</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">` +
              data.Year +
              `</h6>
                                    <a href="#" class="btn btn-primary">Watch Now</a>
                                </div>
                            </div>
                        </div>  
                    `
          );
        });
        //jika hasil sudah keluar hapus isi kolom pencarian
        $("#search-input").val("");
      } else {
        //jika tidak ada
        $("#movie-list").html(
          `
                    <div class="col">
                        <h1 class="text-center">` +
            result.Error +
            `</h1>
                    </div>
                `
        );
      }
    },
  });
}

$("#search-btn").on("click", function () {
  cariFlm();
});

$("#search-input").on("keyup", function (e) {
  //cek jika tombol enter diklik
  if (e.keyCode === 13) {
    cariFlm(); //maka jalankan hasilnya
  }
});
