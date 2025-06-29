export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <span>&copy; {new Date().getFullYear()} BUILDING BHARAT. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
          <a href="/terms" className="hover:text-orange-500">Terms</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
        </div>
      </div>
    </footer>
  )
}
