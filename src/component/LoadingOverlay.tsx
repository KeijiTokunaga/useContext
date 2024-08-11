// LoadingOverlay.tsx
import React from "react";
import { useStateContext } from '../util/StateProvider';

interface LoadingOverlayProps {
  message?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  message = "Loading...",
  size = "large",
  color = "text-indigo-600",
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-20 h-20", // 大きなサイズを指定
  };

  const borderClasses = {
    small: "border-4",
    medium: "border-4",
    large: "border-8", // 太いボーダー
  };

  const { loading } = useStateContext();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex flex-col items-center">
        <div
          className={`border-t-2 ${borderClasses[size]} border-transparent ${sizeClasses[size]} rounded-full animate-spin ${color}`}
          style={{ borderTopColor: "currentColor" }}
        ></div>
        {message && (
          <p className="mt-4 text-white text-lg font-bold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
