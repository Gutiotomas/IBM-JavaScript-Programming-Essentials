var xhr = new XMLHttpRequest();
var url = 'health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');
  
articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);  

    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
  })};
  xhr.send();


var xhr2 = new XMLHttpRequest();
var url2 = 'news_article.json';
xhr2.open('GET', url2, true);
xhr2.responseType = 'json';

xhr2.onload = function() {
  var news = xhr2.response.articles;
  var newsDiv = document.getElementById('news');

  news.forEach(function(newsArticle) {
    var newsArticleDiv = document.createElement('div');
    newsArticleDiv.classList.add('news');

    var title = document.createElement('h2');
    title.textContent = newsArticle.title;

    var description = document.createElement('p');
    description.textContent = newsArticle.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    newsArticle.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    newsArticle.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    newsArticleDiv.appendChild(title);
    newsArticleDiv.appendChild(description);
    newsArticleDiv.appendChild(waysHeader);
    newsArticleDiv.appendChild(waysList);
    newsArticleDiv.appendChild(benefitsHeader);
    newsArticleDiv.appendChild(benefitsList);
    newsDiv.appendChild(newsArticleDiv);
  });
};
xhr2.send();
