$(document).ready(function(){
$("button").click(function(){
var arr = []
var bb =  "<button class='btn btns' type='button' ><i class='fa fa-trash'></i></button>"
var cc = " <button class='btn btnr' type='button'><i class='fa fa-folder'></i></button>"
var datas = JSON.parse(localStorage.getItem('prakash'))
if (datas != null) {
for (var i = 0; i < datas.length; i++) {
	arr.push(datas[i])
}
}
var a = $('#content').val()
var data = {uvalue : a , btnd : bb, btnt : cc} 
arr.push(data)
localStorage.setItem('prakash',JSON.stringify(arr));
var tex ="";
for (var i = 0; i<arr.length; i++) {
	tex ="<li>"+ arr[i].uvalue+" " + ""+arr[i].btnd +""+ arr[i].btnt +"</li>"
}
 $('#first').append(tex)
$('.btns').click(function(){
$(this).closest('li').remove();
});

 $('.btnr').click(function(){
 $(this).closest('li').detach() 
 $(this).closest('li').appendTo("#result")
 $(this).css("display","none")
 });
 $('#myform').trigger('reset')
});
});




