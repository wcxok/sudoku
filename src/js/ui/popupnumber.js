// 处理弹出的操作面板
module.exports = class PopupNumbers {
  constructor ($panel) {
    this._$panel = $panel.hide().removeClass('hide')

    this._$panel.on('click', 'span', e => {
      const $cell = this._$taegetCell
      const $span = $(e.target)
      // 1-9 回填数字
      // mark1 && marks2 回填样式
      if ($span.hasClass('mark1')) {
        if ($cell.hasClass('mark1')) {
          $cell.removeClass('mark1')
        } else {
          $cell.removeClass('mark2')
            .addClass('mark1')
        }
      } else if ($span.hasClass('mark2')) {
        if ($cell.hasClass('mark2')) {
          $cell.removeClass('mark2')
        } else {
          $cell.removeClass('mark1')
            .addClass('mark2')
        }
      } else if ($span.hasClass('empty')) {
        // 取消数字和mark
        $cell.text(0)
          .addClass('empty')
      } else {
        $cell.removeClass('empty')
          .text($span.text())
        this._$container.children()
          .each((rowIndex, div) => {
            $(div).children().each((colIndex, span) => {
              const $span = $(span)
              if ($cell.text() === $span.text()) {
                $(span).addClass('markText')
              } else {
                $(span).removeClass('markText')
              }
            })
          })
      }

      this.hide()
    })
  }

  popup ($container, $cell) {
    this._$taegetCell = $cell
    this._$container = $container
    const { left, top} = $cell.position()
    this._$panel
      .css({
        left: `${left}px`,
        top: `${top}px`
      })
      .show()
  }

  hide () {
    this._$panel.hide()
  }
}
