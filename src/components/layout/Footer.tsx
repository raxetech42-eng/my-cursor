import LegalNotice from "@/components/legal/LegalNotice";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 py-16">
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          flex
          flex-col
          space-y-6
          text-xs
          text-gray-500
        "
      >
        {/* Brand */}
        <p className="text-gray-600 font-medium">
          Private Charter & Airport Transfer Service
        </p>

        {/* Legal */}
        <LegalNotice />

        {/* Copyright */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
