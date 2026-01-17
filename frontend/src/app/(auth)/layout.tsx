import Link from "next/link";
import { Brain, Sparkles } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-full max-w-[550px] space-y-8 relative z-10">
                {/* Logo & Header */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <Link href="/" className="group flex items-center gap-2 mb-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105">
                                <Brain className="h-9 w-9 text-white" />
                                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
                            </div>
                        </div>
                    </Link>
                    <h1 className="font-bold text-4xl tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        SkillXIntell
                    </h1>
                    <p className="text-sm text-slate-600 font-medium max-w-xs">
                        Academic & Professional Skill Intelligence
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl shadow-2xl p-8 sm:p-10 hover:shadow-3xl transition-all">
                    {children}
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-slate-500 font-medium">
                    &copy; 2026 SkillXIntell. All rights reserved.
                </div>
            </div>
        </div>
    );
}
