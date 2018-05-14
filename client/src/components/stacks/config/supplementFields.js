export default [
  { type: 'text', label: 'Supplement Title', name: 'title', errorMsg: 'You must provide a name', testVal: 'L-Tyrosine' },
  { type: 'number', label: 'Bottle Size', name: 'bottleSize', errorMsg: 'You must provide a size', testVal: '30' },
  { type: 'number', label: 'Number of Bottles', name: 'quantity', testVal: '1' },
  { type: 'text', label: 'Dosage', name: 'dose', errorMsg: 'You must provide a dose', testVal: '500' },
  { type: 'number', label: 'Serving Size', name: 'servingSize', testVal: '1' },
  { type: 'text', label: 'Price', name: 'price', errorMsg: 'You must provide a price', testVal: '12.99' },
  { type: 'text', label: 'Merchant', name: 'merchant', testVal: 'Whole Foods' },
  { type: 'text', label: 'Examine Link', name: 'examineLink', testVal: '' },
];
