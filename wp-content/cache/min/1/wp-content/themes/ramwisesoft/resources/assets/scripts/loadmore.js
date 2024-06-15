jQuery(function($) {
    $('.loadmorebtn').click(function() {
        var button = $(this),
            data = {
                'action': 'loadmore',
                'query': loadmore_params.posts,
                'page': loadmore_params.current_page,
            };
        $.ajax({
            url: loadmore_params.ajaxurl,
            data: data,
            type: 'POST',
            beforeSend: function(xhr) {
                button.text('Loading...')
            },
            success: function(data) {
                if (data) {
                    button.text('Load more').prev().before(data);
                    loadmore_params.current_page++;
                    $('#loadmoreInsights').append(data.html);
                    if (loadmore_params.current_page == data.max_pages)
                        button.remove()
                } else {
                    button.remove()
                }
            }
        })
    })
})