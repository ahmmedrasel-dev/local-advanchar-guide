import { useEffect, useState } from 'react';
import { getBookingItem } from '../utilities/fakedb';

const useBooking = (services) => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const bookingItem = getBookingItem()
    const saveItem = [];
    for (const id in bookingItem) {
      const addedItem = services.find(service => service.id === id);
      if (addedItem) {
        const quantity = bookingItem[id];
        addedItem.quantity = quantity;
        saveItem.push(addedItem)
      }
    }
    setBooking(saveItem)
  }, [services])

  return [booking, setBooking]
};

export default useBooking;