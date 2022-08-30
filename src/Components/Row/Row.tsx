import React from 'react';
import { RowData } from '../../Redux/slices/articlesSlice';

const Row: React.FC<RowData> = ({ id, title, unit, quantity, unitPrice, price, parent, type }) => {
  return (
    <form className="row-item" action="">
      <div className="row-lvl">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z"
            fill="#7890B2"
          />
        </svg>
      </div>
      <div className="row-name">
        {title}
        <input className="row-name-inp" type="text" placeholder="Наименование" />
      </div>
      <div className="row-unit">
        {unit}
        <input className="row-unit-inp" type="text" placeholder="Ед. изм." />
      </div>
      <div className="row-count">
        {quantity}
        <input className="row-count-inp" type="text" placeholder="Количество" />
      </div>
      <div className="row-price">
        {unitPrice}
        <input className="row-price-inp" type="text" placeholder="Цена за ед." />
      </div>
      <div className="row-total-price">{price}</div>
    </form>
  );
};

export default Row;
