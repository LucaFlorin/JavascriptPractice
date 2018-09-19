var z = 0;
var dt = 0;
var dt2 = 0;
var dt3 = 0;

$('.clicker').click(function(){
    z++;
    if( z==1 ){
        
        dt = Math.floor(Date.now() / 1000);  
    }

    if( z==5 ){
        dt2 = Math.floor(Date.now() / 1000);
        dt3 = dt2 - dt;
        z = 0;

            if(dt3 > 6)
            {
                alert('Time has past');
            }
            else
            {
                alert('Success!!!');
            }
    }

});