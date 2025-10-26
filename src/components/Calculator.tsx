import { useState } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Smartphone } from "lucide-react";

const Calculator = () => {
  const [country, setCountry] = useState("United States 🇺🇸");
  const [phoneType, setPhoneType] = useState<"mobile" | "landline">("mobile");

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium whitespace-nowrap">I'm calling</span>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="flex-1 bg-background border-b-2 border-primary rounded-none border-x-0 border-t-0 focus:ring-0 focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States 🇺🇸">United States 🇺🇸</SelectItem>
                <SelectItem value="Canada 🇨🇦">Canada 🇨🇦</SelectItem>
                <SelectItem value="United Kingdom 🇬🇧">United Kingdom 🇬🇧</SelectItem>
                <SelectItem value="Germany 🇩🇪">Germany 🇩🇪</SelectItem>
                <SelectItem value="France 🇫🇷">France 🇫🇷</SelectItem>
                <SelectItem value="Australia 🇦🇺">Australia 🇦🇺</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg font-medium">To a</span>
            <div className="flex gap-2">
              <Button
                variant={phoneType === "mobile" ? "default" : "outline"}
                className={`rounded-full gap-2 ${
                  phoneType === "mobile" 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80 text-foreground border-0"
                }`}
                onClick={() => setPhoneType("mobile")}
              >
                <Smartphone className="h-4 w-4" />
                Mobile
              </Button>
              <Button
                variant={phoneType === "landline" ? "default" : "outline"}
                className={`rounded-full gap-2 ${
                  phoneType === "landline" 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80 text-foreground border-0"
                }`}
                onClick={() => setPhoneType("landline")}
              >
                <Phone className="h-4 w-4" />
                Landline
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 text-center">
            <div className="text-sm text-muted-foreground mb-1">Your call will cost</div>
            <div className="text-3xl font-bold">
              $0.02 <span className="text-lg font-normal">per minute</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg font-semibold">
          Call 🇺🇸 United States now
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
