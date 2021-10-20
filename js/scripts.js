$(document).ready(function(){


	
	$.ajax( {

		  url:'https://www.prevision-meteo.ch/services/json/mons',				 
		  
		  success:function(monObjet) {
			
				 console.log(monObjet);

			$('#condition').text(monObjet.current_condition.condition);
            $('#auj img').attr("src", monObjet.current_condition.icon);
            $('#temp').text("température_img: "+monObjet.current_condition.tmp);
            $('#humidite').text("humidité_img: "+monObjet.current_condition.humidity);
			$('#dem p').text(monObjet.fcst_day_0.condition);
            $('#dem img').attr("src", monObjet.fcst_day_0.icon);
			$('#ad p').text(monObjet.fcst_day_0.condition);
            $('#ad img').attr("src", monObjet.fcst_day_1.icon);

				  

			 
		  } // success function
		   
	   }); // ajax

        $('#go').on('click', function () {

            var autreville = $('#ville').val();

            $.ajax({
                url: 'https://www.prevision-meteo.ch/services/json/'+autreville,

                success:function(monObjet) {
			
                    console.log(monObjet);
                    
                    $('#condition').text(monObjet.current_condition.condition);
                    $('#auj img').attr("src", monObjet.current_condition.icon);
                    $('#temp').text("température_img: "+monObjet.current_condition.tmp);
                    $('#humidite').text("humidité_img: "+monObjet.current_condition.humidity);
                    $('#auj img').attr("src", monObjet.current_condition.icon);
                    $('#dem p').text(monObjet.fcst_day_0.condition);
                    $('#dem img').attr("src", monObjet.fcst_day_0.icon);
                    $('#ad p').text(monObjet.fcst_day_0.condition);
                    $('#ad img').attr("src", monObjet.fcst_day_1.icon);
   
                     
   
                
             } // success function
            });
    });

  });  // ready			   