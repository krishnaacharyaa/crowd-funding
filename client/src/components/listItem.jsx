import React, { useEffect, useState } from 'react';

const ListItem = ({ ids, getDonations }) => {
  const [idCosts, setIdCosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const costs = await Promise.all(ids.map(async (id) => {
        const cost = await getDonations(id);
        return { id, cost };
      }));
      setIdCosts(costs);
    };

    fetchData();
  }, [ids, getDonations]);

  return (
    <div className='text-white'>
      {idCosts.map(({ id, cost }) => (
        <li key={id}>
          ID: {id}, Cost: {cost}
        </li>
      ))}
    </div>
  );
};

export default ListItem;