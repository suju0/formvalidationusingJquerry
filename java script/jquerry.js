
function validation(){
    let validate = true
    $(function(){
            if ($("#name").val() == ""){
                $("#namewarning").show();
                validate = false
            }
            else{
                $("#namewarning").hide();
            }
            
            
            if ($("#email").val() == ""){
                $("#emailwarning").show();
                validate = false
            }
            else{
                $("#emailwarning").hide();
            }
            
            
            if ($("#password").val() == ""){
                $("#passwordwarning").show();
                validate = false
            }
            else{
                $("#passwordwarning").hide();
            }
            
            
            if ($("#textarea").val() == ""){
                $("#textareawarning").show();
                validate = false
            }
            else{
                $("#textareawarning").hide();
            }
            
            if ($('input[name="gender"]:checked').length == 0) {
                $("#genderwarning").show();  // Show warning if no radio button is selected
                validate = false
            } else {
                $("#genderwarning").hide();  // Hide warning if a radio button is selected
            }
            
            if ($('input[name="hobby"]:checked').length == 0) {
                $("#checkboxwarning").show();  // Show warning if no radio button is selected
                validate = false
            } else {
                $("#checkboxwarning").hide();  // Hide warning if a radio button is selected
            }

            if(validate){
                $("#form")[0].submit($(function(){
                    alert("Form is submitted")
                }));
            }
        });
}
