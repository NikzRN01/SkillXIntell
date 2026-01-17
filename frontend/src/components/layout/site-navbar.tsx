import Link from "next/link";
import { Brain } from "lucide-react";
import Button from "@/components/ui/button";

export default function SiteNavbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:-translate-y-0.5">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SkillXIntell</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-slate-600 hover:text-slate-900 font-medium">Features</Link>
          <Link href="#sectors" className="text-slate-600 hover:text-slate-900 font-medium">Sectors</Link>
          <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium">Login</Link>
          <Link href="/register">
            <Button size="md">Get Started</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
