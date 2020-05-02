import Assert from 'assert'
import range from '../range'


const swapRowsAndColumns = <T>(matrices: T[][]): T[][] => {
  const colCount = matrices.length
  const rowCount = Math.max(...matrices.map(matrix => matrix.length))
  Assert.ok(
    matrices.every(matrix => matrix.length === rowCount),
    'swapRowsAndColumns: The number of rows in given elements differ.',
  )

  return range(rowCount).map(rowIndex => (
    range(colCount).map(colIndex => (
      matrices[colIndex][rowIndex]
    ))
  ))
}


export default swapRowsAndColumns
