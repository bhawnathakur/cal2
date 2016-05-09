
    jQuery(function($) {
    $('.auto').autoNumeric('init');
}); 

function vars()
{
	var cumulative_interest=0;
i_d3=parseFloat($('#i_d3').autoNumeric('get'));
i_d4=parseFloat($('#i_d4').autoNumeric('get'));
i_d5=parseFloat($('#i_d5').autoNumeric('get'));
i_d6=parseFloat($('#i_d6').autoNumeric('get'));
i_d7=parseFloat($('#i_d7').autoNumeric('get'));

i_d9=parseFloat($( "#i_d9" ).val());
i_d10=parseFloat($('#i_d10').autoNumeric('get'));
i_d11=parseFloat($('#i_d11').autoNumeric('get'));
i_d12=parseFloat($('#i_d12').autoNumeric('get'));

i_d13=parseFloat($('#i_d13').autoNumeric('get'));
i_d14=parseFloat($('#i_d14').autoNumeric('get'));
i_d15=parseFloat($('#i_d15').autoNumeric('get'));
i_d16=parseFloat($('#i_d16').autoNumeric('get'));
i_d17=parseFloat($('#i_d17').autoNumeric('get'));
i_d18=parseFloat($('#i_d18').autoNumeric('get'));
i_d19=parseFloat($('#i_d19').autoNumeric('get'));
i_d20=parseFloat($('#i_d20').autoNumeric('get'));
i_d21=parseFloat($('#i_d21').autoNumeric('get'));
i_d22=parseFloat($('#i_d22').autoNumeric('get'));
i_d23=parseFloat($('#i_d23').autoNumeric('get'));
i_d24=parseFloat($('#i_d24').autoNumeric('get'));
i_d25=parseFloat($('#i_d25').autoNumeric('get'));
i_d26=parseFloat($('#i_d26').autoNumeric('get'));
i_d27=parseFloat($('#i_d27').autoNumeric('get'));
i_d28=parseFloat($('#i_d28').autoNumeric('get'));
	Loan_Amount=i_d6;
	$('#loan_amount').html("$" +Loan_Amount);
	Loan_Years=i_d9;
	
	Interest_Rate=i_d10;
	$('#interest_rate').html(Interest_Rate+"%");
	
	$('#Loan_Years').html(Loan_Years);
	Num_Pmt_Per_Year=$('#Num_Pmt_Per_Year').autoNumeric('get');
	Scheduled_Monthly_Payment=-1*PMT(Interest_Rate/(Num_Pmt_Per_Year*100),Loan_Years*Num_Pmt_Per_Year,Loan_Amount);
	Scheduled_num_Payments=Loan_Years*Num_Pmt_Per_Year;
	$('#Scheduled_Monthly_Payment').html("$ " +Scheduled_Monthly_Payment.toFixed(2));
	$('#Scheduled_num_Payments').html(Scheduled_num_Payments);
	$('#actual_num_Payments').html(Scheduled_num_Payments);
	Scheduled_Extra_Payments=i_d12;
	
	var tbl="";
	 tbl +="<table width='99%' border='1' id='cml'> <tbody> <tr id='r1'><td width='5%'  align='center'><strong>PmtNo.</strong></td> <td width='10%'  align='center'><strong>Payment Date</strong></td>  <td width='10%'  align='center'><strong>Beginning Balance</strong></td> <td width='10%'  align='center'><strong>Scheduled Payment</strong></td><td width='10%''  align='center'><strong>Extra Payment</strong></td>   <td width='10%'  align='center'><strong>Total Payment</strong></td><td width='10%'  align='center'><strong>Principal</strong></td> <td width='10%'  align='center'><strong>Interest</strong></td> <td width='10%' align='center'><strong>Ending Balance</strong></td>   <td width='10%'  align='center'><strong>Cumulative Interest</strong></td> </tr>";
	  for(i=1;i<Scheduled_num_Payments+1;i++)
	  {
	 tbl += "<tr><td align='center'><strong>";
	 tbl +=i ;
	 
	 tbl +="</strong></td><td>bal1</td><td>";
	 if(i==1)
	 {
		 bal=Loan_Amount;
		 
	 }
	 else{
	 bal=ending_balance;
	 }
	 total_amount=Scheduled_Monthly_Payment+Scheduled_Extra_Payments;
	 interest=(Interest_Rate/(100*Num_Pmt_Per_Year))*bal;
	 principal=total_amount-interest;
	 
	 ending_balance=bal-principal;
	 
	 tbl += "$  " +bal.toFixed(2);
	 
	 cumulative_interest +=interest;
	 tbl +="</td><td>";
	 tbl += "$  " +Scheduled_Monthly_Payment.toFixed(2);
	 tbl +="</td><td>";
	 tbl += "$  " +Scheduled_Extra_Payments;
	 tbl +="</td><td>";
	 tbl +="$ " +total_amount.toFixed(2);
	 tbl +="</td><td>";
	 tbl +="$ " +principal.toFixed(2);
	 tbl +="</td><td>";
	 tbl +="$ " +interest.toFixed(2);
	 tbl +="</td><td>";
	 tbl+="$ " +ending_balance.toFixed(2);
	 
	 
	 tbl+="</td><td>";
	 tbl+="$ " +cumulative_interest.toFixed(2);
	 
	 tbl+="</td></tr>";
	  }
	  
	 tbl +="</tbody></table>";
$("#cml").html(tbl);
	
	$('#Scheduled_Extra_Payments').html("$ "+Scheduled_Extra_Payments);
}
 function PMT(i, n, p) {
 return i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n));
}
var i_d=Array();
var count;
function doCount() {

  count = setInterval(cal2,1000);
};
doCount();

function pauseCounting() {
  clearInterval(count);
  
}

function continueCounting() {

  doCount();
}

function cal2()
{
	
	vars();
	
pauseCounting();
};
 