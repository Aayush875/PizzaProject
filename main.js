menu_list_array = ["Veg Margherita Pizza", "Godzilla Pizza", "Doggy hot pizza","Cheese Pizza","Ultra Happy Pizza","Pizza with Olives"];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
         
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function toppinga(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
