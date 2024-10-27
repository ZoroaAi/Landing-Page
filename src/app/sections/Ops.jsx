import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const OperationsAsService = () => {
    const features = [
      {
        number: "1",
        title: "Pause anytime",
        description:
          "The best systems are built in short bursts, not long cycles. Don't pay for a 4 mo+ agency retainer—get what you need with us & pause or cancel your subscription anytime.",
      },
      {
        number: "2",
        title: "No bloat",
        description:
          "We send you async project updates in Slack, and offer weekly ops consultations for discussions or brainstorming. We'll also revise systems until you're 100% satisfied.",
      },
      {
        number: "3",
        title: "Results twice as fast",
        description:
          "We can start as early as tomorrow. You'll hop on a thirty minute onboarding call to share credentials and get set up on our PM system, and then we'll get to work.",
      },
    ];
  
    return (
      <section className="bg-background py-12 px-6 sm:px-8 lg:px-10 border-t border-muted rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase mb-2">
            OPERATIONS AS A SERVICE
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
            A better way to build ops
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Hiring in-house is slow, expensive, and requires a large commitment up front. We take a different approach: on-demand automation experts on a simple monthly subscription to give you the systems you need for less.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card text-foreground border border-muted shadow-md"
              >
                <CardHeader>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-4">
                    <span className="text-sm font-semibold">{feature.number}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default OperationsAsService;