import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sliders, Sparkles, Check, HelpCircle } from "lucide-react";

interface EstimatorResult {
  scope: string;
  complexity: string;
  recommendation: string;
}

class EstimationEngine {
  calculate(budget: number, service: string): EstimatorResult {
    if (budget < 5000) {
      return {
        scope: "Single-page Web MVP or Design Prototype",
        complexity: "Low Complexity (1 Engineer)",
        recommendation: "Focus on testing core assumptions with a fast, high-fidelity landing page before building backend databases."
      };
    } else if (budget < 25000) {
      return {
        scope: "Full-stack Production Platform or Custom Mobile App",
        complexity: "Medium Complexity (2-3 Engineers)",
        recommendation: "Build a secure MERN stack web app or a cross-platform mobile app with standard dashboards, authentication, and core API integrations."
      };
    } else {
      return {
        scope: "Enterprise Portal, Custom AI Workflow, or API Cluster",
        complexity: "High Complexity (Dedicated Dev Team)",
        recommendation: "Architect microservices with auto-scaling infrastructure, integrate custom LLM chatbot chains, and set up continuous deployment pipelines."
      };
    }
  }
}

const estimationEngine = new EstimationEngine();

interface BudgetEstimatorProps {
  onApplyEstimator: (data: { service: string; budget: string; message: string }) => void;
}

const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({ onApplyEstimator }) => {
  const [budget, setBudget] = useState<number>(15000);
  const [selectedService, setSelectedService] = useState<string>("web-development");

  const estimation = estimationEngine.calculate(budget, selectedService);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    onApplyEstimator({
      service: selectedService,
      budget: budget < 5000 ? "< $5,000" : budget < 15000 ? "$5,000 - $15,000" : "$15,000 - $50,000",
      message: `Estimated via Interactive Widget: Target Budget ${formatCurrency(budget)} for ${selectedService}. Recommendation: ${estimation.scope}.`
    });
  };

  return (
    <Card className="border-border/50 bg-card/95 shadow-large relative overflow-hidden group">
      <div className="absolute top-0 right-0 h-32 w-32 bg-accent/5 rounded-full blur-2xl transition-all duration-500 group-hover:scale-110" />
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-accent/25 bg-accent/5 text-accent flex gap-1.5 items-center">
            <Sparkles className="h-3.5 w-3.5" /> Unique Feature
          </Badge>
          <Sliders className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardTitle className="text-2xl font-extrabold tracking-tight mt-2">
          Interactive Scope Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Slide your target budget to instantly analyze structural complexity and suggested next steps.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Service Picker */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Project Domain
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "web-development", label: "Web Apps" },
              { id: "ai-automation", label: "AI & Bot" },
              { id: "mobile-app", label: "Mobile" }
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedService(s.id)}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                  selectedService === s.id
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "border-border/60 hover:bg-muted text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Target Budget
            </label>
            <span className="text-lg font-bold text-accent">{formatCurrency(budget)}</span>
          </div>
          <input
            type="range"
            min="2000"
            max="75000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent transition-all duration-300"
          />
        </div>

        {/* Engine Outputs */}
        <div className="rounded-2xl border border-border/40 bg-muted/20 p-4 space-y-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">Suggested Scope</span>
            <p className="text-sm font-bold text-foreground mt-0.5">{estimation.scope}</p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs rounded-lg font-medium px-2 py-0.5">
              {estimation.complexity}
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed italic border-t border-border/30 pt-3">
            {estimation.recommendation}
          </p>
        </div>

        <Button onClick={handleApply} className="w-full font-semibold rounded-2xl" variant="default">
          <Check className="mr-2 h-4 w-4" /> Apply To Inquiry Form
        </Button>
      </CardContent>
    </Card>
  );
};

export default BudgetEstimator;
