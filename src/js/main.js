import '../css/input.css';
import { SerialPort } from 'serialport';

const channelNumberVHF = [
  '#channel-number-1',
  '#channel-number-2'
];

const port = new SerialPort({
  path: '',
  baudRate: 57600,
});

// port.on('readable', () => {
//   console.log('Data: ', port.read());
// });