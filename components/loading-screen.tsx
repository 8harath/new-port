export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-amber-50 flex flex-col items-center justify-center z-50">
      <div className="border-4 border-gray-800 border-t-amber-600 rounded-full w-16 h-16 animate-spin mb-4"></div>
      <h1 className="text-2xl font-bold uppercase">LOADING</h1>
      <p className="text-sm mt-2">Preparing portfolio...</p>
    </div>
  )
}
