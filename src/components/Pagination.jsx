import React, { useEffect, useState } from "react";


const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra

 const [page , setPage] = useState(1);
 const [todos , setTodos] = useState([]);
 const [limit,setLimit] = useState(3);
 


  //  const gtodo = async() => {
  //    let r = await axios.get(`http://localhost:8080/products?_page`);
  //    console.log(r);
  //  }

  //  gtodo()


console.log("mahesh")

  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">first</Button>
      <Button data-cy="pagination-previous-button">{'<'}</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">{'>'}</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
