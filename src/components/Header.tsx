import { DollarSign, HelpCircle, Moon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
            ya
          </div>
          <span className="text-2xl font-semibold italic">Yadaphone</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Rates
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Make a call
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
