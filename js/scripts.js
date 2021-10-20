$(document).ready(function(){

    etc("nice");
    
	$( "#go" ).click(function() {
        var ville = $('#ville').val();
        if (ville=="bruxelles") {
            ville="bruxelles-1";
        }
        etc(ville);
        console.log(ville)
        });
        $("#ville").focus(function () {
            $(this).val("")
        });
       
       
        function etc(ville) {
       
         

         
 
       
       
	    $.ajax( {

		  url:'https://www.prevision-meteo.ch/services/json/'+ville,				 
		  
		  success:function(monObjet) {
				 console.log(monObjet);

                var today=monObjet.current_condition.condition_key;

                //  AUJOURD'HUI
                 if (today=="ensoleille"|| 
                 today=="eclaircies"||
                 today=="averses-de-pluie-faible"||
                 today=="pluie-forte"||
                 today=="neige-moderee"||
                 today=="brouillard"||
                 today=="faibles-passages-nuageux") {
                     $('#helene').attr("src","img/"+today+".png");
                     $('#aujx').removeClass().addClass(today);
                     console.log(today);
                 } else {
                     $('#helene').attr("src","img/nuageux.png");
                     $('#aujx').removeClass().addClass("ensoleille");
                 }

                 


                 $('#condition').text(monObjet.current_condition.condition);
     
                 $('#temp').text(monObjet.current_condition.tmp+"°C");
                 $('#nomVille').text( $('#ville').val());
                 $('#date').text(monObjet.current_condition.date);
                 $('#jour').text(monObjet.fcst_day_0.day_long);
                 $('#humidite').text(monObjet.current_condition.humidity);
                 $('#vent').text(monObjet.current_condition.wnd_dir);
                 $('#rose-vent').removeClass().addClass(monObjet.current_condition.wnd_dir);
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
                 $('#dem_tmax').text("T° max: "+monObjet.fcst_day_1.tmax+"°C ");
                 $('#dem_tmin').text("T° min: "+monObjet.fcst_day_1.tmin+"°C ");


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
                 $('#ad_tmax').text("T° max: "+monObjet.fcst_day_2.tmax+"°C ");
                 $('#ad_tmin').text("T° min: "+monObjet.fcst_day_2.tmin+"°C ");
     


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
                 $('#aad_tmax').text("T° max: "+monObjet.fcst_day_3.tmax+"°C");
                 $('#aad_tmin').text("T° min: "+monObjet.fcst_day_3.tmin+"°C");
                 



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
                 $('#last_tmax').text("T° max: "+monObjet.fcst_day_4.tmax+"°C ");
                 $('#last_tmin').text("T° min: "+monObjet.fcst_day_4.tmin+"°C ");
     
			 
		  } // success function
		   
	   }); // ajax

        
}
       


  });  // ready			   