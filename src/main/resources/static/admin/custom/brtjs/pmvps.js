import { monthFilter,yearFilter } from './coreBirtUtils.js';

//----------------------------- Patient Monthly Visit per Speciality Report FORM SUBMIT LOGIC START----------------------------------
			
document.addEventListener('DOMContentLoaded', function (){
			
		// ----------------------------------- MONTH and YEAR FILTER START -----------------------------------
	     	monthFilter('monthid6');
		 	yearFilter('yearid6');
		// ----------------------------------- MONTH and YEAR FILTER END -----------------------------------

		 var form = document.getElementById('pmvps'); // Get the form by its ID

    	form.addEventListener('submit', function (e) {

        var oid = document.getElementById('oid6').value;
        var monthid = document.getElementById('monthid6').value;
        var yearid = document.getElementById('yearid6').value;
        
        
        //var error = document.getElementById('pmvps-error-message'); // Ensure you have this element in your HTML


        // ----------------------------------- QUERY STRING CONSTRUCTOR START -----------------------------------
       
        var queryString='?brtOid=' + encodeURIComponent(oid) + '&brtMonthid=' + encodeURIComponent(monthid)+ '&brtYearid=' +encodeURIComponent(yearid);
		
		// ----------------------------------- QUERY STRING CONSTRUCTOR END -----------------------------------
        
        // Only change the window location if form validation passes
        if (!e.defaultPrevented) {
            window.location.href = form.getAttribute('action') + queryString;
        }
    });

});
		
//----------------------------- Patient Monthly Visit per Speciality Report FORM SUBMIT LOGIC END----------------------------------
