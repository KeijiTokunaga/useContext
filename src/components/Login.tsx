import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';

const Login: React.FC = () => {
  const { setId, setPassword } = useAuth();
  const { setLoading } = useLoading();
  const [inputId, setInputId] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // 画面が切り替わったら、すぐにローディングを解除
    setLoading(false);
  }, [setLoading]);

  const handleLogin = async () => {
    setLoading(true);
    setId(inputId);
    setPassword(inputPassword);

    try {
      await fakeLoginAPI();
      navigate('/home');
    } catch (err) {
      console.error('ログインに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">ログイン</h2>
        <input
          type="text"
          placeholder="ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          ログイン
        </button>
      </div>
    </div>
  );
};

const fakeLoginAPI = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

export default Login;
