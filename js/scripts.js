$(document).ready(function(){
    
	$( "#go" ).click(function() {
        var ville = $('#ville').val();
        thomas(ville);
        console.log(ville)
        });
       
       
        function thomas(ville) {
       
         
         
       
       
	    $.ajax( {

		  url:'https://www.prevision-meteo.ch/services/json/nice',				 
		  
		  success:function(monObjet) {
				 console.log(monObjet);

                

                //  AUJOURD'HUI
                 if (monObjet.current_condition.condition_key=="ensoleille"|| monObjet.current_condition.condition_key=="eclaircies"||monObjet.current_condition.condition_key=="averses-de-pluie-faible"||
                 monObjet.current_condition.condition_key=="pluie-forte"|| monObjet.current_condition.condition_key=="neige-moderee"||
                 monObjet.current_condition.condition_key=="brouillard"||
                 monObjet.current_condition.condition_key=="faibles-passages-nuageux") {
                     $('#helene').attr("src","img/"+monObjet.current_condition.condition_key+".png");
                 } else {
                     $('#helene').attr("src","img/nuageux.png");
                 }


                 $('.auj').removeClass().addClass(monObjet.current_condition.condition_key);
                 $('#condition').text(monObjet.current_condition.condition);
     
                 $('#temp').text(monObjet.current_condition.tmp);
                 $('#date').text(monObjet.current_condition.date);
                 $('#jour').text(monObjet.fcst_day_0.day_long);
                 $('#humidite').text(monObjet.current_condition.humidity);
                 $('#vent').text(monObjet.current_condition.wnd_dir);
                 $('#pression').text(monObjet.current_condition.pressure);



                //  DEMAIN                 
                 if (monObjet.fcst_day_1.condition_key=="ensoleille"|| 
                 monObjet.fcst_day_1.condition_key=="eclaircies"|| 
                 monObjet.fcst_day_1.condition_key=="averses-de-pluie-faible"||monObjet.fcst_day_1.condition_key=="pluie-forte"|| 
                 monObjet.fcst_day_1.condition_key=="neige-moderee"||
                 monObjet.fcst_day_1.condition_key=="brouillard"||
                 monObjet.fcst_day_1.condition_key=="faibles-passages-nuageux") {
                     $('#dem img').attr("src","img/"+monObjet.fcst_day_1.condition_key+".png");
                 } else {
                     $('#dem img').attr("src","img/nuageux.png");
                 }


                 $('#dem_cond').text(monObjet.fcst_day_1.condition);
                 $('#dem_jour').text(monObjet.fcst_day_1.date);
                 $('#dem_date').text(monObjet.fcst_day_1.day_long);
                 $('#dem_tmax').text(monObjet.fcst_day_1.tmax);
                 $('#dem_tmin').text(monObjet.fcst_day_1.tmin);


                //  APRES-DEMAIN
                 if (monObjet.fcst_day_2.condition_key=="ensoleille"|| 
                 monObjet.fcst_day_2.condition_key=="eclaircies"|| 
                 monObjet.fcst_day_2.condition_key=="averses-de-pluie-faible"||monObjet.fcst_day_2.condition_key=="pluie-forte"|| 
                 monObjet.fcst_day_2.condition_key=="neige-moderee"||
                 monObjet.fcst_day_2.condition_key=="brouillard"||
                 monObjet.fcst_day_2.condition_key=="faibles-passages-nuageux") {
                     $('#ad img').attr("src","img/"+monObjet.fcst_day_2.condition_key+".png");
                 } else {
                     $('#ad img').attr("src","img/nuageux.png");
                 }


                 $('#ad_cond').text(monObjet.fcst_day_2.condition);
                 $('#ad_jour').text(monObjet.fcst_day_2.date);
                 $('#ad_date').text(monObjet.fcst_day_2.day_long);
                 $('#ad_tmax').text(monObjet.fcst_day_2.tmax);
                 $('#ad_tmin').text(monObjet.fcst_day_2.tmin);
     


                 //AAD
                  
                 if (monObjet.fcst_day_3.condition_key=="ensoleille"|| 
                 monObjet.fcst_day_3.condition_key=="eclaircies"|| 
                 monObjet.fcst_day_3.condition_key=="averses-de-pluie-faible"||monObjet.fcst_day_3.condition_key=="pluie-forte"|| 
                 monObjet.fcst_day_3.condition_key=="neige-moderee"||
                 monObjet.fcst_day_3.condition_key=="brouillard"||
                 monObjet.fcst_day_3.condition_key=="faibles-passages-nuageux") {
                     $('#aad img').attr("src","img/"+monObjet.fcst_day_3.condition_key+".png");
                 } else {
                     $('#aad img').attr("src","img/nuageux.png");
                 }


                 $('#aad_cond').text(monObjet.fcst_day_3.condition);
                 $('#aad_jour').text(monObjet.fcst_day_3.date);
                 $('#aad_date').text(monObjet.fcst_day_3.day_long);
                 $('#aad_tmax').text(monObjet.fcst_day_3.tmax);
                 $('#aad_tmin').text(monObjet.fcst_day_3.tmin);
                 



                 //last
                 if (monObjet.fcst_day_4.condition_key=="ensoleille"|| 
                 monObjet.fcst_day_4.condition_key=="eclaircies"|| 
                 monObjet.fcst_day_4.condition_key=="averses-de-pluie-faible"||monObjet.fcst_day_4.condition_key=="pluie-forte"|| 
                 monObjet.fcst_day_4.condition_key=="neige-moderee"||
                 monObjet.fcst_day_4.condition_key=="brouillard"||
                 monObjet.fcst_day_4.condition_key=="faibles-passages-nuageux") {
                     $('#last img').attr("src","img/"+monObjet.fcst_day_4.condition_key+".png");
                 } else {
                     $('#last img').attr("src","img/nuageux.png");
                 }


                 $('#last_cond').text(monObjet.fcst_day_4.condition);
                 $('#last_jour').text(monObjet.fcst_day_4.date);
                 $('#last_date').text(monObjet.fcst_day_4.day_long);
                 $('#last_tmax').text(monObjet.fcst_day_4.tmax);
                 $('#last_tmin').text(monObjet.fcst_day_4.tmin);
     
			 
		  } // success function
		   
	   }); // ajax

        
}
       
thomas("Bruxelles-1");

  });  // ready			   