import React from 'react';
import { useLoading } from '../context/LoadingContext';


const SpinnerOverlay: React.FC = () => {
  const { loading } = useLoading();
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="spinner border-t-4 border-white rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default SpinnerOverlay;
