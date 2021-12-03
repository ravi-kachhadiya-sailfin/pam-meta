import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { PaginationButton, PaginationBTNText } from "app/admin/containers/DashBoard.style";

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
});

function CustomPagination({ count, page, onChange, ...rest }) {
  const classes = useStyles();
  const { items } = usePagination({
    count: count,
  });

  return (
    <nav className="pagination-container shadow-display">
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, onClick, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <PaginationButton className={`shadow-none ${selected ? "active-pg-btn" : ""}`} {...item}>
              <PaginationBTNText className={`${selected ? "active-pg-btn" : ""}`}>...</PaginationBTNText>
            </PaginationButton>;
          } else if (type === 'page') {
            children = (
              <PaginationButton onClick={(e) => { onClick(); onChange(e, page) }} className={`shadow-none label ${selected ? "active-pg-btn" : ""}`
              } {...item} >
                <PaginationBTNText className={`${selected ? "active-pg-btn" : ""}`}>{page}</PaginationBTNText>
              </PaginationButton>
            );
          } else {
            children = (
              <PaginationButton onClick={(e) => { onClick(); onChange(e, type === "previous" ? page - 1 : page + 1) }} className={`shadow-none ${type === "previous" ? "prev-btn" : "next-btn"} ${item.disabled ? "disabled" : ""}`} {...item}>
                <PaginationBTNText className={`${item.disabled ? "disabled" : ""}`}>{type === "previous" ? "Prev" : "Next"}</PaginationBTNText>
              </PaginationButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul >
    </nav >
  );
}

export default CustomPagination;