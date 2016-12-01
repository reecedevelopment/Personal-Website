/*
   Author: Zachary Reece
   Version: 11/14/2016
   Filename: script.js
   Description: The external JavaScript component of my personal website 
*/

// Calls functions below once page is loaded; each function runs on a timer after one another; fades text in and out
$(document).ready(function() {

	function adjustStyle(width) {
	    
	    width = parseInt(width);
	    
	    if (width < 1300) {
	    
	         document.location = "mobile.html";
	         
	    } else {
	        
	    }
	}

	$(function() {

	    adjustStyle($(this).width());
	    
	    $(window).resize(function() {
	    
	        adjustStyle($(this).width());
	        
	    });
	    
	});

	document.getElementById("work").onmouseover = function() {
	
		this.style.backgroundColor = "#7F99A8";
		
		this.style.cursor = "pointer";
		
	}
	
	document.getElementById("aboutme").onmouseover = function() {
	
		this.style.backgroundColor = "#7F99A8";
		
		this.style.cursor = "pointer";
		
	}
	
	document.getElementById("education").onmouseover = function() {
	
		this.style.backgroundColor = "#7F99A8";
		
		this.style.cursor = "pointer";
		
	}
	
	document.getElementById("skills").onmouseover = function() {
	
		this.style.backgroundColor = "#7F99A8";
		
		this.style.cursor = "pointer";
		
	}
	
	document.getElementById("work").onmouseout = function() {
	
		this.style.backgroundColor = "#56788D";
		
		this.style.cursor = "default";
		
	}
	
	document.getElementById("aboutme").onmouseout = function() {
	
		this.style.backgroundColor = "#56788D";
		
		this.style.cursor = "default";
		
	}
	
	document.getElementById("education").onmouseout = function() {
	
		this.style.backgroundColor = "#56788D";
		
		this.style.cursor = "default";
		
	}
	
	document.getElementById("skills").onmouseout = function() {
	
		this.style.backgroundColor = "#56788D";
		
		this.style.cursor = "default";
		
	}

	$("#work").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
		
			$(this).css("background-color", "#56788D");
		
			document.getElementById("arbys").onmouseover = function() {
				
				$("#workDescriptions").stop().text("Arbys; 640 N Rock Rd, Derby, KS 67037; (316) 788-2170; Crew Member; Operated Cash Registers and Took Orders; Bagged and Shuttled Food");
				
				$("workDescriptions").stop().css("left", "0%");
				
				$('#workDescriptions').stop().fadeIn("slow", function() {});
				
			}
			
			document.getElementById("arbys").onmouseout = function() {
				
				$("#workDescriptions").stop().text("");
				
				$("workDescriptions").stop().css("left", "45%");
				
				$('#workDescriptions').stop().fadeOut("slow", function() {});
				
			}
			
			document.getElementById("walgreens").onmouseover = function() {
				
				$("#workDescriptions").stop().text("Walgreens; 458 N Baltimore Ave, Derby, KS 67037; (316) 788-4317; Customer Service Associate; Operated Cash Register; Stocked and Faced Merchandise");
				
				$("#workDescriptions").css("left", "1%");
				
				$('#workDescriptions').stop().fadeIn("slow", function() {});
				
			}
			
			document.getElementById("walgreens").onmouseout = function() {
				
				$("#workDescriptions").stop().text("");
				
				$("#workDescriptions").css("left", "0%");
				
				$('#workDescriptions').stop().fadeOut("slow", function() {});
				
			}
			
			document.getElementById("mcdonalds").onmouseover = function() {
				
				$("#workDescriptions").stop().text(" McDonalds; 610 N Rock Rd, Derby, KS 67037; (316) 788-1779; Crew Member; Operates Cash Registers and Takes Orders; Bags and Shuttles Food");
				
				$("workDescriptions").stop().css("left", "-100%");
				
				$('#workDescriptions').stop().fadeIn("slow", function() {});
				
			}
			
			document.getElementById("mcdonalds").onmouseout = function() {
				
				$("#workDescriptions").stop().text("");
				
				$("workDescriptions").stop().css("left", "0%");
				
				$('#workDescriptions').stop().fadeOut("slow", function() {});
				
			}
			
			document.getElementById("fhsu_work").onmouseover = function() {
				
				$("#workDescriptions").stop().text("President and Founder of KAMS/Honors College Executive Council; I founded this organization and wrote its constitution at the request of the Director of the Kansas Academy of Mathematics and Science, and the Director of the Fort Hays State University Honors College. The KHCECs primary goal is to design academic and social programming to bring together the two student bodies of high-achieving students at FHSU to facilitate comradery and collaboration. From the first year at three members, it grew to 12 students by the second year");
            									 
            		$("#workDescriptions").css("left", "0%");
            		
            		$("#workDescriptions").css("top", "38%");
            		
            		$("#workDescriptions").css("font-size", ".8vw");
				
				$('#workDescriptions').stop().fadeIn("slow", function() {});
				
			}
			
			document.getElementById("fhsu_work").onmouseout = function() {
				
				$("#workDescriptions").stop().text("");
				
				$("#workDescriptions").css("left", "0%");
				
				$("#workDescriptions").css("top", "45%");
				
				$("#workDescriptions").css("font-size", "1vw");
				
				$('#workDescriptions').stop().fadeOut("slow", function() {});
				
			}
		
			document.getElementById("work").onmouseover = function() {}
			
			$('#timeline').fadeIn("slow", function() {});
			
			$('#May2015').fadeIn("slow", function() {});
			
			$('#August2015').fadeIn("slow", function() {});
			
			$('#October2016').fadeIn("slow", function() {});
			
			$('#arbys').fadeIn("slow", function() {});
			
			$('#walgreens').fadeIn("slow", function() {});
			
			$('#mcdonalds').fadeIn("slow", function() {});
			
			$('#fhsu_work').fadeIn("slow", function() {});
			
			$("#work span").text("");
			
			$(this).animate({ width: "88%", height: "73%" }, "slow");
			
			$("#education").animate({ top: "110%" }, "slow");
			
			$("#skills").animate({ left: "200%" }, "slow");
			
			$("#aboutme").animate({  left: "250%" }, "slow");
			
		} else {
		
			$(this).css("background-color", "#7F99A8");
		
			document.getElementById("work").onmouseover = function() {
			
					this.style.backgroundColor = "#7F99A8";
					
					this.style.cursor = "pointer";
					
				}
			
			$('#timeline').fadeOut("slow", function() {});
			
			$('#arbys').fadeOut("slow", function() {});
			
			$('#walgreens').fadeOut("slow", function() {});
			
			$('#mcdonalds').fadeOut("slow", function() {});
			
			$('#fhsu_work').fadeOut("slow", function() {});
			
			$("#work span").text("Work");
			
			$(this).animate({ width: "40%", height: "35%" }, "slow");
			
			$("#education").animate({ top: "33%" }, "slow");
			
			$("#skills").animate({ left: "66%" }, "slow");
			
			$("#aboutme").animate({ left: "91%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
	
	$("#education").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
		
			$(this).css("background-color", "#56788D");
		
			document.getElementById("education").onmouseover = function() {}
			
			$("#education span").text("");
			
			$(this).animate({ width: "88%", height: "73%", top: "-3.5%" }, "slow");
			
			$("#work").animate({ top: "-100%" }, "slow");
			
			$("#skills").animate({ top: "-200%", }, "slow");
			
			$("#aboutme").animate({  left: "250%" }, "slow");
			
			$('#derby').fadeIn("slow", function() {});
			
			$('#butler').fadeIn("slow", function() {});
			
			$('#fhsu_education').fadeIn("slow", function() {});
			
			document.getElementById("derby").onmouseover = function() {
					
				$('#educationNameDerby').stop().fadeIn("slow", function() {});
				
				$('#educationInfoDerby').stop().fadeIn("slow", function() {});
				
				$('#educationPhoneDerby').stop().fadeIn("slow", function() {});
				
				$('#educationAddressDerby').stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("butler").onmouseover = function() {
					
				$('#educationNameButler').stop().fadeIn("slow", function() {});
				
				$('#educationInfoButler').stop().fadeIn("slow", function() {});
				
				$('#educationPhoneButler').stop().fadeIn("slow", function() {});
				
				$('#educationAddressButler').stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("fhsu_education").onmouseover = function() {
					
				$('#educationNameFHSU').stop().fadeIn("slow", function() {});
				
				$('#educationInfoFHSU').stop().fadeIn("slow", function() {});
				
				$('#educationPhoneFHSU').stop().fadeIn("slow", function() {});
				
				$('#educationAddressFHSU').stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("derby").onmouseout = function() {
					
				$('#educationNameDerby').stop().fadeOut("slow", function() {});
				
				$('#educationInfoDerby').stop().fadeOut("slow", function() {});
				
				$('#educationPhoneDerby').stop().fadeOut("slow", function() {});
				
				$('#educationAddressDerby').stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("butler").onmouseout = function() {
					
				$('#educationNameButler').stop().fadeOut("slow", function() {});
				
				$('#educationInfoButler').stop().fadeOut("slow", function() {});
				
				$('#educationPhoneButler').stop().fadeOut("slow", function() {});
				
				$('#educationAddressButler').stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("fhsu_education").onmouseout = function() {
					
				$('#educationNameFHSU').stop().fadeOut("slow", function() {});
				
				$('#educationInfoFHSU').stop().fadeOut("slow", function() {});
				
				$('#educationPhoneFHSU').stop().fadeOut("slow", function() {});
				
				$('#educationAddressFHSU').stop().fadeOut("slow", function() {});
					
			}
			
		} else {
		
			$(this).css("background-color", "#7F99A8");
		
			document.getElementById("education").onmouseover = function() {
			
				this.style.backgroundColor = "#7F99A8";
				
				this.style.cursor = "pointer";
				
			}
			
			$("#education span").text("Education");
			
			$(this).animate({ width: "65%", height: "35%", top: "33%" }, "slow");
			
			$("#work").animate({ top: "30%" }, "slow");
			
			$("#skills").animate({ top: "-39.85%" }, "slow");
			
			$("#aboutme").animate({ left: "91%" }, "slow");
			
			$('#derby').fadeOut("slow", function() {});
			
			$('#butler').fadeOut("slow", function() {});
			
			$('#fhsu_education').fadeOut("slow", function() {});
			
			$('#educationNameDerby').fadeOut("slow", function() {});
			
			$('#educationNameButler').fadeOut("slow", function() {});
			
			$('#educationNameFHSU').fadeOut("slow", function() {});
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
	});
	
	$("#skills").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
		
			$(this).css("background-color", "#56788D");
		
			document.getElementById("skills").onmouseover = function() {}
			
			document.getElementById("jquery").onmouseover = function() {
					
					$("#jqueryDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("css").onmouseover = function() {
					
					$("#cssDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("html").onmouseover = function() {
					
					$("#htmlDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("photoshop").onmouseover = function() {
					
					$("#photoshopDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("python").onmouseover = function() {
					
					$("#pythonDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("javascript").onmouseover = function() {
					
					$("#javascriptDescription").stop().fadeIn("slow", function() {});
					
			}
			
			document.getElementById("jquery").onmouseout = function() {
					
					$("#jqueryDescription").stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("css").onmouseout = function() {
					
					$("#cssDescription").stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("html").onmouseout = function() {
					
					$("#htmlDescription").stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("photoshop").onmouseout = function() {
					
					$("#photoshopDescription").stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("python").onmouseout = function() {
					
					$("#pythonDescription").stop().fadeOut("slow", function() {});
					
			}
			
			document.getElementById("javascript").onmouseout = function() {
					
					$("#javascriptDescription").stop().fadeOut("slow", function() {});
					
			}
			
			$('#jquery').fadeIn("slow", function() {});
			
			$('#css').fadeIn("slow", function() {});
			
			$('#html').fadeIn("slow", function() {});
			
			$('#photoshop').fadeIn("slow", function() {});
			
			$('#python').fadeIn("slow", function() {});
			
			$('#javascript').fadeIn("slow", function() {});
			
			$("#skills span").text("");
			
			$(this).animate({ width: "88%", height: "73%", left: "24.5%" }, "slow");
			
			$("#education").animate({ top: "150%" }, "slow");
			
			$("#work").animate({ left: "-100%" }, "slow");
			
			$("#aboutme").animate({  left: "200%" }, "slow");
			
		} else {
		
			$(this).css("background-color", "#7F99A8");
		
			$('#jquery').fadeOut("slow", function() {});
			
			$('#css').fadeOut("slow", function() {});
			
			$('#html').fadeOut("slow", function() {});
			
			$('#photoshop').fadeOut("slow", function() {});
			
			$('#python').fadeOut("slow", function() {});
			
			$('#javascript').fadeOut("slow", function() {});
		
			document.getElementById("skills").onmouseover = function() {
			
				this.style.backgroundColor = "#7F99A8";
				
				this.style.cursor = "pointer";
				
			}
			
			$("#skills span").text("Skills");
			
			$(this).animate({ width: "23.4%", height: "35%", left: "66%"  }, "slow");
			
			$("#education").animate({ top: "33%" }, "slow");
			
			$("#work").animate({ left: "24.5%" }, "slow");
			
			$("#aboutme").animate({ left: "91%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
	
	$("#aboutme").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
		
			$(this).css("background-color", "#56788D");
	
			document.getElementById("aboutme").onmouseover = function() {}
				
	     	$('#pic').fadeIn("slow", function() {});
	     	
			$('#aboutmeparagraph').fadeIn("slow", function() {});
			
			$('#contactme').fadeIn("slow", function() {});
			
			$("#aboutme span").text("");
			
			$(this).animate({ width: "88%", height: "73%", left: "24.5%" }, "slow");
			
			$("#education").animate({ left: "-150%" }, "slow");
			
			$("#skills").animate({ left: "-150%" }, "slow");
			
			$("#work").animate({ left: "-150%" }, "slow");
			
		} else {
		
			$(this).css("background-color", "#7F99A8");
			
			document.getElementById("aboutme").onmouseover = function() {
			
					this.style.backgroundColor = "#7F99A8";
					
					this.style.cursor = "pointer";
					
				}
				
	     	$('#pic').fadeOut("slow", function() {});
	     	
			$('#aboutmeparagraph').fadeOut("slow", function() {});
			
			$('#contactme').fadeOut("slow", function() {});
			
			$("#aboutme span").text("About me");
			
			$(this).animate({ width: "21%", height: "73%", left: "91%" }, "slow");
			
			$("#education").animate({ left: "24.5%" }, "slow");
			
			$("#skills").animate({ left: "66%" }, "slow");
			
			$("#work").animate({ left: "24.5%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
    
    setTimeout(function() {
        
    		$('#welcome').fadeOut("slow");
        
    }, 1000);
    
     setTimeout(function() {
     
     	$('#iAm').fadeIn("slow", function() {});

     
 }, 2000);
 
     setTimeout(function() {
     
     	$('#iAm').fadeIn("slow", function() {});
		
     	$('#ZR').fadeIn("slow", function() {});

     
 }, 2000);
 
    setTimeout(function() {
        
    		$('#work').fadeIn("slow");
        
    }, 6200);
    
    setTimeout(function() {
        
    		$('#education').fadeIn("slow");
        
    }, 6400);
    
    setTimeout(function() {
        
    		$('#skills').fadeIn("slow");
        
    }, 6600);
    
    setTimeout(function() {
        
    		$('#aboutme').fadeIn("slow");
        
    }, 6800);
    
});