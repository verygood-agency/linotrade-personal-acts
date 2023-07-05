// get all ronalds
var ronalds = document.querySelectorAll('.ronald');

// add mouseover event listener to each ronald
ronalds.forEach(function (ronald) {
  ronald.addEventListener('mouseover', function (e) {
    // get ronald position
    var pos = ronald.getBoundingClientRect();
    var elem_left = pos.left;
    var elem_top = pos.top;

    // get cursor position relative to the ronald
    var Xinner = e.clientX - elem_left;
    var Yinner = e.clientY - elem_top;

    // get the maximum distance to the corners
    var maxDist = Math.max(
      Math.sqrt(Math.pow(Xinner, 2) + Math.pow(Yinner, 2)),
      Math.sqrt(Math.pow(ronald.clientWidth - Xinner, 2) + Math.pow(Yinner, 2)),
      Math.sqrt(Math.pow(Xinner, 2) + Math.pow(ronald.clientHeight - Yinner, 2)),
      Math.sqrt(Math.pow(ronald.clientWidth - Xinner, 2) + Math.pow(ronald.clientHeight - Yinner, 2))
    );

    // set position of decoration element
    var decoration = ronald.querySelector('.decorate');
    decoration.style.left = Xinner + 'px';
    decoration.style.top = Yinner + 'px';
    decoration.style.width = maxDist * 2 + 'px';
    decoration.style.height = maxDist * 2 + 'px';
  });

  // Add mouseout event listener to each ronald
  ronald.addEventListener('mouseout', function (e) {
    // Reset decoration element size
    var decoration = ronald.querySelector('.decorate');
    decoration.style.width = '0';
    decoration.style.height = '0';
  });
});
