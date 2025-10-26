function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🦦 Sudang Log
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            React + NestJS + Supabase 블로그 프로젝트
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-2xl">⚛️</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">React</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">프론트엔드 프레임워크</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-2xl">🔷</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">NestJS</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">백엔드 프레임워크</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="text-2xl">🗄️</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Supabase</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">데이터베이스 & 인증</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">스타일링</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            다음 단계
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-green-500">✓</span>
              <span>프론트엔드 초기 설정 완료</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">○</span>
              <span>백엔드 NestJS 설정</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">○</span>
              <span>Supabase 데이터베이스 설정</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500">○</span>
              <span>라우팅 및 기본 페이지 구성</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
