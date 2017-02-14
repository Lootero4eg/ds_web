	$.mobile.changeGlobalTheme = function(theme)
    {
        // These themes will be cleared, add more
        // swatch letters as needed.
        var themes = " a b c d e";

        // Updates the theme for all elements that match the
        // CSS selector with the specified theme class.
        function setTheme(cssSelector, themeClass, theme)
        {
            $(cssSelector)
                    .removeClass(themes.split(" ").join(" " + themeClass + "-"))
                    .addClass(themeClass + "-" + theme)
                    .attr("data-theme", theme);
        }

        // Add more selectors/theme classes as needed.
        setTheme(".ui-mobile-viewport", "ui-overlay", theme);
        setTheme("[data-role='page']", "ui-page-theme", theme);
        setTheme("[data-role='header']", "ui-bar", theme);
        setTheme("[data-role='listview'] > li", "ui-bar", theme);
        setTheme(".ui-btn", "ui-btn-up", theme);
        setTheme(".ui-btn", "ui-btn-hover", theme);
    };
	
	var matrixFieldClick = function(item)
	{	
		var descr = GetDescription(item.toElement.id, item.toElement.innerHTML);
				
		if($('#descr_sett :radio:checked').val() == 'under_matrix_rb')
		{
			$('#description2').hide();
			$('#description').show();
			$('#description').html("");
					
			if(descr != [] && descr != "")			
				$('#description').html(descr);			
		}
		
		if($('#descr_sett :radio:checked').val() == 'window_desc_rb')
		{
			$('#description').hide();
			$('#description2').show();
			$('#description2').html("");
					
			if(descr != [] && descr != "")
			{
				$('#description2').html(descr);
				$('#descrwindow').popup('open');
			}
		}
	}
	
	var load_settings = function()
	{		
		if (typeof(Storage) !== "undefined") 
		{ 											
			if(localStorage.getItem("descr_sett") == null)		
				localStorage.setItem("descr_sett", $('#descr_sett :radio:checked').val());		
			else 									
				$('#descr_sett :input').each(function(index,element) {	radioswitcher("descr_sett", element); });											
		
			if(localStorage.getItem("theme_sett") == null)		
				localStorage.setItem("theme_sett", $('#theme_sett :radio:checked').val());		
			else 
			{
				if(localStorage.getItem("theme_sett") == "theme1")
					$.mobile.changeGlobalTheme('a');
				if(localStorage.getItem("theme_sett") == "theme2")					
					$.mobile.changeGlobalTheme('b');								
								
				$('#theme_sett :input').each(function(index,element) { radioswitcher("theme_sett", element); });												
			}
		}
	}
	
	var save_settings = function()
	{
		localStorage.setItem("descr_sett", $('#descr_sett :radio:checked').val());
		localStorage.setItem("theme_sett", $('#theme_sett :radio:checked').val());			
	}
	
	var radioswitcher = function(settingsFieldsControl, element)
	{
		if($(element).attr("id") == localStorage.getItem(settingsFieldsControl))
		{
			$(element).prop("checked",true).checkboxradio();
			$(element).prop("checked",true).checkboxradio("refresh");					
					}					
		else
		{
			$(element).prop("checked",false).checkboxradio();
			$(element).prop("checked",false).checkboxradio("refresh");					
		}
	}