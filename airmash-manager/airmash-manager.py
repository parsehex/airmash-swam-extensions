from PyQt6 import uic, QtWidgets

import sys, pathlib, csv, os


class MainWindow(QtWidgets.QMainWindow):
	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		uifile = os.path.join(os.path.dirname(__file__), './main.ui')
		uic.loadUi(uifile, self)


app = QtWidgets.QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
