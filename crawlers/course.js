const Crawler = require('../libs/crawler'),
      { crawler } = require('../config/config');

Crawler({
  url: crawler.url.course,
  field: 'course',
  callback () {
  	const $ = window.$,
  	      $item = $('.course-card-list-multi-wrap .course-card-item');

  	const data = [];

  	$item.each((index, item) => {
      const $el = $(item),
            $itemLk = $el.find('.item-img-link');

      const dataItem = {
      	cid: $itemLk.attr('data-id'),
      	href: $itemLk.prop('href'),
      	posterUrl: $itemLk.find('.item-img').prop('src').replace('webp', ''),
      	courseName: $itemLk.find('.item-img').prop('title'),
      	price: $el.find('.item-price').text() == '免费' ? '0' : $el.find('.item-price').text().slice(1),
      	description: $el.find('.item-status-step').text(),
      	studentCount: parseInt($el.find('.item-user').text()),
      	posterKey: ''
      }
      
      data.push(dataItem);
  	});

  	return data;
  }
});