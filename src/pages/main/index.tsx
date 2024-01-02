import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { countState } from '~/store/recoil'; // Recoil 상태를 가져옴

import './main.scss';

export default () => {
  const [id, setId] = useState<string>('');

  const [count, setCount] = useRecoilState(countState);

  const addCount = () => setCount(count + 1);
  const removeCount = () => setCount(count - 1);

  return (
    <div className="main">
      <div>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <Link to={`/ids/${id}`}>가자</Link>
      </div>

      <div className="count">
        <button onClick={() => addCount()}>+</button>
        <button onClick={() => removeCount()}>-</button>
        <span>{count}</span>
      </div>
    </div>
  );
};
