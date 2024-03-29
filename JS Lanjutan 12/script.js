// Fetch
// $('.search-button').on('click', function() {

//     $.ajax({ // Menggunakan ajax ( Jquery )
//         url: 'http://www.omdbapi.com/?apikey=eb9b614&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
    
//         $('.movie-container').html(cards)
    
    
//         // ketika tombol detail di klik
//         $('.modal-detail-button').on('click', function() {
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=eb9b614&i=' + $(this).data('imdbid'),
//                 success: m => {
//                   const movieDetail = showMovieDetail(m);
    
//                  $('.modal-body').html(movieDetail);
//                 },
//                 error: (e) => {
//                     console.log(e.responseText);
//                 }
//             })
//         })
    
    
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// })

// Fetch => Mengembalikan Promise

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=eb9b614&s=' + inputKeyword.value)
        .then(Response => Response.json())
        .then(Response => {
            const movies = Response.search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards;


            // Ketika Tombol Detail diklik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach( btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=eb9b614&i= ' + imdbid)
                        .then(Response => Response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m)
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        });
                });
            })
        })

})


function showCards(m) {
    return  `<div class="col-md-4 my-3">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
    </div>
    </div>
</div>`;
}

function showMovieDetail(m) {
    return  `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Wrriter : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}

// Tambahan Fetch()
/* Method API JS untuk mengambil resource dari jaringan,
dan mengembalikan promise ketika response tersedia */
// fetch(resource(URL / Object Request), init(opsi dlm object, default = get))
// Response => Promise