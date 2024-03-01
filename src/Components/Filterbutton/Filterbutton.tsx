import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

function CashRangeFilter({ onFilterChange }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cashRange, setCashRange] = useState([0, 1000000]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const applyFilter = () => {
    onFilterChange(cashRange);
    closeModal(); // Close the modal after applying the filter
  };

  return (
    <div className="cash-range-filter">
      <button onClick={openModal}>Open Filter</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Cash Range Filter"
      >
        <div className="modal-content">
          <input
            type="range"
            min={0}
            max={1000000}
            value={cashRange[0]}
            onChange={(e) => setCashRange([parseInt(e.target.value), cashRange[1]])}
          />
          <input
            type="range"
            min={0}
            max={1000000}
            value={cashRange[1]}
            onChange={(e) => setCashRange([cashRange[0], parseInt(e.target.value)])}
          />
          <button onClick={applyFilter}>Apply</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
}

export default CashRangeFilter;
