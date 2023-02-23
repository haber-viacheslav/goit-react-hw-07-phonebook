import PropTypes from 'prop-types';
import { FilterWrp, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const changeFilter = e => {
    const value = e.currentTarget.value.toLowerCase();
    dispatch(setFilterValue(value));
  };
  return (
    <FilterWrp>
      <label htmlFor="filter">Find contacts by name</label>

      <FilterInput
        name="filter"
        id="filter"
        type="text"
        value={filterValue}
        onChange={changeFilter}
      />
    </FilterWrp>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
};

export default Filter;
