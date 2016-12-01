/*
   Author: Zachary Reece
   Version: 11/22/2016
   Filename: script.js
   Description: The external JavaScript component of my personal website 
*/

// Calls functions below once page is loaded; each function runs on a timer after one another; fades text in and out
$(document).ready(function() {

	function adjustStyle(width) {
	    
	    width = parseInt(width);
	    
	    if (width > 1300) {
	    
	         document.location = "index.html";
	        
	    } else if (width < 801) {
	    
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

	$("#work").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
			
			$("#arbysDescription").stop().fadeIn("slow", function() {});
			
			$("#walgreensDescription").stop().fadeIn("slow", function() {});
			
			$("#mcdonaldsDescription").stop().fadeIn("slow", function() {});
			
			$("#FHSUWorkDescription").stop().fadeIn("slow", function() {});
			
			$("#arbys").stop().fadeIn("slow", function() {});
			
			$("#walgreens").stop().fadeIn("slow", function() {});
			
			$("#mcdonalds").stop().fadeIn("slow", function() {});
			
			$("#fhsu_work").stop().fadeIn("slow", function() {});
			
			$("#work span").stop().text("");
			
			$(this).stop().animate({ height: "74%" }, "slow");
			
			$("#education").stop().animate({ top: "110%" }, "slow");
			
			$("#skills").stop().animate({ top: "110%" }, "slow");
			
			$("#aboutme").stop().animate({  top: "110%" }, "slow");
			
		} else {
			
			$("#arbysDescription").stop().fadeOut("slow", function() {});
			
			$("#walgreensDescription").stop().fadeOut("slow", function() {});
			
			$("#mcdonaldsDescription").stop().fadeOut("slow", function() {});
			
			$("#FHSUWorkDescription").stop().fadeOut("slow", function() {});
			
			$("#arbys").stop().fadeOut("slow", function() {});
			
			$("#walgreens").stop().fadeOut("slow", function() {});
			
			$("#mcdonalds").stop().fadeOut("slow", function() {});
			
			$("#fhsu_work").stop().fadeOut("slow", function() {});
			
			$("#work span").stop().text("Work");
			
			$(this).stop().animate({ height: "17%" }, "slow");
			
			$("#education").stop().animate({ top: "35%" }, "slow");
			
			$("#skills").stop().animate({ top: "-1%" }, "slow");
			
			$("#aboutme").stop().animate({ top: "20%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
	
	$("#education").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
			
			$("#education span").stop().text("");
			
			$(this).stop().animate({ height: "74%", top: "-3%" }, "slow");
			
			$("#work").stop().animate({ top: "-110%" }, "slow");
			
			$("#skills").stop().animate({ top: "-110%", }, "slow");
			
			$("#aboutme").stop().animate({  top: "110%" }, "slow");
			
			$("#derby").stop().fadeIn("slow", function() {});
			
			$("#butler").stop().fadeIn("slow", function() {});
			
			$("#fhsu_education").stop().fadeIn("slow", function() {});
					
			$("#educationNameDerby").stop().fadeIn("slow", function() {});
				
			$("#educationInfoDerby").stop().fadeIn("slow", function() {});
				
			$("#educationPhoneDerby").stop().fadeIn("slow", function() {});
				
			$("#educationAddressDerby").stop().fadeIn("slow", function() {});
					
			$("#educationNameButler").stop().fadeIn("slow", function() {});
				
			$("#educationInfoButler").stop().fadeIn("slow", function() {});
				
			$("#educationPhoneButler").stop().fadeIn("slow", function() {});
				
			$("#educationAddressButler").stop().fadeIn("slow", function() {});
					
			$("#educationNameFHSU").stop().fadeIn("slow", function() {});
				
			$("#educationInfoFHSU").stop().fadeIn("slow", function() {});
				
			$("#educationPhoneFHSU").stop().fadeIn("slow", function() {});
				
			$("#educationAddressFHSU").stop().fadeIn("slow", function() {});
			
		} else {
			
			$("#education span").stop().text("Education");
			
			$(this).stop().animate({ height: "17%", top: "35%" }, "slow");
			
			$("#work").stop().animate({ top: "14%" }, "slow");
			
			$("#skills").stop().animate({ top: "-1%" }, "slow");
			
			$("#aboutme").stop().animate({ top: "20%" }, "slow");
			
			$("#derby").stop().fadeOut("slow", function() {});
			
			$("#butler").stop().fadeOut("slow", function() {});
			
			$("#fhsu_education").fadeOut("slow", function() {});
			
			$("#educationNameDerby").stop().fadeOut("slow", function() {});
				
			$("#educationInfoDerby").stop().fadeOut("slow", function() {});
				
			$("#educationPhoneDerby").stop().fadeOut("slow", function() {});
				
			$("#educationAddressDerby").stop().fadeOut("slow", function() {});
					
			$("#educationNameButler").stop().fadeOut("slow", function() {});
				
			$("#educationInfoButler").stop().fadeOut("slow", function() {});
				
			$("#educationPhoneButler").stop().fadeOut("slow", function() {});
				
			$("#educationAddressButler").stop().fadeOut("slow", function() {});
					
			$("#educationNameFHSU").stop().fadeOut("slow", function() {});
				
			$("#educationInfoFHSU").stop().fadeOut("slow", function() {});
				
			$("#educationPhoneFHSU").stop().fadeOut("slow", function() {});
				
			$("#educationAddressFHSU").stop().fadeOut("slow", function() {});
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
	});
	
	$("#skills").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
			
			$("#jquery").stop().fadeIn("slow", function() {});
			
			$("#jqueryDescription").stop().fadeIn("slow", function() {});
			
			$("#css").stop().fadeIn("slow", function() {});
			
			$("#cssDescription").stop().fadeIn("slow", function() {});
			
			$("#html").stop().fadeIn("slow", function() {});
			
			$("#htmlDescription").stop().fadeIn("slow", function() {});
			
			$("#photoshop").stop().fadeIn("slow", function() {});
			
			$("#photoshopDescription").stop().fadeIn("slow", function() {});
			
			$("#python").stop().fadeIn("slow", function() {});
			
			$("#pythonDescription").stop().fadeIn("slow", function() {});
			
			$("#javascript").stop().fadeIn("slow", function() {});
			
			$("#javascriptDescription").stop().fadeIn("slow", function() {});
			
			$("#skills span").stop().text("");
			
			$(this).stop().animate({ height: "74%", top: "-20%" }, "slow");
			
			$("#education").stop().animate({ top: "110%" }, "slow");
			
			$("#work").stop().animate({ top: "-110%" }, "slow");
			
			$("#aboutme").stop().animate({  top: "110%" }, "slow");
			
		} else {
		
			$("#jquery").stop().fadeOut("slow", function() {});
			
			$("#jqueryDescription").stop().fadeOut("slow", function() {});
			
			$("#css").stop().fadeOut("slow", function() {});
			
			$("#cssDescription").stop().fadeOut("slow", function() {});
			
			$("#html").stop().fadeOut("slow", function() {});
			
			$("#htmlDescription").stop().fadeOut("slow", function() {});
			
			$("#photoshop").stop().fadeOut("slow", function() {});
			
			$("#photoshopDescription").stop().fadeOut("slow", function() {});
			
			$("#python").stop().fadeOut("slow", function() {});
			
			$("#pythonDescription").stop().fadeOut("slow", function() {});
			
			$("#javascript").stop().fadeOut("slow", function() {});
			
			$("#javascriptDescription").stop().fadeOut("slow", function() {});
			
			$("#skills span").stop().text("Skills");
			
			$(this).stop().animate({ height: "17%", top: "-1%"  }, "slow");
			
			$("#education").stop().animate({ top: "35%" }, "slow");
			
			$("#work").stop().animate({ top: "14%" }, "slow");
			
			$("#aboutme").stop().animate({ top: "20%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
	
	$("#aboutme").click( function(event){
	
		event.preventDefault();
		
		if ( !$(this).hasClass("isUp") ) {
				
	     	$("#pic").stop().fadeIn("slow", function() {});
	     	
			$("#aboutmeparagraph").stop().fadeIn("slow", function() {});
			
			$("#contactme").stop().fadeIn("slow", function() {});
			
			$("#aboutme span").stop().text("");
			
			$(this).stop().animate({ height: "74%", top: "-37%" }, "slow");
			
			$("#education").stop().animate({ top: "-110%" }, "slow");
			
			$("#skills").stop().animate({ top: "-110%" }, "slow");
			
			$("#work").stop().animate({ top: "-110%" }, "slow");
			
		} else {
				
	     	$("#pic").stop().fadeOut("slow", function() {});
	     	
			$("#aboutmeparagraph").stop().fadeOut("slow", function() {});
			
			$("#contactme").stop().fadeOut("slow", function() {});
			
			$("#aboutme span").stop().text("About me");
			
			$(this).stop().animate({ height: "17%", top: "20%" }, "slow");
			
			$("#education").stop().animate({ top: "35%" }, "slow");
			
			$("#skills").stop().animate({ top: "-1%" }, "slow");
			
			$("#work").stop().animate({ top: "14%" }, "slow");
			
		}
		
		$(this).toggleClass("isUp");
		
		return false;
		
	});
    
    setTimeout(function() {
        
    		$("#welcome").stop().fadeOut("slow");
        
    }, 1000);
    
     setTimeout(function() {
     
     	$("#iAm").stop().fadeIn("slow", function() {});

     
 }, 2000);
 
     setTimeout(function() {
     
     	$("#iAm").stop().fadeIn("slow", function() {});
		
     	$("#ZR").stop().fadeIn("slow", function() {});

     
 }, 2000);
 
    setTimeout(function() {
        
    		$("#work").stop().fadeIn("slow");
        
    }, 6200);
    
    setTimeout(function() {
        
    		$("#skills").stop().fadeIn("slow");
        
    }, 6400);
    
    setTimeout(function() {
        
    		$("#education").stop().fadeIn("slow");
        
    }, 6600);
    
    setTimeout(function() {
        
    		$("#aboutme").stop().fadeIn("slow");
        
    }, 6800);
    
});