//for frequency radio//
function check_radio_fr(val)
{
		//alert(val);
		$("a[id^='fer_']").removeClass();
		jQuery("#"+val).prop('checked', true);
		$("#fer_"+val).addClass( "check_"+val );
		priceChange();
}
//for bed radio//
function check_radio(val)
			{
			
			$("a[id^='num_bed']").removeClass( "active" );
			jQuery("#"+val).prop('checked', true).trigger("change");
			$("#"+val+"_0").addClass( "active" );
			
			}
//for bath radio//
function check_radio_bh(val)
			{
			$("a[id^='num_bath']").removeClass( "active" );
			jQuery("#"+val).prop('checked', true).trigger("change");
			$("#"+val+"_0").addClass( "active" );
			}
			

//for extra service checkbox//
function check_box_ex(val)
{
	var ext=jQuery("#extra_facility").val();
	var combine_val;
	if (jQuery("#"+val).prop('checked')) {
	//alert(val);
		$("#ser_"+val).removeClass( "checked_"+val );
		combine_val = ext.replace('_'+val, "");
		jQuery("#extra_facility").val(combine_val);
		jQuery("#"+val).prop('checked', false).trigger("change");
	}
	else
	{	
	
		//alert("#ser_"+val);
		$("#ser_"+val).addClass( "checked_"+val );
		combine_val=ext+'_'+val;
		
		jQuery("#extra_facility").val(combine_val);
		
		jQuery("#"+val).prop('checked', true).trigger("change");
	}
	//jQuery("#"+val).prop('checked', "#"+val.checked ? false : true).trigger("change");
}

 $('input[name="num_bed"]').change( function(e) {
        var baths = $(e.target).val();
        var copy = baths;
        if(parseInt(baths) == 1 || parseInt(baths) == 0)
            copy += " BR";
        else
            copy += " BRs";
        $('#br').text(copy);
        priceChange();
    });//for no of bed//
	$('input[name="num_bath"]').change( function(e) {
        var baths = $(e.target).val();
        var copy = baths;
        if(parseInt(baths) == 1 || parseInt(baths) == 0)
            copy += " BTH";
        else
            copy += " BTHs";
        $('#ba').text(copy);
        priceChange();
    });//no of bath//
//for checkbox//
	$("input[name=ex_ser]").on('change', function(){
   // var $val = $('input:checkbox[name=ex_ser]:checked').val();
	var checkValues = $('input[name=ex_ser]:checked').map(function()
            {
                return $(this).val();
            }).get();
   $.ajax ({
       type: "POST",
       url: "/bookdata.php",
       data: {"extra_ser" : checkValues },
	   //data: $('#serviceicons').serialize(),
       success: function(data) {
       $("#ext").html(data);
	   $('#ext').css('textTransform', 'capitalize');
	  //alert(data);
    }
    });
	priceChange();
	});
	
	$('input[name="date1"]').change( function(e) {
	
        var date = $(e.target).val();
		//alert(date);
        var copy = date;
        // if(parseInt(date) == 1)
            // copy += " BH";
        // else
            // copy += " BH";
        $('#date_side').text(copy)
    });
	function call(){
		$("#MyDropDownList :selected").text() //the text content of the selected option
		var val=$("#MyDropDownList").val() //the value of the selected option
		//alert(val);
		//var date = $(e.target).val();
		//alert(date);
		var copy = val;
		$('#time_side').text(copy)
		}
function priceChange(pri) {
//alert("success");
//alert(pri);

$.ajax ({
       type: "POST",
	   dataType: "JSON",
	   data: $('#payment-form').serialize(),
       url: "/getprice.php",
       //data: {"price" : pri },
       success: function(data) {
       $("#pri").html(data.price);
       $("#tot_pri").html(data.price);
       $("#total_price").val(data.price);
		//alert(data.price);
		$("#time").html(data.minute);
		$("#timesec").val(data.timesec);
		$("#total_time").val(data.minute);
		//alert(data.minute);
    }
    });
}
