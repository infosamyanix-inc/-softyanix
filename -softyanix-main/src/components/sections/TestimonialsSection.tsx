import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { benefits, testimonials } from "@/data/contact";

const TestimonialsSection = () => (
  <section className="section-shell section-muted">
    <div className="content-wrap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Benefits */}
        <div>
          <h2 className="section-heading mb-6">Why Choose Softyanix?</h2>
          <p className="section-subheading mb-8">
            We deliver enterprise-grade solutions with startup agility. Your
            success is our priority.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
