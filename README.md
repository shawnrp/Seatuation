# Seatuation
NUS Orbital 2018 - Seatuation

View on: http://seatuation.herokuapp.com/ (currently only Chinese and Central Library and has mock contents)

To test the web app and view the realtime update functionality, open the url above on one device (e.g. computer). 

Then, using another device(e.g. phone), scan the relevant QR code on this repo's seatuationApp/public directory using a QR code scanner of your choice or the one provided in the web app. The colour of the seat on the corresponding library/floor/table should change. 

(Example: Open url, then click on Chinese Library floor 1. In a separate window, load the Test QR Code for Chinese library in this repo. Using your phone, scan the QR code. The seat status will be updated dynamically in realtime on both devices.)

To run locally:

1)Install MeteorJS
2)Clone repo to local directory
3)In command-line, navigate to directory/seatuationApp
4)run 'meteor npm install'
5)In the same directory with command-line, execute 'run.bat'