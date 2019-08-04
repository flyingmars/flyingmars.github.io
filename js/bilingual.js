(function($) {

    var leftParagraphs = $('.article-entry .bil-first-column').find('p, h1, h2, h3, h4, h5, h6');
    var rightParagraphs = $('.article-entry .bil-second-column').find('p, h1, h2, h3, h4, h5, h6');

    var align = () => {
        /* 如果頁面寬度大於 800px，進行段落對齊，見下一節 */
        if(window.matchMedia('(min-width: 800px)').matches) {
            leftParagraphs.each((i, thiz) => {
                var left = $(thiz);
                var right = rightParagraphs.eq(i);

                left.removeAttr('style'), right.removeAttr('style');

                /* 取對應兩段高度的最大值 */
                var maxHeight = Math.max(left.height(), right.height());
                left.height(maxHeight), right.height(maxHeight);
            });
        } else {
            leftParagraphs.removeAttr('style'), rightParagraphs.removeAttr('style');
        }
    }

    if(leftParagraphs.size() == rightParagraphs.size()) {
        var resizeHandler = 0;
        /* 監聽視窗大小變化 */
        $(window).resize(() => {
            if(resizeHandler) {
                clearTimeout(resizeHandler);
            }
            resizeHandler = setTimeout(align, 50);
        });
        if($('#main img').size()) {
            $('#main img').load(align);
        } else {
            $(align);
        }
    }
})(jQuery);