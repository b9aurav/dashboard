import { TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { TableData } from "../constant/TableData";
import { Chip } from "@mui/joy";

type Props = {};

const AppsTable = (props: Props) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ background: "#f9fafb" }}>
              <TableCell>Source</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>UserId</TableCell>
              <TableCell>Joined</TableCell>
              <TableCell>Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className="font-bold">{row.Source}</span>
                </TableCell>
                <TableCell>{row.Amount}</TableCell>
                <TableCell>
                  {row.Status === "Active" && (
                    <Chip color="success">{row.Status}%</Chip>
                  )}
                  {row.Status === "Pending" && (
                    <Chip color="warning">{row.Status}%</Chip>
                  )}
                  {row.Status === "Cancelled" && (
                    <Chip color="neutral">{row.Status}%</Chip>
                  )}
                </TableCell>
                <TableCell>{row.UserId}</TableCell>
                <TableCell>{row.Joined}</TableCell>
                <TableCell>{row.Group}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          className="flex justify-center items-center"
          count={TableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </div>
  );
};

export default AppsTable;
