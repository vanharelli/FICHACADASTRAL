import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { HotelProvider, useHotel } from './HotelContext';
import CheckInScreen from './CheckInScreen';
import TermsScreen from './TermsScreen';

const CheckInRoute = () => {
  const { hotelID } = useParams<{ hotelID: string }>();
  const { loadHotel } = useHotel();

  useEffect(() => {
    if (hotelID) {
      loadHotel(hotelID);
    } else {
      // Default fallback
      loadHotel('alpha-plaza');
    }
  }, [hotelID, loadHotel]);

  return <CheckInScreen />;
};

const App: React.FC = () => {
  return (
    <HotelProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/checkin/:hotelID" element={<CheckInRoute />} />
          <Route path="/termos" element={<TermsScreen />} />
          <Route path="/" element={<Navigate to="/checkin/alpha-plaza" replace />} />
        </Routes>
      </BrowserRouter>
    </HotelProvider>
  );
};

export default App;
