export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <main className="w-screen">
        <div className="w-1/2 max-w-xl bg-slate-100 p-8 rounded-2xl flex flex-col mx-auto mt-24">
            {children}
        </div>
      </main>
    )
  }
  