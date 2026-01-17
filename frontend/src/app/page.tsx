import Link from "next/link";
import { Activity, TrendingUp, Target } from "lucide-react";
import SiteNavbar from "@/components/layout/site-navbar";
import SiteFooter from "@/components/layout/site-footer";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🚀 AI-Powered Skill Intelligence
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Holistic Academic & Professional
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
              Skill Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Track, analyze, and enhance your skills across Healthcare, Agriculture, and Urban Development sectors with AI-powered insights.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/register">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">Login</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Specialized Sectors</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Healthcare */}
          <div className="p-8 rounded-2xl border-2 border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Healthcare Informatics</h4>
            <p className="text-muted-foreground leading-relaxed">
              Track skills in EHR systems, medical coding, telemedicine, and healthcare IT infrastructure.
            </p>
          </div>

          {/* Agriculture */}
          <div className="p-8 rounded-2xl border-2 border-border bg-card hover:shadow-xl hover:border-secondary/50 transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 shadow-lg">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Agricultural Technology</h4>
            <p className="text-muted-foreground leading-relaxed">
              Master precision agriculture, IoT sensors, crop monitoring, and sustainable farming practices.
            </p>
          </div>

          {/* Urban */}
          <div className="p-8 rounded-2xl border-2 border-border bg-card hover:shadow-xl hover:border-accent/50 transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-lg">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Urban & Smart Cities</h4>
            <p className="text-muted-foreground leading-relaxed">
              Develop expertise in GIS, smart infrastructure, sustainable urban design, and city planning.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-muted to-primary/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">📊</div>
              <h5 className="font-bold mb-2 text-foreground">Skill Tracking</h5>
              <p className="text-sm text-muted-foreground">Comprehensive skill portfolio management</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎯</div>
              <h5 className="font-bold mb-2 text-foreground">Gap Analysis</h5>
              <p className="text-sm text-muted-foreground">Identify and bridge skill gaps</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🤖</div>
              <h5 className="font-bold mb-2 text-foreground">AI Recommendations</h5>
              <p className="text-sm text-muted-foreground">Personalized learning paths</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">📈</div>
              <h5 className="font-bold mb-2 text-foreground">Career Insights</h5>
              <p className="text-sm text-muted-foreground">Industry alignment scoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
