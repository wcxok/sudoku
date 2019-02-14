// 生成九宫格

const Tooltik = require('../core/tooltik')
const Sudoku = require('../core/sudoku')
const Checker = require('../core/checker')

class Grid {
  constructor (container) {
    this._$container = container
  }

  build () {
    const sudoku = new Sudoku()
    sudoku.make()
    const matrix = sudoku.puzzleMatrix

    const rowGroupClass = ['row_g_top', 'row_g_middle', 'row_g_bottom']
    const colGroupClass = ['col_g_left', 'col_g_center', 'col_g_right']

    const $cells = matrix.map(rowValues => rowValues.map((cellValue, colIndex) => {
      return $('<span>')
            .addClass(colGroupClass[colIndex % 3])
            .addClass(cellValue ? 'tips' : 'empty')
            .text(cellValue)
    }))

    const $divArray = $cells.map(($spanArray, rowIndex) => {
      return $('<div>')
            .addClass('row')
            .addClass(rowGroupClass[rowIndex % 3])
            .append($spanArray)
    })

    this._$container.append($divArray)

  }

  layout () {
    const width = $('span:first', this._$container).width()
    $('span', this._$container)
      .height(width)
      .css({
        'line-height': `${width}px`,
        'font-size': width < 32 ? `${width}px` : ''
      })
  }

  bindPopup (popupNumbers) {
    this._$container.on('click', 'span', e => {
      const $cell = $(e.target)
      if ($cell.is('.tips')) return
      popupNumbers.popup($cell)
    })
  }

  rebuild () {
    this._$container.empty()
    this.build()
    this.layout()
  }

  check () {
    // 从界面获取需要检查的数据
    const data = this._$container.children()
      .map((rowIndex, div) => {
        return $(div).children()
          .map((colIndex, span) => parseInt($(span).text()) || 0)
      })
      .toArray()
      .map($data => $data.toArray())

    const checker = new Checker(data)
    if (checker.check()) {
      return true
    }

    // 检查不成功，进行标记
    const marks = checker.matrixMarks
    this._$container.children()
      .each((rowIndex, div) => {
        $(div).children().each((colIndex, span) => {
          const $span = $(span)
          if ($span.is('.tips') || marks[rowIndex][colIndex]) {
            $(span).removeClass('error')
          } else {
            $(span).addClass('error')
          }

        })
      })
  }

  reset () {
    this._$container.find('span:not(.tips)')
      .removeClass('error mark1 mark2')
      .addClass('empty')
      .text(0)
  }

  clear () {
    this._$container.find('span.error')
      .removeClass('error')
  }
}

module.exports = Grid
