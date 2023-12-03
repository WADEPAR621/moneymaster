var LiveForms = {};
LiveForms.AppendViewPortClass = function (uniqueId, mobileUnder) {

	var $parent = $("[uniqueid=" + uniqueId + "]").parent();
	var width = $parent.width();

	$parent.removeClass('viewport-sm viewport-md viewport-lg');

	if (width >= mobileUnder)
		$parent.addClass('viewport-sm');
	if (width >= 922)
		$parent.addClass('viewport-md');
	if (width >= 1200)
		$parent.addClass('viewport-lg');

	$("#" + uniqueId + " ul > li.Field").each(function () {
		var $this = $(this);
		var elementWidth = $this.width();
		$this.removeClass('mobile-under');

		if (elementWidth <= mobileUnder)
			$this.addClass('mobile-under');

	});
};
LiveForms.SendDraftSubmission = function (ModuleId, link) {
        var api = eval("LiveFormWebapi" + ModuleId);
        var EmailID = $('#tbUserEmailAddress').val();
        api.webApi.get('views/SendSaveAndResumeLink', 'SendTo=' + EmailID + '&link=' + link).success(function (data) {
            if (data != '' && data == 'Success') {
                $('.SendResumeSubmission .ResponseMsg').removeClass('error').addClass('success').html('The email has been sent to <strong> ' + EmailID + '</strong>');
            }
            else
                $('.SendResumeSubmission .ResponseMsg').removeClass('success').addClass('error').html('Please check your Mail Id');
        });
};