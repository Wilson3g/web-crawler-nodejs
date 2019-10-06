const request = require('request');
const cheerio = require('cheerio');

request('https://www.imdb.com/chart/toptv/?sort=ir,desc&mode=simple&page=1', function(err, res, body){
    if(err)
        console.log('Erro: '+ err);

    var $ = cheerio.load(body);
    $('.lister-list tr').each(function(){
        var title = $(this).find('.titleColumn a').text().trim();
        var rate = $(this).find('.imdbRating strong').text().trim();

        if(rate >= 9.0 && rate <= 9.5){
            console.log('Nome: ' + title, 'Pontos: ' + rate);
        }
        
    });
        
});