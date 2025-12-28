export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1220]">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-4xl font-bold text-white shadow-lg">
          M
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">MBUY Admin</h1>
          <p className="mt-2 text-zinc-400">لوحة التحكم</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 px-6 py-4 text-zinc-300 transition-colors hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>الرئيسية</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/5 px-6 py-4 text-zinc-300 transition-colors hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span>الطلبات</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/5 px-6 py-4 text-zinc-300 transition-colors hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>العملاء</span>
          </div>
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          ابدأ بتعديل ملف page.tsx لبناء لوحة التحكم
        </p>
      </main>
    </div>
  );
}
