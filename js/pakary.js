var $container = $('.packery');

$container.packery({
  columnWidth: 80,
  rowHeight: 80
});

// bind draggabilly events to item elements
$container.find('.item').each( makeEachDraggable );

function makeEachDraggable( i, itemElem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( itemElem );
  // bind Draggabilly events to Packery
  $container.packery( 'bindDraggabillyEvents', draggie );
}


