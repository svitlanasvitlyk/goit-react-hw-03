import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={s.container}>
      <input
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
        className={s.input}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
