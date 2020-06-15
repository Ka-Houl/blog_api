const Crawler = require('../libs/crawler'),
      { crawler } = require('../config/config');

Crawler({
  url: crawler.url.main,
  callback () {
    console.log('slider---Crawler-callback')
  	const $ = window.$,
  	      $item = $('.agency-big-banner-ul .agency-big-banner-li');

  	const data = [];

  	$item.each((index, item) => {
      const $el = $(item),
            $elLink = $el.find('.js-banner-btnqq');

      const dataItem = {
        cid: $elLink.attr('data-id'),
        href: $elLink.prop('href'),
        title: $elLink.prop('title'),
        imgUrl: $elLink.find('img').prop('src'),
        imgKey: ''
      };

      data.push(dataItem);
  	});

  	return data;
  }
});

// console.log(111,'1+6=',1+6)