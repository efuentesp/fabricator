/**
 * Toolkit JavaScript
 */
// $(document).tooltip();

$('#accordion-demo').accordion();

$('#panel-demo').accordion({
  collapsible: true,
});

$('#input_date').datepicker({
  showOn: 'button',
  buttonImage: '/assets/images/calendar.gif',
  buttonImageOnly: true,
});

$('#tabs').tabs();

$('#btn_open_dialog').click(function() {
  $('#dialog-demo').dialog();
});

$('#table_grid').jqGrid({
  datatype: 'local',
  height: 250,
  colNames: ['Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes'],
  colModel: [
    { name: 'id', index: 'id', width: 60, sorttype: 'int' },
    { name: 'invdate', index: 'invdate', width: 90, sorttype: 'date' },
    { name: 'name', index: 'name', width: 100 },
    {
      name: 'amount',
      index: 'amount',
      width: 80,
      align: 'right',
      sorttype: 'float',
    },
    { name: 'tax', index: 'tax', width: 80, align: 'right', sorttype: 'float' },
    {
      name: 'total',
      index: 'total',
      width: 80,
      align: 'right',
      sorttype: 'float',
    },
    { name: 'note', index: 'note', width: 150, sortable: false },
  ],
  pager: '#pager_grid',
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: 'id',
  sortorder: 'desc',
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: 'Resultados de búsqueda',
});

const mydata = [
  {
    id: '1',
    invdate: '2007-10-01',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00',
  },
  {
    id: '2',
    invdate: '2007-10-02',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00',
  },
  {
    id: '3',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00',
  },
  {
    id: '4',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00',
  },
  {
    id: '5',
    invdate: '2007-10-05',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00',
  },
  {
    id: '6',
    invdate: '2007-09-06',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00',
  },
  {
    id: '7',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00',
  },
  {
    id: '8',
    invdate: '2007-10-03',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00',
  },
  {
    id: '9',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00',
  },
];
for (let i = 0; i <= mydata.length; i++)
  $('#table_grid').jqGrid('addRowData', i + 1, mydata[i]);
