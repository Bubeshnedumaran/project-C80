guest_list_array=[];

function submit() {
    var GuestName=document.getElementById("name").value;
    guest_list_array.push(GuestName);
    document.getElementById("people_name").innerHTML=guest_list_array;
}
function show() {
    var remove_commas=guest_list_array.join(" ");
    document.getElementById("guest_show").innerHTML=remove_commas;
}
function sort_name() {
    guest_list_array.sort(); 
    document.getElementById("sorted").innerHTML=guest_list_array;
}

function search() {
    var s=document.getElementById("Search").value;
    for (j=0; j < guest_list_array.length; j++){
         if (s==guest_list_array[j]) {
            found=found+1; 
        } 
    }
    document.getElementById("guest_result").innerHTML="name found"+found+" times/s";
    console.log("found name "+found+" time/s");

}
    