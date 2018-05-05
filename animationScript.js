// JavaScript Document

$(document).ready(function()
{
	//if they click the "links" link
	$('#links').click(function()
	{
		//shake the link images
		shake($("#linkButtons").find("img"));
	});
	
	$('#linkButtons').find("img").click(function()
	{
		buttonClick($(event.currentTarget));
	});
});
function shake(thing)
{
	//grow
	thing.animate(
	{
		height: "6rem",
		width: "9rem"
	}, 500);
	//shrink
	thing.animate(
	{
		height: "5rem",
		width: "8rem"
	}, 500);
}

function buttonClick(button)
{
	button.animate(
	{
		height: "4rem",
		width: "7rem"
	}, 110);
	button.animate(
	{
		height: "5rem",
		width: "8rem"
	}, 110);
}