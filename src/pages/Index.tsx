import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">Calculate Your Call Cost</h1>
          
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <span className="text-sm text-muted-foreground">Need Yadaphone for the team?</span>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1 h-auto text-sm">
              See enterprise plans
            </Button>
          </div>
        </div>

        <Calculator />

        <FAQ />
      </main>
    </div>
  );
};

export default Index;
