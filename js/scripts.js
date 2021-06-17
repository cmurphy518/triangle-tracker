$(document).ready(function() {
$("#triangle-form").submit(function(event) {
  event.preventDefault();
  const s1 = parseInt($("#side1").val());
  const s2 = parseInt($("#side2").val());
  const s3 = parseInt($("#side3").val());

  if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 < s1 ) {
    triangle = "NOT A TRIANGLE"; 
  } else if ( s1 != s2 && s2 != s3) {
    triangle = "Scalene";
    console.log(s2);
    console.log(triangle);
  } else if ( s1 === s2 && s2 != s3 || s2 === s3 && s2 != s1 ) {
    triangle = "Isosceles";
  } else if (s1 === s2 && s1 === s3 && s2 === s3) {
    triangle = "Equilateral";
  } else {
    triangle = "try again";
    console.log(triangle);
  }

  $("#triangle-type").show();
  $("#triangle").text(triangle);
  });
});