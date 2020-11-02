function buildCardDeck {
    
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {

    $("#collapsibleBtn").append(
    `<div class="card">
        <a href="#" target="_blank"></a> <!-- don't forget to move closing a-tag when adding to this card -->
            <img class="card-img-top" src="./images/comingSoon320.jpg" alt="coming soon">
        <article class="card-body">
            <h5 class="card-title">Coming Soon</h5>
            <p class="card-text">Bacon ipsum dolor amet sirloin chuck swine alcatra. 
            Venison flank ribeye meatball pork, pork loin swine. 
            Brisket meatloaf boudin chislic sirloin cupim, tri-tip chicken prosciutto landjaeger picanha biltong ham shankle.</p>
        </article>
    </div>`
    );  
  })
};