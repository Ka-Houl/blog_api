const Crawler = require('../libs/crawler'),
      { crawler } = require('../config/config');

Crawler({
  url: crawler.url.main,
  callback () {
  	const $ = window.$,
  	      $item = $('.spread-course-ul li'),
  	      mainTitle = $('.agency-spread-wrap h4').text();

  	const data = [];

  	$item.each((index, item) => {
      const $el = $(item),
            $itemLk = $el.find('a');

      const dataItem = {
        cid: parseInt($el.attr('report-tdw').match(/\&(.+?)\&/)[1].split('=')[1]),
      	href: $itemLk.prop('href'),
      	mainTitle,
      	title: $itemLk.prop('title'),
      	posterUrl: $itemLk.find('.spread-course-cover').prop('src').replace('webp', ''),
      	description: $el.find('.spread-course-des').text(),
      	teacherImg: $el.find('.spread-course-face img').prop('src').replace('webp', ''),
      	teacherName: $el.find('.spread-course-face span').eq(0).text(),
      	studentCount: parseInt($el.find('.spread-course-face span').eq(1).text().replace(/[^0-9]/ig, '')),
      	price: parseInt($el.find('.spread-course-price').text().slice(1)),
        posterKey: '',
        teacherImgKey: ''
      };

      data.push(dataItem);
  	});

  	return data;
  }
});