$(document).ready(function(){

	
	$.ajax( {

		  url:'https://www.prevision-meteo.ch/services/json/mons',				 
		  
		  success:function(monObjet) {
			
				 console.log(monObjet);

            $('#auj').addClass(monObjet.current_condition.condition_key);
			$('#condition').text(monObjet.current_condition.condition);
            $('#helene').attr("src","img/"+monObjet.current_condition.condition_key+".png");
            $('#temp').text(monObjet.current_condition.tmp);
            $('#humidite').text("humidité_img: "+monObjet.current_condition.humidity);
            

			$('#dem p').text(monObjet.fcst_day_1.condition);
            $('#dem img').attr("src", monObjet.fcst_day_1.icon);


			$('#ad p').text(monObjet.fcst_day_2.condition);
            $('#ad img').attr("src", monObjet.fcst_day_2.icon);

				  

			 
		  } // success function
		   
	   }); // ajax

        $('#go').on('click', function () {

            var autreville = $('#ville').val();
            //supprimerl'ancienne valeur quand on change de ville pour la 3e fois

            $.ajax({
                url: 'https://www.prevision-meteo.ch/services/json/'+autreville,

                success:function(monObjet) {
			
                    console.log(monObjet);

                    $('#auj').addClass(monObjet.current_condition.condition_key);
                    $('#condition').text(monObjet.current_condition.condition);
                    $('#helene').attr("src", "img/"+monObjet.current_condition.condition_key+".png");
                    $('#temp').text("température_img: "+monObjet.current_condition.tmp);
                    $('#humidite').text("humidité_img: "+monObjet.current_condition.humidity);
                    // $('#auj img').attr("src", monObjet.current_condition.icon);
                    $('#dem').addClass(monObjet.fcst_day_1.condition_key);
                    $('#dem p').text(monObjet.fcst_day_1.condition);
                    $('#dem img').attr("src", monObjet.fcst_day_1.icon);

                    $('#ad').addClass(monObjet.fcst_day_2.condition_key);
                    $('#ad p').text(monObjet.fcst_day_2.condition);
                    $('#ad img').attr("src", monObjet.fcst_day_2.icon);
   
                     
   
                
             } // success function
            });
    });

  });  // ready			   