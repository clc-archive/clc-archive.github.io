// JavaScript Document
//<![CDATA[
	function makeNewWindows() {
		if (!document.links) {
			document.links = document.getElementsByTagName('a');
		}

		for (var t=0; t<document.links.length; t++) {
			var all_links = document.links[t];
			if (all_links.href.search(/^http/) != -1) { // Catches both http and https
		  	  if (
			  	all_links.href.search('maintenance.clctrust.org/') == -1  
				 && document.links[t].hasAttribute('onClick') == false)
			  if (
			  	all_links.href.search('clctrust.org/') == -1  
				 && document.links[t].hasAttribute('onClick') == false)
			if (
			  	all_links.href.search('connect.clctrust.org/') == -1  
				 && document.links[t].hasAttribute('onClick') == false)
			if (
			  	all_links.href.search('test.clctrust.org/') == -1  
				 && document.links[t].hasAttribute('onClick') == false)
			if (
			  	all_links.href.search('vimeo.com/') == -1  
				 && document.links[t].hasAttribute('onClick') == false)				 
				  {
		    	document.links[t].setAttribute('onClick', 'javascript:window.open(\''+all_links.href+'\'); return false;');
		    	document.links[t].removeAttribute('target');
		    }
		  }
		}
	}
	
	function addLoadEvent2(func)
	{	
		var oldonload = window.onload;
		if (typeof window.onload != 'function'){
			window.onload = func;
		} else {
			window.onload = function(){
				oldonload();
				func();
			}
		}
	}

	addLoadEvent2(makeNewWindows);
	//]]>