const SortButtonComponent = ({onAscClick, onDescClick, onResetClick}) => {
    return (
        <div className="sort-button">
            <button style={{transform: "rotate(180deg"}} onClick={onAscClick} title="Sort ascending">v</button>
            <button onClick={onResetClick} title="Reset sorting">–</button>
            <button onClick={onDescClick} title="Sort descending">v</button>
        </div>
    );
};

export default SortButtonComponent;
