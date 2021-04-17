import Cookies from 'js-cookie'

import Printer from './printer'

const PRINTERS_COOKIE_KEY = 'PRINTERS'

export default class PrinterCollection {
  constructor () {
  	const cookie = Cookies.get(PRINTERS_COOKIE_KEY)
    const printerNames = cookie ? cookie.split(',') : []
    this.printers = printerNames.map(printerName => Printer.load(printerName))
  }

  addPrinter (printer) {
    this.printers.push(printer)
    printer.save()
    Cookies.set(PRINTERS_COOKIE_KEY, this.printers.map(printer => printer.name).join(','))
  }
}
