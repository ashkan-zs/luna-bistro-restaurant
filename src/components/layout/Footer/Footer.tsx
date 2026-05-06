import { Camera, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest py-xl border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-md border-b border-outline-variant pb-md mb-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="font-h3 text-lg font-bold tracking-tight">Luna Bistro</h2>
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Instagram /></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Camera /></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Mail /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant font-label-caps uppercase tracking-widest">
          <p>© 2026 Luna Bistro. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
