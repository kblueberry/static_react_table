import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ROWS } from "./TableRows";
import { STATUS } from "./Constants";

function App() {
  return (
    <TableContainer>
      <Table aria-label="simple table" className="custom_table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h4 className="text_bold">Referral event</h4>
            </TableCell>
            <TableCell className="text_bold">
              <h4 className="text_bold">Advocate</h4>
            </TableCell>
            <TableCell className="text_bold">
              <h4 className="text_bold">Friend</h4>
            </TableCell>
            <TableCell className="text_bold">
              <h4 className="text_bold">Referral status</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <h4 className="text-bold">{row.event.heading}</h4>
                <p>{row.event.date}</p>
                <p className="text-bold">{row.event.price}</p>
              </TableCell>
              <TableCell>
                <h4 className="text-bold">{row.advocate.email}</h4>
                <p>{row.advocate.title}</p>
              </TableCell>
              <TableCell>
                <h4 className="text-bold">{row.friend.email}</h4>
                <p>{row.friend.title}</p>
              </TableCell>
              <TableCell>
                <h4 className="text-bold">{row.status.status}</h4>
                <p
                  className={
                    row.status.status === STATUS.Flagged ||
                    row.status.status === STATUS.Voided ||
                    row.status.status === STATUS.Blocked
                      ? "text_error"
                      : "text-secondary"
                  }
                >
                  {row.status.result}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
