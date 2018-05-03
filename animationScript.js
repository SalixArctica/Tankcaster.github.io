// JavaScript Document

$(document).ready(function()
{
	//if they click the "links" link
	$('#links').click(function()
	{
		//shake the link images
		shake($("#linkButtons").find("img"));
	});
});

function shake(thing)
{
	//grow
	thing.animate(
	{
		height: "55px",
		width: "55px"
	}, 500);
	//shrink
	thing.animate(
	{
		height: "50px",
		width: "50px"
	}, 500);
}