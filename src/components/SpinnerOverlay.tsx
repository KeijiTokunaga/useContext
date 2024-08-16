import React from 'react';
import { useLoading } from '../context/LoadingContext';


const SpinnerOverlay: React.FC = () => {
  const { loading } = useLoading();
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin h-24 w-24 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div >
  );
};

export default SpinnerOverlay;
