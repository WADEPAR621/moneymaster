/// <reference path="LiveFormValidation.js" />
function validatenumerics(key) {
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes

    if (keycode > 31 && (keycode < 48 || keycode > 57)) {
        return false;
    }
    else return true;
};

//$.validator.messages.wordcount = 'Please enter no more than {0} words';
//$.validator.messages.alphanumeric = 'This field can only contain letters and numbers';
$.validator.addMethod("vmaxlength", $.validator.methods.maxlength, LFValidations.vmaxlength);
$.validator.addMethod('rbrequired', function (value, element) {
    if ($(element).closest('.Field.Radiobutton').find("input:checked").length == 1 && $(element).closest('.Field.Radiobutton').find("input:checked").val() == "&%&" && $(element).closest('.Field.Radiobutton').find('input[type=hidden]').val() == "") {
        return false;
    }
    else
        return true;
}, LFValidations.required);
$.validator.addMethod('cbrequired', function (value, element) {
    if ($(element).closest('.Field.Checkbox').find("input:checked").length == 1 && $(element).closest('.Field.Checkbox').find("input:checked").val() == "&%&" && $(element).closest('.Field.Checkbox').find('input[type=hidden]').val() == "") {
        return false;
    }
    else if ($(element).closest('.Field.Checkbox').find("input:checked").length < 1)
        return false;
    else
        return true;
}, LFValidations.cbrequired);

$.validator.addMethod('matrixCbrequired', function (value, element) {
    if ($(element).closest('tr').find("input:checked").length < 1)
        return false;
    else
        return true;
}, LFValidations.required);

$.validator.addMethod('matrixddlrequired', function (value, element) {
    if ($(element).find('option:selected').index() == 0)
        return false;
    else
        return true;
}, LFValidations.required);

$.validator.addMethod('checkCaptcha', function (value, element) {
    if ($(element).closest('.Field.Checkbox').find("input:checked").length < 1)
        return false;
    else
        return true;
}, LFValidations.cbrequired);

$.validator.addMethod('wordcount', function (value, element) {
    var wordCount = $(element).attr('wordcount');
    if ($(element).val().split(" ").length > wordCount)
        return false;
    else
        return true;
}, LFValidations.wordcount);

$.validator.addMethod('alphanumeric', function (value, element) {
    var ele = $(element).val();
    if (ele != "") {
        var re = /^[a-zA-Z0-9]+$/;
        if (re.test(ele))
            return true;
        else
            return false;
    }
    else
        return true;
}, LFValidations.alphanumeric);

$.validator.addMethod('alphabetic', function (value, element) {
    var ele = $(element).val();
    if (ele != "") {
        var re = /^[a-zA-Zs]+$/;
        if (re.test(ele))
            return true;
        else
            return false;
    }
    else
        return true;
}, LFValidations.alphabetic);

$.validator.addMethod('numeric', function (value, element) {
    var ele = $(element).val();
    if (ele != "") {
        var re = new RegExp("^[0-9]{" + ele.length + "}$");
        if (re.test(ele))
            return true;
        else
            return false;
    }
    else
        return true;
}, LFValidations.numeric);

$.validator.addMethod('custom', function (value, element) {
    if ($(element).parent().children('.customsetting').html() != "") {
        var re = new RegExp($(element).parent().children('.customsetting').html());
        if (re.test(value))
            return true;
        else
            return false;
    }
    else
        return true;
}, LFValidations.custom);


$.validator.addMethod('scorerequired', function (value, element) {
    if ($(element).parent().find('div input[type=hidden]').val() == "")
        return false;
    else
        return true;
}, LFValidations.scorerequired);

$.validator.addMethod('scalerequired', function (value, element) {
    if ($(element).parent().parent().find('input[type=radio]').is(":checked") == true)
        return true;
    else
        return false;
}, LFValidations.scalerequired);

$.validator.addMethod('isvaliddate', function (value, element) {
    var month, day, year, hour, minute;
    if ($(element).val() != "") {
        $($(element).parent().parent().find('span.Field-SubLabel-TextBox')).each(function (index, item) {
            if ($(item).find('input').length != 0) {
                if ($(item).find('input').attr('class').indexOf("datepicker_month") != -1)
                    month = $(item).find('input').val();
                else if ($(item).find('input').attr('class').indexOf("datepicker_day") != -1)
                    day = $(item).find('input').val();
                else if ($(item).find('input').attr('class').indexOf("datepicker_year") != -1)
                    year = $(item).find('input').val();
            }
            if ($(item).find('select').length != 0) {
                if ($(item).find('select').attr('class').indexOf("datepicker_month") != -1)
                    month = $(item).find('select').val();
                if (month == "0")
                    month = "";
                if ($(item).find('select').attr('class').indexOf("datepicker_hour") != -1)
                    hour = $(item).find('select').val();
                else if ($(item).find('select').attr('class').indexOf("datepicker_minute") != -1)
                    minute = $(item).find('select').val();
            }
        });
        if (month == undefined)
            month = "";
        if (day == undefined)
            day = "";
        if (year == undefined)
            year = "";
        if (hour == undefined)
            hour = "";
        if (minute == undefined)
            minute = "";
        if (month != "" && day != "" && year != "" && hour != "" && minute != "") {
            var dt = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), 00, 00);
            if (dt.getDate() != parseInt(day, 10) || dt.getMonth() != (parseInt(month, 10) - 1) || dt.getFullYear() != parseInt(year, 10)) {
                return false;
            }
            else
                return true;
        }
        else if (month != "" && day != "" && year != "" && hour == "" && minute == "") {
            var dt = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), 00, 00, 00, 00);
            if (dt.getDate() != parseInt(day, 10) || dt.getMonth() != (parseInt(month, 10) - 1) || dt.getFullYear() != parseInt(year, 10)) {
                return false;
            }
            else
                return true;
        }
        else if (month == "" && (day != "" || year != ""))
            return false;
        else if (day == "" && (month != "" || year != ""))
            return false;
        else if (year == "" && (day != "" || month != ""))
            return false;
        else if (year == "" && day == "" && month == "" && (hour != "" || minute != ""))
            return false;
        else if (year != "" && day != "" && month != "" && (hour == "" || minute == ""))
            return false;
        else
            return true;
    }
    else
        return true;
}, LFValidations.isvaliddate);

$.validator.addMethod('furequired', function (value, element) {
    if ($(element).parent().find('.plupload_content').length == 0)
        return true;
    if ($(element).parent().find('.plupload_content').attr('controlid').length > 0) {
        var object = $(element).parent().find('.plupload_content').attr('controlid') + ".files.length==0";
        var resume = true;
        if ($(element).parent().find('.fileresume').length > 0) {
            var val = $("#" + $(element).parent().find('.fileresume').attr('id')).val();
            if (val !== null && val.trim() !== '') {
                resume = false;
            }
        }

        if (eval(object) && resume)
            return false;
        else
            return true;
    }
    else
        return true;
}, LFValidations.furequired);

$.validator.addMethod('fbrequired', function (value, element) {
    var ele = $(element).val();
    if (ele) {
        return true;
    }
    else
        return false;
}, LFValidations.fbrequired);

$(document).ready(function () {

    $(".Field.Phone input[type=text].phone").each(function (index) {
        if (typeof $(this).attr("placeholder") != 'undefined')
            $("#" + $(this).attr("id")).mask($(this).attr("placeholder"), { clearIfNotMatch: true });
    });

    $(".Field.Textbox input[type=text].mask").each(function (index) {
        if (typeof $(this).attr("placeholder") != 'undefined')
            $("#" + $(this).attr("id")).mask($(this).attr("placeholder"), { clearIfNotMatch: true });
    });

    $(".Field.Password .strength").each(function (index) {
        var options = {};
        options.ui = {
            container: "#" + $(this).attr("id"),
            showVerdictsInsideProgressBar: true,
            progressBarEmptyPercentage: 0,
            progressBarMinPercentage: 25,
            viewports: {
                progress: "#" + $(this).attr("id") + "_viewport_progress"
            }
        };
        $("#" + $(this).attr("id") + '_Password').pwstrength(options);
        $("#" + $(this).attr("id") + '_Password').pwstrength("addRule", "testRule" + index, function (options, word, score) {
            return word.match(/[0-9]/) && score;
        }, 5, true);
    });

    $('.Field.Required.Fileupload input').attr("furequired", "furequired");
    $(".Field.Required.Fileupload input.fileresume").removeAttr('furequired');

    $('.Field.CkEditor.Required div.Field-Container-Wide').attr("editorrequired", "true");
    $('.Field.CkEditor.Required div.Field-Container').attr("editorrequired", "true");

    $(".Field.CkEditor").each(function (index) {
    	if (typeof $(this).attr("guid") != 'undefined') {
    		var GUID = $(this).attr("guid").replace(/-/g, '');
    		$(this).addClass('ck' + GUID.toLowerCase() + 'ck');
    	}
    });

    //Do Not Validate Required on Hidden Fields such as Allow Other in Radiobutton/Checkboxes
    $('.Field input[type=hidden]').addClass("nrequired");

    //Validate Required on All Inputs, Textareas & Selects Except Checkbox and those that explictly have "nrequired" class
    $(".Field.Required:not(.Checkbox) input:not(.nrequired),.Field.Required select,.Field.Required textarea").attr("required", "");

    //Validate Required on Radiobutton other fieds validate
    $(".Field.Required.Radiobutton input[type=radio]:not(.nrequired)").attr("rbrequired", "rbrequired");

    //Validate Required on Checkbox 
    $(".Field.Required.Checkbox input[type=checkbox]:not(.nrequired)").attr("cbrequired", "cbrequired");

    //Validate Required on matrix checkbox 
    $(".Field.Required.Matrix input[type=checkbox]").removeAttr('required');
    $(".Field.Required.Matrix input[type=checkbox]").attr("matrixCbrequired", "matrixCbrequired");

    //Validate Required on matrix dropdownlist
    $(".Field.Required.Matrix select").removeAttr('required');
    $(".Field.Required.Matrix select").attr("matrixddlrequired", "matrixddlrequired");

    //Validate Email
    $(".Field.Email input[type=text]").attr("email", "email");

    //Validate Cutom in Email field
    $(".Field.Email.Custom input[type=text]").removeAttr('email');
    $(".Field.Email.Custom input[type=text]").attr("custom", "custom");

    //Validate CreditCard
    $(".Field.CreditCard input[type=text].CardNumber").attr("creditcard", "creditcard");

    //Validate Alphanumeric
    $(".Field.AlphaNumeric input[type=text]").attr("alphanumeric", "alphanumeric");

    //Validate Custom
    $(".Field.Textbox.Custom input[type=text]").attr("custom", "custom");
    $(".Field.Textarea.Custom textarea").attr("custom", "custom");

    //Validate Alphabetic 
    $(".Field.Alphabetic input[type=text]").attr("alphabetic", "alphabetic");

    //Validate Numeric  
    $(".Field.Numeric input[type=text]").attr("numeric", "numeric");
    $(".Field.CreditCard input[type=text].CVV").attr("numeric", "numeric");

    // Validate Datetime  
    $(".Field.Datetime input[type=text]").attr("isvaliddate", "isvaliddate");
    $(".Field.Datetime select").attr("isvaliddate", "isvaliddate");

    // Validate BirthDate  
    $(".Field.Birthdate input[type=text]").attr("isvaliddate", "isvaliddate");
    $(".Field.Birthdate select").attr("isvaliddate", "isvaliddate");

    //Validate StarRating
    $(".Field.Required.StarRating input[type=hidden].starratinghidden").removeClass('nrequired').attr("scorerequired", "scorerequired");

    //Validate ScaleRating
    $(".Field.Required.ScaleRating input[type=hidden]").attr("scalerequired", "scalerequired");
    $(".Field.Required.ScaleRating input[type=radio]").removeAttr('required');

    $(".Field.BrowseFile.Required input[required=required]").removeAttr('required');

    //Handle Required on Radiobutton & Checkbox Allow Other
    //Code Commented since Valiation Plugin is unable to handle the error placement for a Textbox that's inside a label
    //$('.Field.Radiobutton input:not([type=hidden]),.Field.Checkbox input[type=checkbox]:not([type=hidden])').change(function () {
    //    if ($(this).val() == 'Other') {
    //        $(this).closest('.Field-Container').find('input[type=text]').removeClass('nrequired').attr('required', '');
    //    } else {
    //        $(this).closest('.Field-Container').find('input[type=text]').addClass('nrequired').removeAttr('required');
    //    }
    //});  


    // Initialize validation on the entire ASP.NET form.
    jQuery.validator.setDefaults({
        //debug: true,
        onsubmit: false,
        ignore: ".novalidate",
        rules: {
            success: function (error) {
                error.remove();
            }
        },
        errorPlacement: function (error, element) {

            if (element.closest('.Field').hasClass("Radiobutton")) {
                error.insertAfter(element.closest('.Field').find('.Field-Container'));
                error.insertAfter(element.closest('.Field').find('.Field-Container-Wide'));
                return;
            }
            else if (element.closest('.Field').hasClass("Matrix")) {
                if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                    if ($(element).closest('tr').find('.tdBlank').find('.error').length < 1)
                        element.closest('tr').find('.tdBlank').append(error);
                    return;
                }
                else if ($(element).attr('type') == 'text' || $(element).attr('type') == 'number' || $(element).is('select')) {
                    $(element).closest('tbody').find('.tdBlank').find('.error').remove();
                    $(element).closest('tbody').find('.tdBlank').first().append(error);
                    return;
                }
            }
            else if (element.closest('.Field').hasClass("Phone")) {
                if (element.hasClass('AreaCode'))
                    return;
            }
            else if (element.closest('.Field').hasClass("Checkbox") || element.closest('.Field').hasClass("Datetime") || element.closest('.Field').hasClass("Time") || element.closest('.Field').hasClass("Birthdate") || element.closest('.Field').hasClass("Fullname") || element.closest('.Field').hasClass("Address")) {

                if (element.closest('.Field').find('label.error').length == 0 || (element.closest('.Field').find('label.error').length > 0 && element.closest('.Field').find('label.error').is(":visible") == false)) {
                    error.insertAfter(element.closest('.Field').find('.Field-Container'));
                    error.insertAfter(element.closest('.Field').find('.Field-Container-Wide'));
                }
                return;

            }



            error.insertAfter(element);

        }
    });

    //$("#form1").validate({
    //    // This prevents validation from running on every
    //    //  form submission by default.

    //    onsubmit: false,


    //});

    // Search for controls marked with the causesValidation flag 
    //  that are contained anywhere within elements marked as 
    //  validationGroups, and wire their click event up.
    $('.validationGroup .causesValidation').click(ValidateAndSubmit);
    $('.validationGroup .SaveAndResume').click(SaveAndResume);

    // Select any input[type=text] elements within a validation group
    //  and attach keydown handlers to all of them.
    $('.validationGroup :password,.validationGroup :text').keydown(function (evt) {
        // Only execute validation if the key pressed was enter.
        if (evt.keyCode == 13) {
            ValidateAndSubmit(evt);
        }
    });
});

function SaveAndResume() {
    //Finish client side operations
    $('.Field.Currency input').each(function () {
        $(this).next().val($(this).maskMoney('unmasked')[0]);
    });
};

function ValidateAndSubmit(evt) {

    //Show the loading icons
    jQuery(".lfoverlay").show();
    jQuery(".lfmodal").show();

    //Finish client side operations
    $('.Field.Currency input').each(function () {
        $(this).next().val($(this).maskMoney('unmasked')[0]);
    });



    $('.Field.Dropdown select').each(function () {
        $(this).prev().val($(this).find('option:selected').text());
    });

    $('.Field.Radiobutton table').each(function () {
        $(this).prev().val($(this).find('input:checked').next().text());
    });

    $('.Field.Checkbox table').each(function () {
        $(this).prev().val($(this).find('input:checkbox:checked').map(function () {
            return $(this).next().text();
        }).get().join(','));
    });




    // Ascend from the button that triggered this click event 
    //  until we find a container element flagged with 
    //  .validationGroup and store a reference to that element.

    var $group = $(evt.currentTarget).parents('.validationGroup');

    var isValid = true;
    // Descending from that .validationGroup element, find any input
    //  elements within it, iterate over them, and run validation on 
    //  each of them.
    $group.validate();
    var focus = new Array();
    $group.find(':input').each(function (i, item) {
        if ($(item).is(':visible') && !$(item).valid()) {
            focus.push(item);
            isValid = false;
        }
        else if ($(item).attr('furequired') == "furequired" && !$(item).valid()) {
            focus.push(item);
            isValid = false;
        }
        else if ($(item).attr('fbrequired') == "fbrequired" && !$(item).valid()) {
            focus.push(item);
            isValid = false;
        }
        else if ($(item).attr('ckeditor') == "required") {
            if ($(item).parent('div').attr('editorrequired') != undefined && $(item).parent('div').attr('editorrequired') == "true") {
                $.each(CKEDITOR.instances, function (key, editor) {
                    if ($(editor.element.$).parent('div').parent('li') != undefined && $(editor.element.$).parent('div').parent('li').is(':visible') == true) {
                        if ($(item).attr('ckeditor') == $(editor.element.$).attr('ckeditor')) {
                            if (editor.getData() == "") {
                                $("#label" + $(item).attr('ckeditor') + "").remove();
                                $("<label id=label" + $(item).attr('ckeditor') + " class=\"error\">" + LFValidations.required + "</label>").insertAfter($(item).parent('div').children('div'));
                                isValid = false;
                            }
                            else {
                                $("#label" + $(item).attr('ckeditor') + "").remove();
                            }
                        }
                    }
                })
            }
        }
        var pagesection_Visible = true;
        var pagesection = $(item).closest('ul.page-break-section'); // in case of multiple captcha in a form with page breck 
        if (pagesection && !$(pagesection).is(':visible'))
            pagesection_Visible = false;
        if (pagesection_Visible && $(item).hasClass('g-recaptcha-response') && !$(item).hasClass('novalidate')) {
            var captchadiv = $(item).closest('div[googlerecaptchaid]');
            var captcharesponse = grecaptcha.getResponse($(captchadiv).attr('googlerecaptchaid'));
            $("#" + $(captchadiv).attr("id") + " .error").remove();
            if (captcharesponse.length == 0) {
                isValid = false;
                $("#" + $(captchadiv).attr("id")).append('<label class="error">' + LFValidations.recaptcha + '</label>');
            }

        }

    });
    //password validate
    $group.find('.Field.Password').each(function (i, item) {
        var password = "", confirmpassword = "";
        $(item).find(':input').each(function (i, inputitem) {
            if ($(inputitem).is(':visible')) {
                $(inputitem).next('.conmessage').remove();
                if ($(inputitem).hasClass('password')) {
                    password = inputitem.value;
                }
                else if ($(inputitem).hasClass('confirmpassword')) {
                    $(inputitem).next('.conmessage').remove();
                    confirmpassword = inputitem.value;
                    if (password != confirmpassword) {
                        focus.push(inputitem);
                        $('<label class="error conmessage">' + LFValidations.matchpassmessage + '</label>').insertAfter(inputitem);
                        isValid = false;
                    }
                }
            }
        });

    });


    //validate Extension fields
    isValid = ValidateExtension($group, focus, isValid);

    if ($(focus).length > 0) {
        $('html,body').animate({ scrollTop: $(focus).first().closest('li').first().offset().top - 100 }, 500, function () { $(focus).first().focus(); });
        //$(focus).first().focus();
    }
    // If any fields failed validation, prevent the button's click 
    //  event from triggering form submission.
    if (!isValid) {
        jQuery(".lfoverlay").hide();
        jQuery(".lfmodal").hide();
        evt.preventDefault();
    }
    else if (evt.keyCode == 13) {
        var SubmitButton = $group.find('.causesValidation.bSubmit');
        if (SubmitButton.length > 0) {
            SubmitButton.click();
            evt.preventDefault();
        }
    }
    //else {

    //    var url = window.location.href;
    //    if (url.indexOf("?") > -1)
    //        url = url + '&mid=' + parseInt($(this).attr("mid"));
    //    else
    //        url = url + '?mid=' + parseInt($(this).attr("mid"));

    //    $.post(url, $('form').serializeArray()).done(function (data) {
    //        var $group = $(evt.currentTarget).parents('.validationGroup');
    //        var SubmitButton = $group.find('.causesValidation.bSubmit');
    //        jQuery(".lfoverlay").hide();
    //        jQuery(".lfmodal").hide();
    //        var html = $.parseHTML(data);
    //        var dom = $(data);
    //        $('body').find('[uniqueid="LiveForm' + parseInt($(SubmitButton).attr("mid")) + '"]').html(dom.find('[uniqueid="LiveForm' + parseInt($(SubmitButton).attr("mid")) + '"]').html());
    //        $.each($(data).find('script'), function (k, v) {
    //            var src = $(v).attr("src");
    //            if (src != undefined && src.indexOf("DesktopModules/LiveForms") != -1) {
    //                eval(v);
    //            }
    //        });
    //    })
    //    evt.preventDefault();
    //}
}
