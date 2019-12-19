function changeState(el) {
    if (el.readOnly) el.checked=el.readOnly=false;
    else if (!el.checked) el.readOnly=el.indeterminate=true;
}
$('.selectpicker').selectpicker({
    iconBase: 'fa',
    tickIcon: 'fa-check'
});

function enableInput(el) {
    var $input = $(el).parent().siblings(".form-control");
    if (el.checked) {
        $input.prop('disabled', false).attr('placeholder','Uncheck to disable');
    }else if(!el.checked) {
        $input.prop('disabled', true).attr('placeholder','Check to enable');
    }
}