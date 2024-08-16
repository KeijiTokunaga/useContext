import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLoading } from '../context/LoadingContext';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { id, password } = useAuth();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const handleFetchData = async () => {
    setLoading(true);

    try {
      await fakeFetchAPI();
      console.log('データ取得成功');
    } catch (err) {
      console.error('データの取得に失敗しました', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">ホームページ</h1>
      <p>ここにコンテンツが表示されます。</p>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Password:</strong> {password}</p>

      <button
        onClick={handleFetchData}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4 mr-4"
      >
        データを再取得
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded mt-4"
      >
        ログイン画面に戻る
      </button>
    </div>
  );
};

const fakeFetchAPI = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export default Home;
