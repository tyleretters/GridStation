function redraw() {
  $('#grid').empty();
  $('#cells-foreground').empty();
  
  var gs = getInput();
  var cells = buildCells(gs);
  $('#grid').append(cells);
  $('#cells-foreground').append(cells);


  var totalCellWidth = gs.cellWidth + (gs.cellBorder * 2) + (gs.cellSpacing * 2)
  var gridWidthInPx = gs.width * totalCellWidth
  var adjustPadding = gs.cellSpacing * 2

  $('#grid').css('background-color', gs.backgroundColor);
  $('#grid').css('padding',adjustPadding);
  $('#grid').css('border-color', gs.borderColor);
  $('#grid').css('border-width', gs.gridBorder);
  $('#grid').css('width', gridWidthInPx);
  $('#cells-foreground').css('padding',adjustPadding);
  $('#cells-foreground').css('border-width', gs.gridBorder);
  $('#cells-foreground').css('width', gridWidthInPx);
  $('.push').css('width', $('.wrap').css('width'));

  $('#cells-foreground .cell').each(function() {
    $(this).css('background-color', gs.cellForegroundColor);
  });

}

function buildCells(gs) {
  var out = '';
  var counter = 0;
  for ( h = 0; h < gs.height; h++) {
    var thisRow = 'gs-row-' + h;
    out += '<div id="' + thisRow + '" style=" height:' + (gs.cellHeight + (gs.cellSpacing * 2) + (gs.cellBorder * 2)) + 'px;">';
    for ( w = 0; w < gs.width; w++) {
      out += '<div class="cell val-' + gs.cells[counter] + ' gs-col-' + w + '" style="background-color:' + gs.cellBackgroundColor + 
      '; border-color:' + gs.borderColor + 
      '; border-width:' + gs.cellBorder + 
      'px; width:' + gs.cellWidth + 
      'px; height:' + gs.cellHeight + 
      'px; margin:' + gs.cellSpacing + 
      'px;">&nbsp;</div>';
      counter++;
    }
    out += '</div>';
  }
  return out;
}

function getInput() {
  gs = {};
  gsInput = $('.gs-input').val().split(/\s*[\s,]\s*/)
  gs.width = Number(gsInput[0])
  gs.height = Number(gsInput[1])
  gs.backgroundColor = gsInput[2]
  gs.cellForegroundColor = gsInput[3]
  gs.cellBackgroundColor = gsInput[4]
  gs.borderColor = gsInput[5]
  gs.cellWidth = Number(gsInput[6])
  gs.cellHeight = Number(gsInput[7])
  gs.cellSpacing = Number(gsInput[8])
  gs.gridBorder = Number(gsInput[9])
  gs.cellBorder = Number(gsInput[10])
  gsInput.splice(0,11)
  gs.cells = gsInput
  return gs
}

$('.gs-input').bind('input propertychange', function () {
  redraw()
});

$(function() {
  $('.gs-input').val($('pre#default').html());
  redraw()
});