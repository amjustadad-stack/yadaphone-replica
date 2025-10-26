import { Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-16 text-center shadow-sm border border-white/60">
            <div className="flex justify-center mb-6">
              <SettingsIcon className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Here you will see your settings
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Sign in to view your account settings
            </p>
            
            <Button className="rounded-full px-8">
              Sign in
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-12 py-4">
            <a href="/phone" className="text-foreground hover:text-primary transition-colors">
              Phone
            </a>
            <a href="/contacts" className="text-foreground hover:text-primary transition-colors">
              Contacts
            </a>
            <a href="/history" className="text-foreground hover:text-primary transition-colors">
              History
            </a>
            <a href="/settings" className="text-foreground hover:text-primary transition-colors font-semibold">
              Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Settings;
