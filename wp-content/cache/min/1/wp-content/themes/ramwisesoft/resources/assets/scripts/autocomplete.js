jQuery
let $ = function() {
    console.log('anything');
};
{
    $('#searchedBy').autocomplete({
        appendTo: '#searchResultsContainer__js',
        source: function(request, response) {
            let data = `action=autocompleteSearch&term=` + request.term;
            $.ajax({
                dataType: 'json',
                url: ramwisesoft_object.ajax_url,
                data: data,
                success: function(res) {
                    response(res.data)
                }
            })
        },
    }).focus(function() {
        $(this).data("uiAutocomplete").search($(this).val())
    }).data("ui-autocomplete")._renderItem = function(ul, item) {
        var inner_html = "<a href='" + item.link + "'>" + item.label + "</a>";
        return $("<li style = 'padding:0 0 0 20px;' ></li>").data("item.autocomplete", item).append(inner_html).appendTo(ul)
    }
    $('.suggested-search-results li').each(function() {
        var item = $(this);
        item.on('click', function() {
            $('#searchedBy').val(item.text());
            $('#searchedBy').trigger('focus')
        })
    });
    $('#searchedBy').focus(function() {
        if ($('#searchedBy').val() == '') {
            $(".suggested-search-results").removeClass('d-none')
        } else {
            $(".suggested-search-results").addClass('d-none')
        }
    });
    $('#searchedBy').keyup(function() {
        if ($('#searchedBy').val() == '') {
            $(".suggested-search-results").removeClass('d-none')
        } else {
            $(".suggested-search-results").addClass('d-none')
        }
    });
    $(document).on('click', function(e) {
        if (e.target.id != 'searchedBy') {
            $(".suggested-search-results").addClass('d-none')
        }
    })
}