var LForm_Time;
var IsSqlsingle = true;
var IsSqlmultiple = false;
var loadingTime;
var field = new Array();
$(document).ready(function () {

    $('.Form_Navigation').find('li:first-child').addClass('active');
    $('.Form_title').find('li:first-child').addClass('active');


    $('.LiveForm').each(function (item, obj) {
        var LF = $(obj).attr('uniqueid');
        if ($(window).width() <= 768) {
            $('#' + LF + ' ul.Form_Navigation li').hide().slice(0, 2).show();
            $('#' + LF + ' ul.Form_title li').hide().slice(0, 2).show();
        }
        else {
            $('#' + LF + ' ul.Form_Navigation li').hide().slice(0, 5).show();
            $('#' + LF + ' ul.Form_title li').hide().slice(0, 5).show();

        }
    });
    //we also want to check condition on page load to match with the default values
    ConditionCheck(null);

    $('[condition] select,[condition] input[type="radio"]').each(function (i, obj) {
        $(obj).bind("keyup change FilesAdded", function () {
            ConditionCheck(obj);
        });
    });
    $('[condition] input[type="checkbox"], [condition] input[type="tel"]').each(function (i, obj) {
        $(obj).bind("keyup change FilesAdded", debounce(function (event) {
            ConditionCheck(obj);
        }, 1500));
    });
    $('[condition] input[type="text"],[condition] textarea').each(function (i, obj) {
        $(obj).bind("blur", function () {
            ConditionCheck(obj);
        });
    });
    $('[condition]').find('.StarRatingRequired').find('div img').each(function (i, obj) {
        $(obj).bind("click", function () {
            ConditionCheck(obj);
        });
    });
    $(window).load(function (ob) {//window.load used because of late binding

        $('.LiveForm .Fileupload div[controlid]').each(function (i, obj) {
            eval(jQuery(obj).attr("controlid")).bind("FilesAdded", function (i, files) {
                ConditionCheck(obj);
            });
            eval(jQuery(obj).attr("controlid")).bind("FilesRemoved", function (i, files) {
                ConditionCheck(obj);
            });

        });
    });
    IsSqlmultiple = true;

    $('.DvLfBrowsefile').click();
});
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
function ConditionCheck(obj, ele) {

    loadingTime = new Date();

    if ($('.ClientSideActionJson') != 'undefined' && $('.ClientSideActionJson').val() != "") {
        var clientActions = $(".ClientSideActionJson[value!='[]']");  // get client action from hidden field
        field = new Array();
        $.each(clientActions, function (key, value) {
            var conditionalActions = jQuery.parseJSON($(value).val());
            var ModuleId = $(value).attr("mid");
            var PortalId = $(value).attr("pid");
            //$.each(conditionalActions, function (key, value) {
            for (var caindex = 0; caindex < conditionalActions.length; caindex++) {
                var IscheckCon = true;
                var condition_action = conditionalActions[caindex];
                if (obj) {
                    IscheckCon = false;
                    var conditions = condition_action.ConditionSet.Conditions;
                    for (var con_index = 0; con_index < conditions.length; con_index++) {
                        if (conditions[con_index].FieldId === $(obj).parents("li.Field").attr('guid')) {
                            IscheckCon = true;
                        }
                    }
                    var actions = condition_action.Actions;
                    for (var act_index = 0; act_index < actions.length; act_index++) {
                        if (actions[act_index].FriendlyName === "Evaluating JavaScript") {
                            if (actions[act_index].Script.indexOf($(obj).parents("li.Field").attr('guid')) !== -1) {
                                IscheckCon = true;
                            }
                        }
                        else if (actions[act_index].FriendlyName === "SQLQuery") {
                            if (actions[act_index].Query.indexOf($(obj).parents("li.Field").attr('guid')) !== -1) {
                                IscheckCon = true;
                            }
                        }
                    }
                }
                if (IscheckCon) {
                    ConditionalActionCheck(obj, ele, condition_action, ModuleId, PortalId);
                    //if (!isLoop) {
                    //	setTimeout(function () {
                    //		ConditionalActionCheck(obj, ele, condition_action, ModuleId, PortalId);
                    //	}, 10);
                    //}
                    //else
                    //	ConditionalActionCheck(obj, ele, condition_action);
                }
            }
        });

        setTimeout(function () {
            $(".lfoverlay, .lfmodal").hide();
            IsSqlsingle = false;
        }, 10);
    }
}
function ConditionalActionCheck(obj, ele, conditionalActions, ModuleId, PortalId) {

    if (new Date() - loadingTime > 1000)
        $(".lfoverlay, .lfmodal").show();

    var cavalue = conditionalActions;
    var action; var script = [];
    if (typeof cavalue.Actions != 'undefined') {
        action = cavalue.Actions[0];
        action.ModuleId = ModuleId;
        action.PortalId = PortalId;
        action.GUID = cavalue.GUID;
    }

    if (typeof cavalue.ConditionSet != 'undefined') {
        for (var index = 0; index < cavalue.ConditionSet.Conditions.length; index++) {
            var condition = cavalue.ConditionSet.Conditions[index];

            if (obj == null || obj == 'undefined') {
                obj = jQuery("[guid='" + condition.FieldId + "']").children().first();
            }

            var element = '';
            if ($(obj).parents('li').hasClass('Textbox'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            if ($(obj).parents('li').hasClass('Currency')) {
                if ($.browser.device)
                    element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='tel']");
                else
                    element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            }
            else if ($(obj).parents('li').hasClass('Datetime'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Number'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Fullname'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Address'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('CreditCard'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Phone'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Email'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
            else if ($(obj).parents('li').hasClass('Textarea'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] textarea");
            else if ($(obj).parents('li').hasClass('Dropdown'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] select");
            else if ($(obj).parents('li').hasClass('Radiobutton'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='radio']:checked");
            else if ($(obj).parents('li').hasClass('ScaleRating'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='radio']:checked");
            else if ($(obj).parents('li').hasClass('Checkbox'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='checkbox']:checked");
            else if ($(obj).parents('li').hasClass('Fileupload'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] div[controlid]");
            else if ($(obj).parents('li').hasClass('StarRating'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "']").find('.StarRatingRequired').find('div');
            else if ($(obj).parents('li').hasClass('Matrix'))
                element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");

            if (element != '' && element.length == 0) {
                var conditionObject = jQuery(".LiveForm li[guid='" + condition.FieldId + "']");
                element = getElement(conditionObject, condition);//get condition field if no element above found
            }
            if (element != 'undefined' && element.length > 0 && $(element).parents('li').attr('guid') == condition.FieldId) {
                //element 
                var cScript = '';
                var ElementLength = element.length;
                for (var i = 0; i < ElementLength; i++) {// in case of multiple elements found
                    var currentelement = element[i];
                    if (cScript != '') {
                        if (ElementLength > 1 && condition.DisplayName != "Is Selected") {//handling control groups required
                            cScript += " && ";
                        }
                        else {
                            cScript += " || ";
                        }
                    }
                    if (typeof $(currentelement).attr("id") != 'undefined' && $(currentelement).attr('class') != "plupload_content" && $(currentelement).parent('div').attr('class') != "StarRatingRequired" && $(obj).parents('li').hasClass('Currency') == false)
                        cScript += "jQuery('#" + $(currentelement).attr("id") + "').val().replace(\"'\",'\"') ";
                    else if ($(obj).parents('li').hasClass('Currency') == true)
                        cScript += "element.maskMoney('unmasked')[0]";

                    if (condition.CompareTo) {
                        condition.CompareTo = condition.CompareTo.replace("'", '"');
                    }

                    if (cScript != '' || cScript.length > 0) {
                        if (condition.DisplayName == "Is Equal To" || condition.DisplayName == "Is Selected")
                            cScript += "==" + " '" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Less Than")
                            cScript += "<" + "" + condition.CompareTo + "&&" + cScript + "!=''";
                        else if (condition.DisplayName == "Greater Than")
                            cScript += ">" + "" + condition.CompareTo + "&&" + cScript + "!=''";
                        else if (condition.DisplayName == "Is Not Equal To" || condition.DisplayName == "Not Selected")
                            cScript += "!=" + " '" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Is Filled")
                            cScript += "!= ''";
                        else if (condition.DisplayName == "Is Empty")
                            cScript += "== ''";
                        else if (condition.DisplayName == "Contains")
                            cScript += ".indexOf('" + condition.CompareTo + "')!=-1";
                        else if (condition.DisplayName == "Does Not Contains")
                            cScript += ".indexOf('" + condition.CompareTo + "')==-1";
                        else if (condition.DisplayName == "Starts With")
                            cScript += ".indexOf('" + condition.CompareTo + "')==0";
                        else if (condition.DisplayName == "Doesn't Start With")
                            cScript += ".indexOf('" + condition.CompareTo + "')!=0";
                        else if (condition.DisplayName == "Ends With")
                            cScript += ".substr(-" + condition.CompareTo.length + ")=='" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Doesn't End With")
                            cScript += ".substr(-" + condition.CompareTo.length + ")!='" + condition.CompareTo + "'";
                    }
                    if ($(currentelement).attr('class') == "plupload_content") {
                        if (condition.DisplayName == "Is Filled") {
                            cScript += " " + jQuery(currentelement).attr("controlid") + ".files.length > 0 ";//pending task find foreach fileupload for checking each file
                        }
                        else if (condition.DisplayName == "Is Empty") {
                            cScript += " " + jQuery(currentelement).attr("controlid") + ".files.length == 0 ";
                        }
                    }
                    if ($(currentelement).parent('div').attr('class') == "StarRatingRequired") {
                        if (condition.DisplayName == "Is Equal To")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score')=='" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Is Not Equal To")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score')!='" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Less Than")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score')<'" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Greater Than")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score')>'" + condition.CompareTo + "'";
                        else if (condition.DisplayName == "Is Filled")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score') > 0";
                        else if (condition.DisplayName == "Is Empty")
                            cScript += "jQuery('#" + currentelement.id + "').raty('score') == 'undefined' || jQuery('#" + currentelement.id + "').raty('score') == 0";
                    };
                }
                if (cScript != '') {
                    script.push(cScript);
                    cScript = '';
                }
            }
            else if (($(jQuery(".LiveForm li[guid='" + condition.FieldId + "']")).hasClass('Radiobutton') || $(jQuery(".LiveForm li[guid='" + condition.FieldId + "']")).hasClass('Checkbox')) && condition.DisplayName == "Not Selected") {
                script.push(true);
            }
            else if (($(jQuery(".LiveForm li[guid='" + condition.FieldId + "']")).hasClass('Radiobutton') || $(jQuery(".LiveForm li[guid='" + condition.FieldId + "']")).hasClass('Checkbox')) && condition.DisplayName == "Is Empty") {
                script.push(true);
            }
            else
                script.push(false);
        }
        var evalScript = '';
        $.each(script, function (key, test) {
            if (evalScript != '') {
                if (cavalue.ConditionSet.MatchCondition == 1)//and condition
                    evalScript += " && ";
                else
                    evalScript += " || ";
            }
            evalScript += test;
        });
        if (evalScript == "jQuery('#undefined').val() != ''") {
            evalScript = '';
        }

        if (action.FriendlyName == "SQLQuery") {
            var guid = $($(obj).closest('.Field')).attr("guid");
            if (IsSqlsingle) {
                PerformAction(evalScript, action, obj, element, ele);
            }
            if (action.FieldValue != guid && action.Query != "" && IsSqlmultiple == true) {
                var isavl = false;
                $.each(field, function (index, value) {
                    if (action.Query.indexOf(value) > -1) {
                        isavl = true;
                        return false;
                    }
                    else
                        isavl = false;
                });
                if (isavl || action.Query.indexOf(guid) > -1) {
                    PerformAction(evalScript, action, obj, element, ele);
                    field.push(action.FieldValue);
                }
            }
        }
        else if (action.FriendlyName == "Evaluating JavaScript") {
            PerformAction(evalScript, action, obj, element, ele);
        }
        else if (action.FriendlyName == "Create Ticket") {
            PerformAction(evalScript, action, obj, element, ele);
        }
        else if (evalScript != '') {
            PerformAction(evalScript, action, obj, element, ele);
        }
        else if (evalScript == '' && $(element).attr('class') == "plupload_content") {
            PerformAction(evalScript, action, obj, element, ele);
        }
    }
    //IsSqlsingle = false;	
}
function getElement(conditionObject, condition) {
    if ($(conditionObject).hasClass('Textbox'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    if ($(conditionObject).hasClass('Currency')) {
        if ($.browser.device)
            element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='tel']");
        else
            element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    }
    else if ($(conditionObject).hasClass('Datetime'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Number'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Fullname'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Address'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('CreditCard'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Phone'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Email'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");
    else if ($(conditionObject).hasClass('Textarea'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] textarea");
    else if ($(conditionObject).hasClass('Dropdown'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] select");
    else if ($(conditionObject).hasClass('Radiobutton'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='radio']:checked");
    else if ($(conditionObject).hasClass('ScaleRating'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='radio']:checked");
    else if ($(conditionObject).hasClass('Checkbox'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='checkbox']:checked");
    else if ($(conditionObject).hasClass('Fileupload'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] div[controlid]");
    else if ($(conditionObject).hasClass('StarRating'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "']").find('.StarRatingRequired').find('div');
    else if ($(conditionObject).hasClass('Matrix'))
        element = jQuery(".LiveForm li[guid='" + condition.FieldId + "'] input[type='text']");

    return element;
}
function PerformAction(evalScript, action, obj, element, ele) {
    var result = eval(evalScript);

    if (action.FriendlyName == "Show Hide Field") {
        var ControlsToHideShow = action.ControlToHideShow.split(',');
        $.each(ControlsToHideShow, function (i, value) {
            if (action.HideShowType == "Show" || action.HideShowType == "Show Multiple") {
                if (result) {
                    $(".LiveForm li[guid='" + value + "']").find('input[furequired],input[scalerequired],input[scorerequired]').removeClass("novalidate");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).removeClass('novalidate');
                    });
                    if ($(".LiveForm li[guid='" + value + "']").hasClass("form-col-12"))
                        $(".LiveForm li[guid='" + value + "']").css("display", "block");
                    else
                        $(".LiveForm li[guid='" + value + "']").css("visibility", "visible");
                }
                else {
                    $(".LiveForm li[guid='" + value + "']").find('input[furequired],input[scalerequired],input[scorerequired]').addClass("novalidate");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).addClass('novalidate');
                    });
                    if ($(".LiveForm li[guid='" + value + "']").hasClass("form-col-12"))
                        $(".LiveForm li[guid='" + value + "']").css("display", "none");
                    else
                        $(".LiveForm li[guid='" + value + "']").css("visibility", "hidden");
                }
            }
            if (action.HideShowType == "Hide" || action.HideShowType == "Hide Multiple") {
                if (result) {
                    $(".LiveForm li[guid='" + value + "']").find('input[furequired],input[scalerequired],input[scorerequired]').addClass("novalidate");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).addClass('novalidate');
                    });
                    if ($(".LiveForm li[guid='" + value + "']").hasClass("form-col-12"))
                        $(".LiveForm li[guid='" + value + "']").css("display", "none");
                    else
                        $(".LiveForm li[guid='" + value + "']").css("visibility", "hidden");
                }
                else {
                    $(".LiveForm li[guid='" + value + "']").find('input[furequired],input[scalerequired],input[scorerequired]').removeClass("novalidate");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).removeClass('novalidate');
                    });
                    if ($(".LiveForm li[guid='" + value + "']").hasClass("form-col-12"))
                        $(".LiveForm li[guid='" + value + "']").css("display", "block");
                    else
                        $(".LiveForm li[guid='" + value + "']").css("visibility", "visible");
                }
            }
        });
    }
    else if (action.FriendlyName == "Require Field") {
        var controlToRequire = action.controlToRequire.split(',');
        $.each(controlToRequire, function (i, value) {
            if (action.requireType == "Require" || action.requireType == "Require Multiple") {
                if (result) {
                    $(".LiveForm li[guid='" + value + "']").addClass("Required");
                    $(".LiveForm li[guid='" + value + "']").find('input.starratinghidden').attr("scorerequired", "scorerequired");
                    $(".LiveForm li[guid='" + value + "']").find('input').attr("furequired", "furequired");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).attr("required", "required");
                    });
                }
                else {
                    $(".LiveForm li[guid='" + value + "']").removeClass("Required");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).removeAttr("required");
                        $(control).removeClass("error");
                        $(control).next(".error").css("display", "none");
                    });
                }
            }
            if (action.requireType == "Unrequire" || action.requireType == "Unrequire Multiple") {
                if (result) {
                    $(".LiveForm li[guid='" + value + "']").removeClass("Required");
                    $(".LiveForm li[guid='" + value + "']").find('input[furequired]').removeAttr("furequired");
                    $(".LiveForm li[guid='" + value + "']").find('input[scalerequired]').removeAttr("scalerequired");
                    $(".LiveForm li[guid='" + value + "']").find('input[scorerequired]').removeAttr("scorerequired");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).removeAttr("required");
                        $(control).removeAttr("cbrequired");
                        $(control).removeClass("error");
                        $(control).next(".error").css("display", "none");
                        $(control).parents('div').next(".error").css("display", "none");
                    });
                }
                else {
                    $(".LiveForm li[guid='" + value + "']").addClass("Required");
                    $(".LiveForm li[guid='" + value + "']").find('input.starratinghidden').attr("scorerequired", "scorerequired");
                    $(".LiveForm li[guid='" + value + "']").find('input').attr("furequired", "furequired");
                    var controls = $(".LiveForm li[guid='" + value + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                    $.each(controls, function (i, control) {
                        $(control).attr("required", "required");
                    });
                }
            }
        });
    }
    else if (action.FriendlyName == "SQLQuery") {
        if (result || result == undefined) {
            var fields = [];
            $(".Field.Textbox,.Field.Textarea,.Field.Dropdown,.Field.Radiobutton,.Field.Email,.Field.Number,.Field.Currency").each(function (index, field) {
                var Value = "";
                if ($(field).hasClass("Textbox"))
                    Value = $(field).find("input[type=text]").val();

                else if ($(field).hasClass("Textarea"))
                    Value = $(field).find("textarea").val();

                else if ($(field).hasClass("Email"))
                    Value = $(field).find("input[type=text]").val();

                else if ($(field).hasClass("Number"))
                    Value = $(field).find("input[type=text]").val();

                else if ($(field).hasClass("Currency")) {
                    if ($.browser.device)
                        Value = $($(field).find("input[type=tel]")).maskMoney('unmasked')[0].toString();
                    else
                        Value = $($(field).find("input[type=text]")).maskMoney('unmasked')[0].toString();
                }

                else if ($(field).hasClass("Dropdown")) {
                    var val = $(field).find("select").val().split("|");

                    Value = val[0];
                    if (val.length > 1)
                        Value = val[1];
                    if (Value == '') {
                        Value = $(field).find("select").attr('selectedoption');
                    }
                }
                else if ($(field).hasClass("Radiobutton")) {
                    if ($(field).find("input[type=radio]:checked").val() != undefined) {
                        var val = $(field).find("input[type=radio]:checked").val().split("|");
                        Value = val[0];
                        if (val.length > 1)
                            Value = val[1];
                    }
                    else
                        Value = "";
                }
                if (Value == undefined)
                    Value = "";
                if (Value.indexOf("+") > -1)
                    Value = encodeURIComponent(Value);

                var f = {
                    "GUID": "" + field.getAttribute('guid') + "",
                    "Value": "" + Value + ""
                };
                fields.push(f);
            });
            var controls = $(".LiveForm li[guid='" + action.FieldValue + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
            var api = eval("LiveFormTabID" + action.ModuleId);
            var sf = $.ServicesFramework(api.TabID);
            var formdata = JSON.stringify(fields);
            $(".lfoverlay, .lfmodal").show();
            $.ajax({
                type: "POST",
                url: window.location.origin + sf.getServiceRoot("LiveForms") + "views/ExecuteSQL?SqlId=" + action.SqlId,
                headers: {
                    'ModuleId': parseInt(action.ModuleId),
                    'TabId': parseInt(api.TabID),
                    'RequestVerificationToken': $.ServicesFramework(parseInt(action.ModuleId)).getAntiForgeryValue()
                },
                data: JSON.stringify(formdata),
                dataType: "json",
                async: false,
                contentType: "application/json",
                success: function (data) {
                    $(".lfoverlay, .lfmodal").hide();
                    if ($(controls).closest('.Field').hasClass("Textbox")) {
                        if (data != "")
                            controls[0].value = data["Value"];
                        else
                            controls[0].value = "";
                    }
                    else if ($(controls).closest('.Field').hasClass("Currency")) {
                        if (data != "")
                            controls[0].value = data["Value"];
                        else
                            controls[0].value = "";
                    }
                    else if ($(controls).closest('.Field').hasClass("Textarea")) {
                        if (data != "")
                            controls[0].value = data["Value"];
                        else
                            controls[0].value = "";
                    }
                    else if ($(controls).closest('.Field').hasClass("Email")) {
                        if (data != "")
                            controls[0].value = data["Value"];
                        else
                            controls[0].value = "";
                    }
                    else if ($(controls).closest('.Field').hasClass("Number")) {
                        if (data != "")
                            controls[0].value = data["Value"];
                        else
                            controls[0].value = "";
                    }
                    else if ($(controls).closest('.Field').hasClass("Dropdown")) {
                        var selected = $(controls).val();
                        if (selected == "")
                            selected = $(controls).attr('selectedoption');
                        $(controls).empty();
                        if (data != "") {
                            $.each(data, function (key, val) {
                                var opt = $("<option></option>");
                                opt.attr("value", val);

                                if (selected == val)
                                    opt.attr("selected", "selected");
                                var text = key.substr(1);
                                opt.append(text);
                                $(controls).append(opt);
                            });
                        }
                        else {
                            var opt = $("<option></option>");
                            opt.attr("value", "");
                            opt.append("");
                            $(controls).append(opt);
                        }
                    }
                    else if ($(controls).closest('.Field').hasClass("Checkbox")) {
                        //selected = $(controls).closest('.Field').find("input[type=checkbox]:checked");
                        var required = $(controls).closest('.Field').hasClass("Required");
                        var id = $(controls[0]).attr("id");
                        id = id.substring(0, id.length - 2);
                        var name = $(controls[0]).attr("name");
                        name = name.substring(0, name.length - 1);
                        var index = 0;
                        var element = document.getElementById(id);
                        id = id + "_";
                        var tbody = document.createElement("tbody");
                        if (data != "") {
                            $.each(data, function (key, val) {
                                var opt = "<tr><td><input id=\"" + id + index + "\" type=\"checkbox\" name=\"" + name + index + "\" value=\"" + val + "\"";
                                if (required)
                                    opt += "cbrequired=\"cbrequired\"";

                                //if (typeof selected != 'undefined') {
                                //    $.each(selected, function (key, value) {
                                //        if ($(value).val() == val) {
                                //            opt += " checked=\"true\"";
                                //        }
                                //    });
                                //}
                                var text = key.substr(1);
                                opt += "><label for=\"" + id + index + "\">" + text + "</label></td></tr>";
                                $(tbody).append(opt);
                                index++;
                            });
                        }
                        else {
                            var opt = "<tr><td><input id=\"" + id + "0\" type=\"checkbox\" name=\"" + name + "0\" value=\" \"";
                            //if (selected == " ")
                            //    opt += " checked=\"true\"";
                            opt += "><label for=\"\"></label></td></tr>";
                            $(tbody).append(opt);
                        }
                        $(element).empty();
                        $(element).append(tbody);
                        if (data != "") {
                            $(element).find("input").bind("change", function () {
                                ConditionCheck(this);
                            });
                        }
                    }
                    else if ($(controls).closest('.Field').hasClass("Radiobutton")) {
                        //selected = $(controls).closest('.Field').find("input[type=radio]:checked").val();
                        var required = $(controls).closest('.Field').hasClass("Required");
                        var id = $(controls[0]).attr("id");
                        var name = $(controls[0]).attr("name");
                        id = id.substring(0, id.length - 2);
                        var index = 0;
                        var element = document.getElementById(id);
                        id = id + "_";
                        var tbody = document.createElement("tbody");
                        if (data != "") {
                            $.each(data, function (key, val) {
                                var temp = id + "_" + index;
                                var opt = "<tr><td><input id=\"" + id + index + "\" type=\"radio\" name=\"" + name + "\" value=\"" + val + "\"";
                                if (required)
                                    opt += "required=\"required\" ";
                                //if (val == selected)
                                //    opt += " checked=\"true\"";
                                var text = key.substr(1);
                                opt += "><label for=\"" + id + index + "\">" + text + "</label></td></tr>";
                                $(tbody).append(opt);
                                index++;
                            });
                        }
                        else {
                            var opt = "<tr><td><input id=\"" + id + "0\" type=\"radio\" name=\"" + name + "\" value=\" \"";
                            //if (" " == selected)
                            //    opt += " checked=\"true\"";
                            opt += "><label for=\"\"></label></td></tr>";
                            $(tbody).append(opt);
                        }
                        $(element).empty();
                        $(element).append(tbody);
                        if (data != "") {
                            $(element).find("input").bind("change", function () {
                                ConditionCheck(this);
                            });
                        }
                    }
                }
            });
        }

    }
    else if (action.FriendlyName == "Evaluating JavaScript") {

        if (result || result == undefined) {

            $(".Field.Textbox,.Field.Number,.Field.Currency,.Field.Dropdown,.Field.Radiobutton,.Field.Checkbox,.Field.Textarea,.Field.Email,.Field.Phone").each(function (index, field) {
                var Value = "";
                var Text = "";
                if ($(field).hasClass("Textbox"))
                    Value = $(field).find("input[type=text]").val();
                else if ($(field).hasClass("Textarea"))
                    Value = $(field).find("textarea").val();
                else if ($(field).hasClass("Email"))
                    Value = $(field).find("input[type=text]").val();
                else if ($(field).hasClass("Phone")) {
                    Value = $(field).find("input[type=text].AreaCode").val() + " " + $(field).find("input[type=text].PhoneNumber").val();
                    if ($(field).find("input[type=text].AreaCode").val() == undefined) {
                        Value = $(field).find("input[type=text].phone").val();
                    }
                }
                else if ($(field).hasClass("Number"))
                    Value = $(field).find("input[type=text]").val();
                else if ($(field).hasClass("Currency")) {
                    if ($.browser.device)
                        Value = $($(field).find("input[type=tel]")).maskMoney('unmasked')[0];
                    else
                        Value = $($(field).find("input[type=text]")).maskMoney('unmasked')[0];
                }
                else if ($(field).hasClass("Dropdown")) {
                    var val = $(field).find("select").val().split("|");
                    Value = val[0];
                    if (val.length > 1)
                        Value = val[1];
                    Text = $(field).find('option:selected').text();
                }
                else if ($(field).hasClass("Radiobutton")) {
                    if ($(field).find("input[type=radio]:checked").val() != undefined) {
                        var val = $(field).find("input[type=radio]:checked").val().split("|");
                        Value = val[0];
                        if (val.length > 1)
                            Value = val[1];
                        Text = $(field).find('input:checked').next().text()
                    }
                }
                else if ($(field).hasClass("Checkbox")) {
                    var chk = 0;
                    $.each($(field).find("input[type=checkbox]:checked"), function (i, control) {
                        if ($(control).val() != undefined) {
                            var val = $(control).val().split("|");
                            var V = val[0];
                            if (val.length > 1)
                                V = val[1];
                            chk = chk + "+" + V;
                            Text += $(this).next().text() + ",";
                        }
                    });
                    Value = "(" + chk + ")";
                    Text = Text.replace(/,$/, "");
                }
                if (Value == "") {
                    Value = 0;
                }
                if (action.Script.indexOf("[" + field.getAttribute('guid') + "]") >= 0) {
                    action.Script = action.Script.replace(new RegExp("\\[" + field.getAttribute('guid') + "]", 'g'), Value);
                }
                if (action.Script.indexOf("[" + field.getAttribute('guid') + ":text]") >= 0) {
                    action.Script = action.Script.replace(new RegExp("\\[" + field.getAttribute('guid') + ":text]", 'g'), "'" + Text + "'");
                }
            });
            "";
            try {
                var Value = "";
                eval("Value =" + action.Script);
            } catch (e) {
                Value = action.Script;
            }

            var controls = $(".LiveForm li[guid='" + action.FieldName + "']").find('input[type=text],textarea,input[type=tel]');
            $.each(controls, function (i, control) {
                if ($(control).closest('li').hasClass('Currency')) {
                    var pre = $(control).attr('precision');
                    $(control).val(parseFloat(Value).toFixed(pre));
                    $(control).maskMoney('mask')
                }
                else
                    $(control).val(Value);
            });
            $(':contains("{' + action.FieldValue + '}")').filter(function () {
                if ($(this).children().length < 1) {
                    $(this).html(function (index, html) {
                        return html.replace("{" + action.FieldValue + "}", "<span class=" + action.GUID + "></span>");
                    });
                }
            });

            controls = $("." + action.GUID);
            $.each(controls, function (i, control) {
                $(control).html(Value);
            });
        }
    }
    else if (action.FriendlyName == "Create Ticket") {
        $(':contains("{' + action.Token + '}")').filter(function () {
            if ($(this).children().length < 1) {
                $(this).html(function (index, html) {
                    return html.replace("{" + action.Token + "}", "<div id='" + action.GUID + "' class='Helpdesk_integration'></div>");
                });
            }
        });
        $("#" + action.GUID + "").hide();
        if (action.ModuleID != null) {
            var controls = $(".LiveForm li[guid='" + action.Subject.replace(/[\[\]']+/g, '') + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]').val();
            var Category = $(".LiveForm li[guid='" + action.CategoryName.replace(/[\[\]']+/g, '') + "']").find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]').val();
            if (controls != "") {
                var IsTokenExistInUI = false;
                if (action.Token != null && action.Token != '')
                    if (document.documentElement.innerHTML.indexOf('{' + action.Token + '}') > -1)
                        IsTokenExistInUI = true
                    else {
                        IsTokenExistInUI = false;
                    }
                if (IsTokenExistInUI)
                    $.ajax({
                        url: action.IntegrationURL + "?app=Knowledgebase",
                        headers: {
                            'ModuleId': parseInt(action.ModuleID),
                            'TabId': parseInt(action.TabID),
                            'RequestVerificationToken': $.ServicesFramework(parseInt(action.ModuleID)).getAntiForgeryValue()
                        },
                        dataType: "json",
                        method: 'GET',
                        async: false,
                        success: function (data) {

                            if (data != null && data != undefined && data.KnowledgebaseIntegrationAvailable == "true" && data.IntegrateKnowledgebase != "false") {
                                $.ajax({
                                    url: data.URL + "?moduleId=" + parseInt(data.ModuleID) + "&query=" + controls + "&category=" + Category,
                                    headers: {
                                        'ModuleId': parseInt(data.ModuleID),
                                        'TabId': parseInt(data.TabID),
                                        'RequestVerificationToken': $.ServicesFramework(parseInt(data.ModuleID)).getAntiForgeryValue()
                                    },
                                    dataType: "json",
                                    method: 'GET',
                                    async: false,
                                    success: function (data) {
                                        if (data != null && data.length > 0) {
                                            $("#" + action.GUID + "").show();
                                            $("#Panel_" + action.GUID + "").remove();
                                            $("#" + action.GUID + "").append("<div id='Panel_" + action.GUID + "' class='ms-panel ms-panel-default'><div class='ms-panel-heading'><strong>" + LFValidations.RelatedArticle + "</strong></div><div class='ms-panel-body'><ul class='ms-list-group " + action.GUID + "'></ul></div></div>");
                                            $.each(data, function (key, value) {
                                                $("ul." + action.GUID + "").append("<li class=\"ms-list-group-item\"><a href=" + value.PermLink + "><p class=\"helpdesk-title\">" + value.Title + "</p><span class=\"ms-badge pull-right\">" + value.Folder.Parent.Name + " / " + value.Folder.Name + "</span></a></li>");
                                            });
                                        }
                                        else {
                                            $("#Panel_" + action.GUID + "").remove();
                                            $("#" + action.GUID + "").hide();
                                        }
                                    }
                                });
                            }
                        }
                    });
            }
        }
    }

    if (action.FriendlyName == "Skip To Page") {
        var pageToSkip = action.skipToPage.replace("Page ", "");

        //Check if we're already on same page, in which case we don't need to switch
        var SkipPage = !$(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + pageToSkip + ')').is(':visible');
        if (result) {
            var prevUL = $(obj).closest('ul.page-break-section').prevAll("ul.page-break-section").length;
            for (var i = prevUL + 2; i < pageToSkip; i++) {

                $(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + i + ')').addClass('skipped').hide();
            }
        } else {
            var prevUL = $(obj).closest('ul.page-break-section').prevAll("ul.page-break-section").length;
            for (var i = prevUL + 2; i < pageToSkip; i++) {

                $(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + i + ')').removeClass('skipped');
            }
        }
        if (SkipPage && result && ValidatePageNextSubmit(obj, element)) {

            if ((ele == undefined) && $(obj).is(':visible')) {
                $(obj).closest('ul.page-break-section').hide();
                $(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + pageToSkip + ')').fadeIn(function () {
                    $(".Signatures").each(function (index, element) {
                        if ($(element).is(":visible") && $(element).find('canvas').length <= 0) {
                            if (parseInt(element.getAttribute("width")) > 0) {
                                $(element).jSignature({ 'decor-color': 'transparent', 'height': parseInt(element.getAttribute("height")), 'width': parseInt(element.getAttribute("width")) }).addClass('mobile-resp');
                            }
                            else {
                                $(element).jSignature({ 'decor-color': 'transparent', 'height': parseInt(element.getAttribute("height")) }).addClass('mobile-resp');
                            }
                        }
                    })
                });
                ProgressSection($(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + pageToSkip + ')'));
                $('html,body').animate({ scrollTop: $(obj).closest('.LiveForm').find('ul.page-break-section:nth-of-type(' + pageToSkip + ')').find('li').first().offset().top - 100 }, 500);

                var pages = $(obj).closest('.LiveForm').find('ul.page-break-section.skipped');
                $.each(pages, function (i, page) {
                    var fields = $(page).find('li.Field');
                    $.each(fields, function (i, field) {
                        $(field).find('input[furequired],input[scalerequired],input[scorerequired]').addClass("novalidate");
                        var controls = $(field).find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]');
                        $.each(controls, function (i, control) {
                            $(control).addClass('novalidate');
                        });
                    });
                });

            }
        }
    }
}
$("[pageNext]").unbind('click');
$(document).on("click", "[pageNext]", ValidatePageNextSubmit);

$("[pageBack]").unbind('click');
$(document).on("click", "[pageBack]", ValidatePageNextSubmit);

//$("[pageBack]").click(ValidatePageNextSubmit);
//$("[pageNext]").click(ValidatePageNextSubmit);

function ValidatePageNextSubmit(evt, element) {
    var $this = this;

    return ProcessingActions(evt, element, $this);

}


var ProcessingActions = function (evt, element, currentobj) {

    loadingTime = new Date();

    var selector = evt.currentTarget;
    if (typeof selector == 'undefined')
        selector = evt;
    if (typeof element == 'undefined')
        element = evt;
    var $group = $(selector).parents('.page-break-section');

    var isValid = true;
    var focus = new Array();
    if ($(element.currentTarget).is(':visible')) {
        if ($(selector).attr('pageback') != "pageBack") {
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

                if ($(item).hasClass('g-recaptcha-response') && !$(item).hasClass('novalidate')) {
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
                                $('<label class="error conmessage">' + LFValidations.matchpassmessage + '</label>').insertAfter(inputitem)
                                isValid = false;
                            }
                        }
                    }
                });

            });
            if ($(focus).length > 0) {
                $('html,body').animate({ scrollTop: $(focus).first().closest('li').first().offset().top - 100 }, 500, function () { $(focus).first().focus(); });
            }
        }
    }
    if (!isValid) {
        if ($(evt).is('input[type=button]'))
            evt.preventDefault();
    }
    else if (!$.isWindow(currentobj)) {

        $(".lfoverlay, .lfmodal").show();

        //Condition Check
        $('[condition] input[type="text"],[condition] textarea,[condition] select,[condition] input[type="radio"],[condition] input[type="checkbox"]').each(function (i, obj) {
            if ($(obj).is(":visible"))
                //we  want to check condition on prior to changing page
                setTimeout(function () {
                    ConditionCheck(obj, element);
                }, 10);
        });

        setTimeout(function () {



            var srcElement = element.srcElement || element.target;
            if ($(srcElement).is(":visible")) {
                if ($(srcElement).attr("pageNext") == "pageNext") {
                    //var thisElement = this;
                    //$(thisElement).closest('ul').fadeOut("fast", function () {
                    //    $(thisElement).closest('ul').next().fadeIn("fast", function () {
                    //        $('html,body').animate({ scrollTop: $(thisElement).closest('ul').next().find('li').first().offset().top - 100 }, 500);
                    //    });
                    //});
                    var item = $(srcElement).parents('ul.page-break-section').nextAll('ul.page-break-section:not(.skipped)').first();

                    $(currentobj).closest('ul.page-break-section').hide();
                    $(srcElement).parents('ul.page-break-section').nextAll('ul.page-break-section:hidden:not(.skipped)').first().removeClass('bounceInRight bounceInLeft').fadeIn(function () {
                        $(".Signatures").each(function (index, element) {
                            if ($(element).is(":visible") && $(element).find('canvas').length <= 0) {
                                if (parseInt(element.getAttribute("width")) > 0) {
                                    $(element).jSignature({ 'decor-color': 'transparent', 'height': parseInt(element.getAttribute("height")), 'width': parseInt(element.getAttribute("width")) }).addClass('mobile-resp');
                                }
                                else {
                                    $(element).jSignature({ 'decor-color': 'transparent', 'height': parseInt(element.getAttribute("height")) }).addClass('mobile-resp');
                                }
                            }
                        })
                    }).addClass("appear-animation appear-animation-visible bounceInRight");
                    $('body').addClass('overflow-hide');

                    ProgressSection(item);

                    if (typeof item != 'undefined') {
                        $('html,body').animate({ scrollTop: $(item).find('li').first().offset().top - 100 }, 500);
                    }

                    setTimeout(function () {
                        $('body').removeClass('overflow-hide');
                    }, 1000);

                }
                else if ($(srcElement).attr("pageBack") == "pageBack") {

                    var item = $(srcElement).parents('ul.page-break-section').prevAll('ul.page-break-section:not(.skipped)').first();

                    $(currentobj).closest('ul.page-break-section').hide();
                    $(srcElement).parents('ul.page-break-section').prevAll('ul.page-break-section:hidden:not(.skipped)').first().removeClass('bounceInRight bounceInLeft').fadeIn().addClass("appear-animation appear-animation-visible bounceInLeft");
                    $('body').addClass('overflow-hide');

                    ProgressSection(item)

                    if (typeof item != 'undefined') {
                        $('html,body').animate({ scrollTop: $(item).find('li').first().offset().top - 100 }, 500);
                    }

                    setTimeout(function () {
                        $('body').removeClass('overflow-hide');
                    }, 1000);
                }

                var LF = $(currentobj).parents('.LiveForm').attr('uniqueid');

                if (typeof LF != undefined)
                    LiveForms.AppendViewPortClass(LF, eval(LF + 'MU'));

                $(".lfoverlay, .lfmodal").hide();
            }
        }, 10);
    }
    else if ($.isWindow(currentobj)) {
        return true;
    }

};

var ProgressSection = function (item) {

    var LF = $(item).parents('.LiveForm').attr('uniqueid');
    var navigation = $('#' + LF + ' .Form_Navigation');
    var i = item.index();

    if (navigation.length > 0) {
        var breaksection = $('#' + LF + ' ul.page-break-section').length;
        var progpercent = 100 / breaksection;
        var progresswidth = progpercent * (i);
        var navigation = $('#' + LF + ' .Form_Navigation');
        var progressbar = $('#' + LF + ' .progressbar');

        $(navigation).find('li').removeClass('active');
        $('#' + LF + ' .Form_title').find('li').removeClass('active');
        $(navigation).find('li:eq(' + (i - 1) + ')').addClass('active');
        $('#' + LF + ' .Form_title').find('li:eq(' + (i - 1) + ')').addClass('active');
        $(progressbar).find('.progressfield').css("width", progresswidth + '%');

        if (Math.round(progresswidth) == 100)
            $(progressbar).find('.progressfield').css("border-radius", "20px");
        else
            $(progressbar).find('.progressfield').css("border-radius", "20px 0 0 20px");

        $('#' + LF + ' .numbering').text(i + ' of ' + breaksection);
        $('#' + LF + ' .percentage').text(Math.round(progresswidth) + '%');


        if ($(window).width() <= 768 && breaksection > 2) {
            for (var pn = 1; pn <= i; pn++) {
                $('#' + LF + ' ul.Form_Navigation li').hide().slice(pn - 1, pn + 1).show();
                $('#' + LF + ' ul.Form_title li').hide().slice(pn - 1, pn + 1).show();

                if (pn == breaksection) {
                    $('#' + LF + ' ul.Form_Navigation li').hide().slice(pn - 2, pn).show();
                    $('#' + LF + ' ul.Form_title li').hide().slice(pn - 2, pn).show();
                }
            }
        }
        else if ($(window).width() > 768 && breaksection > 5) {
            for (var pn = 3; pn < i; pn++) {
                $('#' + LF + ' ul.Form_Navigation li').hide().slice(pn - 3, pn + 2).show();
                $('#' + LF + ' ul.Form_title li').hide().slice(pn - 3, pn + 2).show();

                if (pn == breaksection - 1) {
                    $('#' + LF + ' ul.Form_Navigation li').hide().slice(pn - 4, pn + 1).show();
                    $('#' + LF + ' ul.Form_title li').hide().slice(pn - 4, pn + 1).show();
                }
            }
        }
    }

}

var Click_FileBrowseUpload = function (event, GUID, ModuleId, Extension, Size) {
    var errormsg = "";
    var sf = $.ServicesFramework(ModuleId);
    if (sf != undefined) {
        var form_data = new FormData();
        for (var x = 0; x < $(event).prop('files').length; x++) {
            var parts = $(event).prop('files')[x].name.split('.');
            var ext = parts[parts.length - 1];
            var size = $(event).prop('files')[x].size / 1024;
            if (Extension.indexOf(ext) < 0)
                errormsg += "Allowed extensions are " + Extension;
            else if (size > Size)
                errormsg += "Max allowed file size is " + (Size / 1024) + " MB";
            else
                form_data.append("files[]", $(event).prop('files')[x]);
        }
        if (errormsg == "") {
            var api = eval("LiveFormWebapi" + ModuleId);
            var foid = -1;
            var allow = false;
            if ($($('.browse.' + GUID.replace(/-/g, "_") + '>.folder').find('li.active')).attr('foid') != undefined) {
                foid = $($('.browse.' + GUID.replace(/-/g, "_") + '>.folder').find('li.active')).attr('foid');
                allow = $($('.browse.' + GUID.replace(/-/g, "_") + '>.folder').find('li.active')).attr('allow');
            }
            $.ajax({
                url: sf.getServiceRoot(api.ModuleFolder) + 'BrowseFile/UploadFile?GUID=' + GUID + '&FolderID=' + foid,
                headers: {
                    'ModuleId': parseInt(sf.getModuleId()),
                    'TabId': parseInt(sf.getTabId()),
                    'RequestVerificationToken': sf.getAntiForgeryValue()
                },
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'POST',
                success: function (response) {
                    if (response == "File/s not uploaded successfully!")
                        swal(response);
                    else
                        setTimeout(function () { LFClick_GetFiles('' + GUID + '', ModuleId, foid, 0, allow, response.split('fileid')[1]); }, 100);
                },
                error: function (error) {
                    swal(error);
                }
            });
        }
        else
            swal(errormsg);
    }
};

var Click_FileBrowse = function (GUID, ModuleId) {
    $(".browsefile." + GUID.replace(/-/g, "_")).hide();
    $(".browse." + GUID.replace(/-/g, "_")).show();
    var api = eval("LiveFormWebapi" + ModuleId);
    var foid = -1;
    var allow = false;
    if ($.trim($('.' + GUID.replace(/-/g, "_") + ' .folder').text()).length == 0) {
        api.webApi.get('BrowseFile/GetFolders', 'GUID=' + GUID).success(function (data) {
            var string = "<span style='font-size: medium;'><strong>Select Folder</strong></span><ul>";
            $(data).each(function (index, value) {
                if (foid == -1) {
                    foid = value.Value;
                    allow = value.uploadAllowed;
                }
                string += "<li class='active' foid=" + value.Value + " allow=" + value.uploadAllowed + ">";
                if (value.childrenCount > 0)
                    string += "<span onclick=\"LFClick_GetSubFolder('" + GUID + "'," + ModuleId + "," + value.Value + "); $(this).toggleClass('glyphicon-triangle-bottom glyphicon-triangle-right'); if ($(this).siblings('ul.rootfolder').find('li').length) $(this).siblings('ul.rootfolder').toggle(); \" class=\"glyphicon glyphicon-triangle-bottom\"></span>";
                else
                    string += "<span class=\"glyphicon glyphicon-triangle-right content-hidden\"></span>";
                string += "<span onclick=\"LFClick_GetFiles('" + GUID + "'," + ModuleId + "," + value.Value + ",0," + value.uploadAllowed + ",''); $('.browse').find('.active').removeClass('active'); $(this).parent('li').addClass('active'); \" class=\"glyphicon glyphicon-folder-close\"></span>";
                string += "<span onclick=\"LFClick_GetFiles('" + GUID + "'," + ModuleId + "," + value.Value + ",0," + value.uploadAllowed + ",''); $('.browse').find('.active').removeClass('active'); $(this).parent('li').addClass('active'); \" class=\"folders\">" + value.Text + "</span>";
                string += "<ul class=\"rootfolder " + ModuleId + "_" + value.Value + "\">";
                if (value.children)
                    string += FolderMarkup(value.children, GUID, ModuleId);
                string += "</ul>";
                string += "</li>";
            });
            string += "</ul>";
            $('.' + GUID.replace(/-/g, "_") + ' .folder').html(string);
            setTimeout(function () { LFClick_GetFiles('' + GUID + '', ModuleId, foid, 0, allow, ''); }, 100);
        });
    }
};

var FolderMarkup = function (data, GUID, ModuleId) {
    var string = "";
    $(data).each(function (index, value) {
        string += "<li foid=" + value.Value + " allow=" + value.uploadAllowed + ">";
        if (value.childrenCount > 0)
            string += "<span onclick=\"LFClick_GetSubFolder('" + GUID + "'," + ModuleId + "," + value.Value + "); $(this).toggleClass('glyphicon-triangle-bottom glyphicon-triangle-right'); if ($(this).siblings('ul.rootfolder').find('li').length) $(this).siblings('ul.rootfolder').toggle();\" class=\"glyphicon glyphicon-triangle-right\"></span>";
        else
            string += "<span class=\"glyphicon glyphicon-triangle-right content-hidden\"></span>";
        string += "<span onclick=\"LFClick_GetFiles('" + GUID + "'," + ModuleId + "," + value.Value + ",0," + value.uploadAllowed + ",''); $('.browse').find('.active').removeClass('active'); $(this).parent('li').addClass('active'); \" class=\"glyphicon glyphicon-folder-close\"></span>";
        string += "<span onclick=\"LFClick_GetFiles('" + GUID + "'," + ModuleId + "," + value.Value + ",0," + value.uploadAllowed + ",''); $('.browse').find('.active').removeClass('active'); $(this).parent('li').addClass('active'); \" class=\"folders\">" + value.Text + "</span>";
        string += "<ul class=\"rootfolder " + ModuleId + "_" + value.Value + "\">";
        if (value.children)
            string += FolderMarkup(value.children, GUID, ModuleId);
        string += "</ul>";
        string += "</li>";
    });
    return string;
};

var LFClick_GetSubFolder = function (GUID, ModuleId, value) {
    var api = eval("LiveFormWebapi" + ModuleId);
    if ($.trim($('.' + GUID.replace(/-/g, "_") + ' .rootfolder.' + ModuleId + "_" + value).text()).length == 0) {
        api.webApi.get('BrowseFile/GetSubFolders', 'folderid=' + value).success(function (data) {
            $('.' + GUID.replace(/-/g, "_") + ' .rootfolder.' + ModuleId + "_" + value).html(FolderMarkup(data, GUID, ModuleId));
        });
    }
};

var LFKeyword_Search = function (GUID, ModuleId, Value, allow) {
    if (LForm_Time) {
        clearTimeout(LForm_Time);
    }
    LForm_Time = setTimeout(function () { LFClick_GetFiles(GUID, ModuleId, Value, 0, allow, ''); }, 500);
};

var LFKeypress = function (event) {

    if (event.which === 13) {
        event.preventDefault();
    }
};


var LFClick_GetFiles = function (GUID, ModuleId, Value, Skip, allowUpload, uploadedfileid) {
    if (allowUpload)
        $(".BrowseInputSpan." + GUID.replace(/-/g, "_")).attr("style", "display: inline-block;");
    else
        $(".BrowseInputSpan." + GUID.replace(/-/g, "_")).attr("style", "display: none;");
    var api = eval("LiveFormWebapi" + ModuleId);
    var keyword = $('#keyword' + GUID).val();
    if (keyword == undefined)
        keyword = "";
    var string = "<span style='font-size: medium;'><strong>Select File</strong></span><input id='keyword" + GUID + "' type='text' onkeypress=\"LFKeypress(event)\" onkeyup=\"LFKeyword_Search('" + GUID + "'," + ModuleId + "," + Value + "," + allowUpload + ");\" style='width:100%;margin-top: 5px;' placeholder='Search' />";
    api.webApi.get('BrowseFile/GetFiles', 'GUID=' + GUID + '&folderid=' + Value + '&skip=' + Skip + '&pagesize=100&keyword=' + keyword).success(function (data) {
        $('.' + GUID.replace(/-/g, "_") + ' .file').html(string + FileMarkup(GUID, data) + data.Pager);
        $('#keyword' + GUID).val(keyword);
        if (uploadedfileid != undefined && uploadedfileid != '')
            $('.' + GUID.replace(/-/g, "_") + ' .file').find('li[fid="' + uploadedfileid + '"]').click();
    });
};


var FileMarkup = function (GUID, data) {
    var string = "";
    if (data) {
        string += "</ul>";
        $(data.Files).each(function (index, value) {
            string += "<li style='cursor:pointer;' fid='" + value.Value + "' onclick=\"LFClick_SelectFile(this,'" + GUID + "'," + value.Value + ");\">";
            string += "<span class='glyphicon glyphicon-file'></span>";
            string += "<span>" + value.Text + "</span>";
            string += "</li>";
        });
        string += "</ul>";
    }
    return string;
};

var LFClick_SelectFile = function (event, GUID, data) {
    var myArray = $('.' + GUID + '_browseFileUploadButton').val().split(",");
    var isavl = false;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == data)
            isavl = true;
    }
    if (!isavl) {
        LFSelectedMarkUp(event, GUID, data);
    }
};



var LFSelectedMarkUp = function (event, GUID, data) {
    if ($('.fileheader.' + GUID.replace(/-/g, "_")).attr('style') == "display: none;")
        $('.fileheader.' + GUID.replace(/-/g, "_")).attr("style", "display: block;");

    var selectedmarkup = "<div guid=" + GUID + " file='" + data + "' class='rowfile row_" + data + "'><span>" + event.innerText + "</span><span class='glyphicon glyphicon-trash' style='cursor:pointer;' onclick=\"LFClick_DeleteFile('" + GUID + "','" + data + "')\"></span><span class='glyphicon glyphicon-move assetsmove' style='cursor:move;'></span></div>";
    var maxallowed = 1;
    $.each($($(event).closest('.Field-Container-Wide').find('.browse')[0]).attr('class').split(' '), function (k, v) {
        if (v.indexOf('maxallowed') > -1) {
            maxallowed = parseInt(v.split('maxallowed')[1]);
        }
    });
    var totalfilesselected = $('.selectedfile' + GUID.replace(/-/g, "_")).find('.rowfile').length;
    if (maxallowed != 0 && totalfilesselected == maxallowed) {
        LFClick_DeleteFile(GUID, $($('.selectedfile' + GUID.replace(/-/g, "_")).find('.rowfile')[0]).attr('file'));
    }
    $('.selectedfile' + GUID.replace(/-/g, "_")).append(selectedmarkup);
    $('.' + GUID + '_browseFileUploadButton').val($('.' + GUID + '_browseFileUploadButton').val() + "," + data);
};
var LFClick_DeleteFile = function (GUID, data) {
    var myArray = $('.' + GUID + '_browseFileUploadButton').val().split(",");
    $('.' + GUID + '_browseFileUploadButton').val('');
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] != data && myArray[i])
            $('.' + GUID + '_browseFileUploadButton').val($('.' + GUID + '_browseFileUploadButton').val() + "," + myArray[i]);
    }
    if (!$('.' + GUID + '_browseFileUploadButton').val())
        $('.fileheader.' + GUID.replace(/-/g, "_")).attr("style", "display: none;");
    $('.selectedfile' + GUID.replace(/-/g, "_") + ' .row_' + data).remove();
};

$('.asset_grid > div').sortable({
    items: 'div',
    handle: '.assetsmove',
    stop: function (event, ui) {
        var guid = ui.item.attr('guid');
        if (guid) {
            $('.' + guid + '_browseFileUploadButton').val('');
            $('.selectedfile' + guid.replace(/-/g, "_") + ' .rowfile').each(function (i, obj) {
                var file = $(obj).attr('file');
                if (file)
                    $('.' + guid + '_browseFileUploadButton').val($('.' + guid + '_browseFileUploadButton').val() + "," + file);
            });
        }
    }
});


var LFClick_DeletePlUploadFile = function (GUID, data, index) {
    var myArray = $('.' + GUID + '_FileUploadButton').val().split("%&%");
    $('.' + GUID + '_FileUploadButton').val('');
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] != data && myArray[i])
            $('.' + GUID + '_FileUploadButton').val($('.' + GUID + '_FileUploadButton').val() + "%&%" + myArray[i]);
    }
    if (!$('.' + GUID + '_FileUploadButton').val())
        $('.fileheader.' + GUID.replace(/-/g, "_")).attr("style", "display: none;");
    $('.selectedfile' + GUID.replace(/-/g, "_") + ' .pluploadrow_' + index).remove();
};