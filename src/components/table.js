import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

class BasicTable extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <TableContainer component={Paper}>
              <Table sx={{ /* minWidth: 600, */ width: '600px' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell align="right">Quantitiy</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.list_of_items.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{"1"}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }

}

export default BasicTable;